<template>
  <div class="container-market">
    <div class="container-market__header">
      <h1 class="container-market__title">Market Price</h1>
      <img class="container-market__img" src="@/public/icons/Stroke1.svg" alt="Profile">
      <div class="balance">Your Account Balance</div>
      <strong class="balance-amount">$39,798.29</strong>
      <div class="button-container">
        <button class="currency-button">USD</button>
      </div>
    </div>

    <div class="container-market__bg"></div>

    <div class="container-market__crypto-list">
      <CardMarketPrice
        v-for="(crypto, index) in cryptocurrencies"
        :key="index"
        :crypto="crypto"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import chart1 from '@/public/marcketPriceCardIcon/Path-1.svg'
import chart2 from '@/public/marcketPriceCardIcon/Path-2.svg'
import chart3 from '@/public/marcketPriceCardIcon/Path-3.svg'
import chart4 from '@/public/marcketPriceCardIcon/Path-4.svg'
import bitcoin from '@/public/marcketPriceCardIcon/Bitcoin.png'
import bitcoinCash from '@/public/marcketPriceCardIcon/BitcoinCash.png'
import etherium from '@/public/marcketPriceCardIcon/Etherium.png'
import litecoin from '@/public/marcketPriceCardIcon/Litecoin.png'

const cryptocurrencies = ref([
  { 
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$6,239',
    change: 2,
    trend: 'up',
    icon: bitcoin,
    chart: chart4
  },
  { 
    symbol: 'ETH',
    name: 'Ethereum',
    price: '$334',
    change: 2,
    trend: 'up',
    icon: etherium,
    chart: chart1 
  },
  { 
    symbol: 'LTC',
    name: 'Litecoin',
    price: '$194', 
    change: -3,
    trend: '',
    icon: litecoin,
    chart: chart2 
  },
  { 
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    price: '$1,239',
    change: 2,
    trend: 'up',
    icon: bitcoinCash,
    chart: chart3
  }
]);
</script>

<style lang="scss">
.container-market {
  position: relative;
  align-items: center;
  padding: 20px;
  height: 836px;

  &__header {
    text-align: center;
    display: flex; /* Используем flexbox */
    flex-direction: column; /* Вертикальное расположение элементов */
    align-items: center; /* Центрируем элементы по горизонтали */
  }

  &__img {
    margin-top: 20px;
    margin-bottom: 8px;
  }

  &__bg {
    position: absolute;
    background: #f5f7f6;
    width: 100%;
    height: 404px;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__crypto-list {
    width: 100%;
    margin-top: 20px;
  }
}

.balance {
  font-size: 17px;
}

.balance-amount {
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 41px;
}

.button-container {
  display: flex; /* Flexbox для центрирования кнопки */
  justify-content: center; /* Центрирование кнопки по горизонтали */
  width: 100%; /* Занимаем всю ширину родителя */
}

.currency-button {
  border: solid 1px;
  border-radius: 24px;
  padding: 10px 33px;
  cursor: pointer;
  margin-bottom: 30px;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
