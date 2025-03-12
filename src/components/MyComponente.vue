<template>
    <div>
      <h1>Stocks List</h1>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Company</th>
            <th>Brokerage</th>
            <th>Action</th>
            <th>Rating From</th>
            <th>Rating To</th>
            <th>Target From</th>
            <th>Target To</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock.ticker">
            <td>{{ stock.ticker }}</td>
            <td>{{ stock.company }}</td>
            <td>{{ stock.brokerage }}</td>
            <td>{{ stock.action }}</td>
            <td>{{ stock.ratingFrom }}</td>
            <td>{{ stock.ratingTo }}</td>
            <td>{{ stock.targetFrom }}</td>
            <td>{{ stock.targetTo }}</td>
            <td>{{ stock.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'StocksTable',
    data() {
      return {
        stocks: []
      }
    },
    mounted() {
      axios.get('http://localhost:8081/stocks')
        .then(response => {
          this.stocks = response.data.items;
        })
        .catch(error => console.error('Error fetching stocks:', error));
    }
  }
  </script>
