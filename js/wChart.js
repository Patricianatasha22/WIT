const lineChartContex = document.getElementById('wLineChart').getContext('2d');
const lineChart = new Chart(lineChartContex, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Articles',
                data: [3, 2, 3, 2],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                tension: 0.3,
                borderWidth: 2,
            },
            {
                label: 'Likes',
                data: [5, 10, 30, 20],
                fill: false,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 1)',
                tension: 0.3,
                borderWidth: 2
            },
            {
                label: 'Reviews',
                data: [2, 3, 6, 4],
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                tension: 0.3,
                borderWidth: 2
            },
            {
                label: 'New Followers',
                data: [3, 8, 5, 2],
                fill: false,
                borderColor: 'rgba(66, 186, 150, 1)',
                backgroundColor: 'rgba(66, 186, 150, 1)',
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

const donutChartContex = document.getElementById('wDonutChart').getContext('2d');
const donutChart = new Chart(donutChartContex, {
    type: 'doughnut',
    data: {
        labels: ['Beginner', 'Intermediate', 'Advanced'],
        datasets: [{
            data: [50, 25, 37.5],
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


