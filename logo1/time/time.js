function out1() {
    window.location.href = "../../index.html";
}

var data = window.JADWAL_PELAJARAN;
var KEY = "kelasJadwal";

function guruDariKode(kode) {
    if (!kode) return null;
    var pad = String(kode).padStart(2, "0");
    return data.guru[kode] || data.guru[pad] || data.guru[String(Number(kode))] || null;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function renderPelajaran(kelas) {
    var judul = document.getElementById("judulPelajaran");
    var meta = document.getElementById("metaPelajaran");
    var box = document.getElementById("tabelPelajaran");
    if (!data) {
        box.innerHTML = "<p>Data jadwal pelajaran belum termuat.</p>";
        return;
    }

    judul.textContent = data.judul;
    meta.textContent = data.sekolah + " · TP " + data.tahun + " · Kelas " + kelas;

    var html = '<div class="table-wrap"><table><thead><tr>' +
        "<th>Jam</th><th>Waktu</th><th>Mapel / kegiatan</th><th>Guru</th>" +
        "</tr></thead><tbody>";

    var hariSekarang = "";
    data.baris.forEach(function (row) {
        if (row.hari && row.hari !== hariSekarang) {
            hariSekarang = row.hari;
            html += '<tr class="hari-row"><td colspan="4">' + escapeHtml(hariSekarang) + "</td></tr>";
        }

        var jam = row.jam || "—";
        var waktu = row.waktu || "—";
        var mapel = "";
        var guru = "";
        var eventClass = "";

        if (row.jam === "PIKET") {
            eventClass = " event-row";
            mapel = "Piket guru";
            guru = row.event || "";
            jam = "Piket";
        } else if (row.event) {
            eventClass = " event-row";
            mapel = row.event;
            guru = "—";
        } else {
            var kode = row.kode[kelas];
            var g = guruDariKode(kode);
            if (g) {
                mapel = g.mapel || ("Kode " + kode);
                guru = g.nama;
            } else if (kode) {
                mapel = "Kode " + kode;
                guru = "—";
            } else {
                mapel = "—";
                guru = "—";
            }
        }

        html += "<tr class=\"" + eventClass.trim() + "\">" +
            "<td>" + escapeHtml(jam) + "</td>" +
            "<td>" + escapeHtml(waktu) + "</td>" +
            "<td>" + escapeHtml(mapel) + "</td>" +
            "<td>" + escapeHtml(guru) + "</td>" +
            "</tr>";
    });

    html += "</tbody></table></div>";
    box.innerHTML = html;
}

function isiPilihanKelas() {
    var select = document.getElementById("pilihKelas");
    var saved = localStorage.getItem(KEY);
    var list = (data && data.kelas) || [];
    select.innerHTML = "";
    list.forEach(function (k) {
        var opt = document.createElement("option");
        opt.value = k;
        opt.textContent = k.replace("-", " ");
        select.appendChild(opt);
    });
    if (saved && list.indexOf(saved) !== -1) {
        select.value = saved;
    } else {
        select.value = list[0] || "VII-A";
    }
    select.addEventListener("change", function () {
        localStorage.setItem(KEY, select.value);
        renderPelajaran(select.value);
    });
    renderPelajaran(select.value);
}

document.querySelectorAll(".tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(function (t) {
            t.classList.toggle("is-on", t === btn);
        });
        var id = btn.getAttribute("data-tab");
        document.getElementById("panel-pelajaran").hidden = id !== "pelajaran";
        document.getElementById("panel-piket").hidden = id !== "piket";
    });
});

isiPilihanKelas();
