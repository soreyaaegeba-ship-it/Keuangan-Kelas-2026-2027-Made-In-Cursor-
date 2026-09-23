const ctx = document.getElementById("grafikKeuangan");

if (ctx) {
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["M6", "M7", "M8", "M9", "M10"],
            datasets: [{
                label: "Pemasukan",
                data: [64000, 83000, 168000, 42000, 0]
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    onClick: function () {
                        if (chart.data.datasets[0].label === "Pemasukan") {
                            chart.data.datasets[0].label = "Pengeluaran";
                            chart.data.datasets[0].data = [92500, 37000, 235000, 7, 5];
                        } else {
                            chart.data.datasets[0].label = "Pemasukan";
                            chart.data.datasets[0].data = [64000, 83000, 168000, 42000, 9];
                        }
                        chart.update();
                    }
                }
            }
        }
    });
}

const ctx1 = document.getElementById("grafikKeuangan1");

if (ctx1) {
    const chart1 = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["M6", "M7", "M8", "M9", "M10"],
            datasets: [{
                label: "Kas",
                data: [353500, 399500, 332500, 342500, 342500]
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    onClick: function () {
                        if (chart1.data.datasets[0].label === "Kas") {
                            chart1.data.datasets[0].label = "Kas Pramuka";
                            chart1.data.datasets[0].data = [160000, 160000, 160000, 160000, 160000];
                        } else {
                            chart1.data.datasets[0].label = "Kas";
                            chart1.data.datasets[0].data = [353500, 399500, 332500, 342500, 342500];
                        }
                        chart1.update();
                    }
                }
            }
        }
    });
}

const cariSiswa = document.getElementById("cariSiswa");
const siswaGrid = document.getElementById("siswaGrid");
const emptySearch = document.getElementById("emptySearch");

if (cariSiswa && siswaGrid) {
    cariSiswa.addEventListener("input", function () {
        const q = cariSiswa.value.trim().toLowerCase();
        const chips = siswaGrid.querySelectorAll(".siswa-chip");
        let visible = 0;

        chips.forEach(function (chip) {
            const match = chip.textContent.toLowerCase().includes(q);
            chip.classList.toggle("is-hidden", !match);
            if (match) visible += 1;
        });

        if (emptySearch) {
            emptySearch.hidden = visible !== 0;
        }
    });
}

function analytics() {
    window.location.href = "logo1/analytics/analytics.html";
}

function database() {
    window.location.href = "logo1/database/database.html";
}

function assignment() {
    window.location.href = "logo1/assignment/assignment.html";
}

function rule1() {
    window.location.href = "logo1/rule1/rule1.html";
}

function time() {
    window.location.href = "logo1/time/time.html";
}

function activity() {
    window.location.href = "logo1/activity/activity.html";
}

function account() {
    window.location.href = "logo1/account/account.html";
}
