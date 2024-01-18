import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            color: '#ffffff', // Set bar color to white
            borderRadius: 4,
            dataLabels: {
              position: "center",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        yaxis: {
          show: true,
        },

        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 60, 35, 20, 80, 50, 80, 85, 80, 80, 65, 50],
          color: "#ffffff"
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="624"
              height="356"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
