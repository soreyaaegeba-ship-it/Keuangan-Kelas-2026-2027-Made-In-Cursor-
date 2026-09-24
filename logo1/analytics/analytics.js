function out1() {
    window.location.href="../../index.html";
};

const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Pramuka",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart.data.datasets[0].label === "Kas Pramuka") {
                        chart.data.datasets[0].label = "Kas Pramuka";
                        chart.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    } else {
                        chart.data.datasets[0].label = "Kas Pramuka";
                        chart.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
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
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Pramuka",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart1.data.datasets[0].label === "Kas Pramuka") {
                        chart1.data.datasets[0].label = "Kas Pramuka";
                        chart1.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    } else {
                        chart1.data.datasets[0].label = "Kas Pramuka";
                        chart1.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    }

                    chart1.update();
                }
            }
        }
    }
});

const ctx2 = document.getElementById("grafikKeuangan2");

const chart2 = new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Pramuka",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart2.data.datasets[0].label === "Kas Pramuka") {
                        chart2.data.datasets[0].label = "Kas Pramuka";
                        chart2.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    } else {
                        chart2.data.datasets[0].label = "Kas Pramuka";
                        chart2.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    }

                    chart2.update();
                }
            }
        }
    }
});

const ctx3 = document.getElementById("grafikKeuangan3");

const chart3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Kelas",
            data: [134000, 65000, 140000, 171000, 164000, 14000, 83000, 168000, 42000, 0],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart3.data.datasets[0].label === "Kas Kelas") {
                        chart3.data.datasets[0].label = "Kas Kelas";
                        chart3.data.datasets[0].data = [134000, 65000, 140000, 171000, 164000, 14000, 83000, 168000, 42000, 0];
                    } else {
                        chart3.data.datasets[0].label = "Kas Kelas";
                        chart3.data.datasets[0].data = [134000, 65000, 140000, 171000, 164000, 14000, 83000, 168000, 42000, 0];
                    }

                    chart3.update();
                }
            }
        }
    }
});

const ctx4 = document.getElementById("grafikKeuangan4");

const chart4 = new Chart(ctx4, {
    type: "bar",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Kelas",
            data: [38000, 103000, 65000, 47000, 48000, 92500, 37000, 235000, 0, 32000],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart4.data.datasets[0].label === "Kas Kelas)") {
                        chart4.data.datasets[0].label = "Kas Kelas";
                        chart4.data.datasets[0].data = [38000, 103000, 65000, 47000, 48000, 92500, 37000, 235000, 0, 32000];
                    } else {
                        chart4.data.datasets[0].label = "Kas Kelas";
                        chart4.data.datasets[0].data = [38000, 103000, 65000, 47000, 48000, 92500, 37000, 235000, 0, 32000];
                    }

                    chart4.update();
                }
            }
        }
    }
});

const ctx5 = document.getElementById("grafikKeuangan5");

const chart5 = new Chart(ctx5, {
    type: "bar",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas Kelas",
            data: [70000, 191000, 257000, 266000, 311000, 487000, 585000, 606000, 569000, 569000],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart5.data.datasets[0].label === "Kas Kelas") {
                        chart5.data.datasets[0].label = "Kas Kelas";
                        chart5.data.datasets[0].data = [70000, 191000, 257000, 266000, 311000, 487000, 585000, 606000, 569000, 569000]; 
                    } else {
                        chart5.data.datasets[0].label = "Kas Kelas";
                        chart5.data.datasets[0].data = [70000, 191000, 257000, 266000, 311000, 487000, 585000, 606000, 569000, 569000];
                    }

                    chart5.update();
                }
            }
        }
    }
});