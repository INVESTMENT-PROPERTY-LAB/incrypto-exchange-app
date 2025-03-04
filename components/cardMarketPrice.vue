<template>
  <router-link :to="{ path: '/currencyPrice', query: { symbol: crypto.symbol } }" class="crypto-item">
    <div class="crypto-item__symbol">
      <img class="crypto-item__img" :src="crypto.icon" :alt="crypto.symbol">
    </div>
    <div class="crypto-item__details">
      <div style="display: flex; flex-direction: column;">
        <p class="crypto-item__name">{{ crypto.symbol }}</p>
        <p class="crypto-item__desc">{{ crypto.name }}</p>
      </div>
      <img :src="crypto.chart" alt="Chart">
      <div style="display: flex; flex-direction: column;">
        <span class="crypto-item__change" :class="isTrendUp ? 'crypto-item__change--down' : 'crypto-item__change--up'">
          {{ crypto.change }}%
        </span>
        <span class="crypto-item__price">{{ crypto.price }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  crypto: {
    type: Object,
    required: true,
  },
});

const isTrendUp = props.crypto.trend ? '' : 'up';
</script>

<style scoped lang="scss">
.crypto-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  color: #666;

  -webkit-box-shadow: 0px 19px 46px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 19px 46px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 19px 46px 2px rgba(34, 60, 80, 0.2);

  &__symbol {
    width: 50px;
  }

  &__img {
    margin-right: 10px;
  }

  &__details {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }

  &__name {
    font-weight: bold;
    letter-spacing: 3px;
  }
  
  &__desc {
    font-weight: 400px;
    font-size: 12px;
  }

  &__price {
    color: #666;
    padding-left: 35px;
  }

  &__change {
    font-size: 12px;
    &--up {
      color: green;
      background-image: url('../public/marcketPriceCardIcon/Triangle.svg');
      background-size: 6px;
      background-repeat: no-repeat;
      background-position: center;
      padding-left: 50px;
    }
    
    &--down {
      color: red;
      background-image: url('../public/marcketPriceCardIcon/Triangle-1.svg');
      background-size: 6px;
      background-repeat: no-repeat;
      background-position: center;
      padding-left: 50px;
    }
  }
}
</style>
