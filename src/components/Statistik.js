import { Doughnut } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

const Statistik = ({data, tahun}) => {
    return ( 
        <>
            <Doughnut
                data={{
                    labels: ['Tidak Kelebihan bobot / Obesitas (BMI<25 kg/m2)',
                    'Kelebihan bobot (BMI 25-27 kg/m2)',
                    'Obesitas (BMI>27 kg/m2)',],
                    datasets: [{
                        data,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 15
                    }],
                }}
                options={{
                    plugins: {
                        datalabels: {
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            }
                        },
                        title: {
                            display: true,
                            text: tahun,
                        }
                    }
                }}
            />
        </>
     );
}
 
export default Statistik;