import HomeCharts from '@/components/HomeEcharts'

const Home = () => {
  const chartOptions = {
    title: {
      text: 'home-charts标题'
    },
    xAxis: {
      data: ['vue', 'react', 'angular']
    },
    series: [
      {
        name: '用户',
        type: 'bar',
        data: [40, 50, 10]
      }
    ],
  }
  return (
    <div>
      <HomeCharts options={chartOptions} />
    </div>
  )
}

export default Home