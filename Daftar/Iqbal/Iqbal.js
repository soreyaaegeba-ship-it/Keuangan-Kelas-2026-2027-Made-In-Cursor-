const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5"],
        datasets: [{
            label: "Kas(Kekurangan)",
            data: [1000, 7000, 8000, 3000, 0],
            borderColor: "red",
            pointBackground: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart.data.datasets[0].data = [5000, 5000, 5000, 5000, 5000];
                    } else {
                        chart.data.datasets[0].label = "Kas(Kekurangan)";
                        chart.data.datasets[0].data = [1000, 7000, 8000, 3000, 0];
                    }

                    chart.update();
                }
            }
        }
    }
});

const ctx1 = document.getElementById("grafikKeuangan1");

const chart1 = new Chart(ctx1, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5"],
        datasets: [{
            label: "Kas",
            data: [5000, 0, 5000, 11000, 9000],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart1.data.datasets[0].label === "Kas") {
                        chart1.data.datasets[0].label = "Kas Pramuka";
                        chart1.data.datasets[0].data = [0, 0, 0, 0, 0];
                    } else {
                        chart1.data.datasets[0].label = "Kas";
                        chart1.data.datasets[0].data = [5000, 0, 5000, 11000, 9000];
                    }

                    chart1.update();
                }
            }
        }
    }
});

function out1() {
    window.location.href="../../index.html";
};