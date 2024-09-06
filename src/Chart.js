import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ data }) => {
  // Extrair categorias e pontos dos dados recebidos
  const seriesData = data.map(item => item.pontos);
  console.log('Series Data:', seriesData); // Verifique se os dados estão corretos
  const categories = data.map(item => item.nome);
  console.log('Categories:', categories); // Verifique se as categorias estão corretas

  // Definindo opções para o gráfico com os dados do MySQL
  const options = {
    chart: {
      type: 'bar',
      height: 580,
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    colors: ['#4C7EFF', '#FFC24C', '#A0C340', '#8A29E6', '#FF4C4D', '#FF4CA2'],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        fontFamily: 'Roboto, sans-serif',
        colors: ['#fff'],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ": " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: categories, // Usando os nomes do MySQL
    },
    yaxis: {
      labels: {
        show: false, // Exibe os rótulos do eixo Y
      },
      max: Math.max(...seriesData) + 100, // Ajusta o máximo do eixo Y para garantir que os valores mais altos sejam visíveis
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
  };

  // Configuração da série
  const series = [{
    name: 'Pontos',
    data: seriesData,
  }];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={380} />
    </div>
  );
};

export default Chart;
