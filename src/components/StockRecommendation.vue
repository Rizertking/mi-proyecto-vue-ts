<template>
    <div class="container mx-auto mt-5 text-yellow-500">
      <h1 class="text-2xl font-bold">Recommended Stock: {{ recommendedStock?.company || 'Calculating...' }}</h1>
      <div v-if="recommendedStock">
        <p><strong>Ticker:</strong> {{ recommendedStock.ticker }}</p>
        <p><strong>Brokerage:</strong> {{ recommendedStock.brokerage }}</p>
        <p><strong>Target Increase:</strong> {{ recommendedStock.targetIncrease }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stocks: Array
    },
    data() {
      return {
        recommendedStock: null
      }
    },
    watch: {
      stocks: {
        immediate: true,
        handler(newStocks) {
          this.evaluateStocks(newStocks);
        }
      }
    },
    methods: {
      evaluateStocks(stocks) {
        let maxIncrease = 0;
        stocks.forEach(stock => {
          let targetFrom = parseFloat(stock.target_from.replace('$', ''));
          let targetTo = parseFloat(stock.target_to.replace('$', ''));
          let increase = targetTo - targetFrom;
          if (increase > maxIncrease) {
            maxIncrease = increase;
            this.recommendedStock = { ...stock, targetIncrease: increase.toFixed(2) };
          }
        });
      }
    }
  }
  </script>
  