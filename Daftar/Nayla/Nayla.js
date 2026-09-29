
const namaSiswa = document.currentScript.src
    .split("/")
    .pop()
    .replace(/\..*js$/, "");


const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",

    data: {
        labels: ["M7", "M8", "M9", "M10", "M11"],

        datasets: [{
            label: "Kas(Kekurangan)",
            data: [],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    }
});


const ctx1 = document.getElementById("grafikKeuangan1");

const chart1 = new Chart(ctx1, {
    type: "line",

    data: {
        labels: ["M7", "M8", "M9", "M10", "M11"],

        datasets: [{
            label: "Kas",
            data: []
        }]
    }
});

function ambilDataExcel(fileExcel, chartTarget, namaData) {

    console.log("Mengambil Excel:", fileExcel);

    fetch("../" + fileExcel + "?t=" + Date.now())
        .then(response => {

            console.log(
                "Fetch",
                fileExcel,
                ":",
                response.status,
                response.ok
            );

            return response.arrayBuffer();
        })
        .then(data => {

            console.log("Excel berhasil dibaca:", fileExcel);

            const workbook = XLSX.read(data, {
                type: "array"
            });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            const dataExcel = XLSX.utils.sheet_to_json(sheet, {
                header: 1
            });

            console.log(
                "Data Excel (" + namaData + "):",
                dataExcel
            );

            console.log(
                "Nama siswa:",
                namaSiswa
            );

            const labels = chartTarget.data.labels;

            const headerSiswa = dataExcel[14];

            const kolomSiswa = headerSiswa.indexOf(namaSiswa);

            console.log(
                "Kolom " + namaData + ":",
                kolomSiswa
            );

            if (kolomSiswa === -1) {
                throw new Error(
                    `Nama siswa "${namaSiswa}" tidak ditemukan di ${fileExcel}`
                );
            }

            const hasilData = labels.map(minggu => {

                const barisMinggu = dataExcel.findIndex(
                    row => row[0] === minggu
                );

                console.log(
                    namaData,
                    minggu,
                    "baris:",
                    barisMinggu
                );

                if (barisMinggu === -1) {
                    throw new Error(
                        `Minggu "${minggu}" tidak ditemukan di ${fileExcel}`
                    );
                }

                return dataExcel[barisMinggu][kolomSiswa] ?? 0;
            });

            console.log(
                "HASIL DATA " + namaData.toUpperCase() + ":",
                hasilData
            );

            chartTarget.data.datasets[0].data = hasilData;

            chartTarget.update();

        })
        .catch(error => {

            console.error(
                "ERROR membaca",
                fileExcel,
                ":",
                error
            );

        });
}
ambilDataExcel(
    "Data1.xlsx",
    chart1,
    "Kas"
);

ambilDataExcel(
    "Data2.xlsx",
    chart,
    "Kas (Kekurangan)"
);

function out1() {
    window.location.href = "../../index.html";
}