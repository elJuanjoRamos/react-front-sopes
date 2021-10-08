import React from 'react'
import { Bar } from 'react-chartjs-2';

const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
    },
};

const BarChart = ({dates, labelUp, labelDown }) => {
    let lb = []
    let up = []
    let down = []

    dates.forEach(element => {
        let fecha = element.fecha.split('T')
        lb.push(fecha[0])
        up.push(element.upvotes)
        down.push(element.downvotes)
    }); 


    const data = {
        labels: lb,
        datasets: [
            {
                label: labelUp,
                data: up,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: labelDown,
                data: down,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };


    return(<Bar data={data} options={options} />)
}

export default BarChart
