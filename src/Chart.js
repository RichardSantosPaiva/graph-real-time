import ApexChart from 'react-apexcharts';

/** 
 * props:
 * - data
 * 
 */
export default function Chart(props) {
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // Handle click events
        }
      }
    },
    colors: ['#FF4560', '#008FFB', '#00E396', '#FEB019', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'], // Defina cores para cada coluna
    plotOptions: {
      bar: {
        columnWidth: '80%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: props.data.map(item => item.x),
      labels: {
        style: {
          colors: ['#FF4560', '#008FFB'], // Example colors
          fontSize: '12px'
        }
      }
    }
  };

  const series = [{
    data: props.data.map(item => item.y)
  }];

  return (
    <ApexChart
      options={options}
      series={series}
      type="bar"
      width={800}
      height={480}
    />
  );
}
