import { options } from "./chart";
import ApexCharts from "apexcharts";
import { setupCurrencyDropdown } from "./converter";

const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()

document.addEventListener("DOMContentLoaded", function() {
    setupCurrencyDropdown();
});

console.log('Conectado!')