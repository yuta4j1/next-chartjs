import React, { useRef } from "react"
import { Bar } from "react-chartjs-2"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

type Props = {}

const BarChart: React.FC<Props> = (props) => {
  const graphEl = useRef(null)
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
          data: [20, 52, 10, 100],
          label: "ユーザ数",
        },
      ],
    }
  }
  return (
    <Wrapper>
      <p>{"人数を表示"}</p>
      <Bar
        ref={graphEl}
        data={data}
        height={80}
        options={{
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                ticks: {
                  fontSize: 18,
                },
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </Wrapper>
  )
}

export default BarChart
