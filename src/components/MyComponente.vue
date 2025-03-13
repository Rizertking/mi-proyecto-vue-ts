<template>
  <div class="container mx-auto mt-5 grid grid-rows-1 bg-black-grey text-gray-300">
    <div class="h-full">
      <h1 class="text-4xl font-bold text-center mb-4 pt-5">Stocks List</h1>
      <stock-recommendation :stocks="stocks" class="py-5"></stock-recommendation>
      <table class="table-auto w-full rounded-lg">
        <thead>
          <tr class="bg-black text-gray-300">
            
            <th class="px-4 py-2">Ticker</th>
            <th class="px-4 py-2">Company</th>
            <th class="px-4 py-2">Brokerage</th>
            <th class="px-4 py-2">Action</th>
            <th class="px-4 py-2">Rating From</th>
            <th class="px-4 py-2">Rating To</th>
            <th class="px-4 py-2">Target From</th>
            <th class="px-4 py-2">Target To</th>
            <th class="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock.ticker" class="bg-white text-gray-800">
            <td class="border px-4 py-2">{{ stock.ticker }}</td>
            <td class="border px-4 py-2">{{ stock.company }}</td>
            <td class="border px-4 py-2">{{ stock.brokerage }}</td>
            <td class="border px-4 py-2">{{ stock.action }}</td>
            <td class="border px-4 py-2">{{ stock.rating_from }}</td>
            <td class="border px-4 py-2">{{ stock.rating_to }}</td>
            <td class="border px-4 py-2">{{ stock.target_from }}</td>
            <td class="border px-4 py-2">{{ stock.target_to }}</td>
            <td class="border px-4 py-2">{{ stock.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="h-20 bg-black-grey text-gray-300 flex justify-center items-center">
      <button @click="loadNextPage" :disabled="!nextPage" class="mt-4 bg-black hover:bg-gray-100 hover:text-black text-white font-bold py-2 px-4 rounded">Siguiente</button>
    </div>
      
  </div>
</template>
  
<script>
import axios from 'axios';
import StockRecommendation from './StockRecommendation.vue';

export default {
  components: {
    StockRecommendation
  },
  data() {
    return {
      stocks: [],
      nextPage: null  // Almacena aquí la clave de la próxima página
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(nextPageKey = '') {
      axios.get(`http://localhost:8081/stocks?next_page=${nextPageKey}`)
        .then(response => {
          this.stocks = response.data.items;
          this.nextPage = response.data.next_page;  // Actualiza la clave de la próxima página
        })
        .catch(error => {
          console.error('Error fetching stocks:', error);
        });
    },
    loadNextPage() {
      if (this.nextPage) {
        this.fetchData(this.nextPage);
      }
    }
  }
}
</script>
  