import React, { useRef } from "react"
import { HorizontalBar } from "react-chartjs-2"
import styled from "styled-components"
import "chart.js"
import "../plugins/charjsPluginTotalLabels"

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
`

type Props = {}

const HorizontalBarChart: React.FC<Props> = (props) => {
  const charEl = useRef(null)
  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(100, 34, 100, 0)
    return {
      backgroundColor: gradient,
      labels: ["プリウスA", "アクアB", "プリウスB", "アクアA", "アクアC"],
      datasets: [
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#ff6384",
          data: [2, 1, 5, 3, 4],
          label: "モビコプレミアム",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#36a2eb",
          data: [2, 1, 3, 4, 5],
          label: "モビコライト",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#cc65fe",
          data: [2, 1, 5, 2, 1],
          label: "モビコ",
        },
        {
          barPercentage: 0.5,
          minbarThickness: 20,
          maxBarThickness: 60,
          minBarLength: 0,
          backgroundColor: "#ffce56",
          data: [3, 2, 1, 1, 3],
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
      <HorizontalBar ref={charEl} data={data} options={options} />
    </Wrapper>
  )
}

export default HorizontalBarChart
