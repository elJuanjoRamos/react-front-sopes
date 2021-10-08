import React from 'react'
import { PolarArea } from 'react-chartjs-2';


const PolarChart = ({top}) => {

    let lb = []
    let dt = []

    top.forEach(element => {
       lb.push(element.hashtag)
       dt.push(element.total_upvotes) 
    });    
    const data = {
        labels: lb,
        datasets: [
            {
                label: '# of Votes',
                data: dt,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (<PolarArea data={data} />)

}

export default PolarChart
