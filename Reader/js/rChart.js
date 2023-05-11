const lineChartContex = document.getElementById('rLineChart').getContext('2d');
const lineChart = new Chart(lineChartContex, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Read Article',
                data: [4, 3, 5, 6],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                tension: 0.3,
                borderWidth: 2,
            },
            {
                label: 'Complete Mission',
                data: [3, 1, 2, 5],
                fill: false,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 1)',
                tension: 0.3,
                borderWidth: 2
            },
            {
                label: 'Quiz Answered',
                data: [2, 5, 4, 6],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                tension: 0.3,
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const donutChartContex = document.getElementById('rDonutChart').getContext('2d');
const donutChart = new Chart(donutChartContex, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'Phyton', 'Java'],
        datasets: [{
            data: [48, 52, 65],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'My Donut Chart'
        }
    }
});


