<template>
  <div class="dashboard-page">
    <h1 class="page-title">Dashboard</h1>
    <b-row>
      <b-col md="6" xl="6" sm="8" xs="12">
        <Widget
          title="<h5><span class='fw-semi-bold'>Tổng đơn hàng</span> trên loại dịch vụ</h5>"
          customHeader
        >
          <iframe
            width="550"
            height="380"
            src="https://datastudio.google.com/embed/reporting/37de2494-d1f6-40c2-83ed-d658074ce584/page/GI17B"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </Widget>
      </b-col>
      <b-col md="6" xl="6" sm="8" xs="12">
        <Widget
          title="<h5><span class='fw-semi-bold'>Doanh số</span> trên loại dịch vụ</h5>"
          customHeader
        >
          <iframe
            width="550"
            height="380"
            src="https://datastudio.google.com/embed/reporting/b4a10ea2-9e69-4878-b146-3b6b39a92662/page/GI17B"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </Widget>
      </b-col>
      <!-- <b-col md="6" xl="6" sm="8" xs="12">
        <Widget
          title="<h5><span class='fw-semi-bold'>Thợ làm đẹp</span> đạt doanh thu cao nhất</h5>"
          customHeader
        >
          <iframe
            class="mt-2"
            width="550"
            height="380"
            src="https://datastudio.google.com/embed/reporting/2fed45e4-2d6d-407a-bfb1-ec80c11ee649/page/GI17B"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </Widget>
      </b-col> -->
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import BigStat from "./components/BigStat/BigStat";
import mock from "./mock";

import { Chart } from "highcharts-vue";

export default {
  name: "Dashboard",
  components: {
    Widget,
    BigStat,
    highcharts: Chart,
  },
  data() {
    return {
      mock,
    };
  },
  methods: {
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
    getRevenueData() {
      const data = [];
      const seriesCount = 3;
      const accessories = ["SMX", "Direct", "Networks"];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
  },
  computed: {
    donut() {
      let revenueData = this.getRevenueData();
      let { danger, info, primary } = this.appConfig.colors;
      let series = [
        {
          name: "Revenue",
          data: revenueData.map((s) => {
            return {
              name: s.label,
              y: s.data,
            };
          }),
        },
      ];
      return {
        chart: {
          type: "pie",
          height: 120,
        },
        credits: {
          enabled: false,
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1,
                },
              },
            },
          },
        },
        colors: [danger, info, primary],
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          itemStyle: {
            color: "#495057",
            fontWeight: 100,
            fontFamily: "Montserrat",
          },
          itemMarginBottom: 5,
          symbolRadius: 0,
        },
        exporting: {
          enabled: false,
        },
        series,
      };
    },
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
