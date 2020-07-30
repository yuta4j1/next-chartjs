import Chart, { ChartDataSets } from "chart.js"

const chartjsPluginTotalLabels = {
  calcSums: function (datasets: ChartDataSets[]) {
    let sums = []
    datasets.forEach(function (dataset) {
      // 非表示の項目は処理しない
      if (dataset.hidden) return
      dataset.data.forEach(function (value, i) {
        if (typeof sums[i] === "undefined") {
          sums[i] = 0
        }
        sums[i] += value
      })
    })

    return sums
  },

  getLastMeta: function (chart: Chart) {
    let i = chart.data.datasets.length - 1
    let meta = null
    do {
      meta = chart.getDatasetMeta(i)
      i--
    } while (meta.hidden && i >= 0)

    return meta
  },

  makeLabels: function (
    meta,
    sums: number[]
  ): { value: string; x: number; y: number }[] {
    let labels = []
    console.log("sums", sums)
    for (const i in sums) {
      const lastModel = meta.data[i]._model
      labels.push({
        value: sums[i].toString(),
        x: lastModel.x + 5,
        y: lastModel.y,
      })
    }

    return labels
  },

  afterDatasetsDraw: function (chart: Chart) {
    const ctx = chart.ctx
    const meta = this.getLastMeta(chart)
    console.log("text", meta)
    const sums = this.calcSums(chart.data.datasets)
    const labels = this.makeLabels(meta, sums)
    labels.forEach(function (label) {
      ctx.fillText(label.value, label.x, label.y)
    })
  },
}

Chart.plugins.register(chartjsPluginTotalLabels)
