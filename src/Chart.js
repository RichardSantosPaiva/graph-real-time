import ApexChart from 'react-apexcharts';

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
    colors: ['#FF4560', '#008FFB'], // Example colors
    plotOptions: {
      bar: {
        columnWidth: '45%',
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
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'],
      ],
      labels: {
        style: {
          colors: ['#FF4560', '#008FFB'], // Example colors
          fontSize: '12px'
        }
      }
    }
  };

  const series = [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }];

  return (
    <ApexChart
      options={options}
      series={series}
      type="bar"
      width={640}
      height={480}
    />
  );
}