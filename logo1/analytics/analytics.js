function out1() {
    window.location.href="../../index.html";
};

const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart.data.datasets[0].label = "Kas(Kekurangan)";
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
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart1.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart1.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart1.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart1.data.datasets[0].label = "Kas(Kekurangan)";
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
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackgroundColor: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart2.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart2.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart2.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart2.data.datasets[0].label = "Kas(Kekurangan)";
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
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart3.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart3.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart3.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart3.data.datasets[0].label = "Kas(Kekurangan)";
                        chart3.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
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
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart4.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart4.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart4.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart4.data.datasets[0].label = "Kas(Kekurangan)";
                        chart4.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
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
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart5.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart5.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart5.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart5.data.datasets[0].label = "Kas(Kekurangan)";
                        chart5.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    }

                    chart5.update();
                }
            }
        }
    }
});