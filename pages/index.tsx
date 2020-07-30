import React from "react"
import { NextPage } from "next"
import styled from "styled-components"
import BarChart from "../components/BarChart"
import StackBarChart from "../components/StackBarChart"
import HorizontalBarChart from "../components/HorizontalBarChart"

const GraphArea = styled.div`
  display: flex;
  justify-content: center;
`

const SideArea = styled.div`
  width: 20%;
`

const Graph = styled.div`
  min-width: 60%;
`

const IndexPage: NextPage<{}> = () => {
  return (
    <>
      <header>
        <h1>CharJS Sample</h1>
      </header>
      <body>
        <GraphArea>
          <SideArea />
          <Graph>
            <BarChart />
            <StackBarChart />
            <HorizontalBarChart />
          </Graph>
          <SideArea />
        </GraphArea>
        <section></section>
      </body>
    </>
  )
}

export default IndexPage
