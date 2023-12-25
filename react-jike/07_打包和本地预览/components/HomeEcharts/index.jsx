import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import './index.scss'

const HomeEcharts = ({ options }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'title',
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ],
      ...options
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [options])
  return (
    <div>
      <div ref={chartRef} className="home-echarts"></div>
    </div>
  )
}

export default HomeEcharts