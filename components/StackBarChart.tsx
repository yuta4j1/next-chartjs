import React, { useRef } from "react"
import { Bar } from "react-chartjs-2"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
`

type Props = {}

const StackBarChart: React.FC<Props> = (props) => {
  const chartEl = useRef(null)
  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(100, 34, 100, 0)
    return {
      backgroundColor: gradient,
      labels: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      datasets: [
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#ff6384",
          data: [2, 5, 1, 3],
          label: "モビコプレミアム",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#36a2eb",
          data: [3, 2, 2, 4],
          label: "モビコライト",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#cc65fe",
          data: [1, 2, 5, 3],
          label: "モビコ",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#ffce56",
          data: [2, 2, 1, 3],
          label: "試乗車",
        },
      ],
    }
  }
  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  }
  return (
    <Wrapper>
      <p>{"件数を表示"}</p>
      <Bar ref={chartEl} data={data} height={80} options={options} />
    </Wrapper>
  )
}

export default StackBarChart
