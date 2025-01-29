<template>
  <div class="coin-inner">
    <div class="coin-label">{{ 1 }}</div>
    <div class="coin-value">${{ 2 }}</div>
    <div class="coin-graph">{{ 3 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const coinsList = ref([
  { id: 1, name: 'BTC', value: '$6,239', graph: '', iconClass: 'btc' },
  { id: 2, name: 'ETH', value: '$334', graph: '', iconClass: 'eth' },
  { id: 3, name: 'LTC', value: '$194', graph: '', iconClass: 'ltc' },
  { id: 4, name: 'BCH', value: '$1,239', graph: '', iconClass: 'bch' }
])

const isDarkMode = ref(false)

</script>