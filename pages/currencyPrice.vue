<template>
  <div class="crypto-scroll">
    <div class="crypto-scroll__header">
      <h1>{{ activeCurrency?.name }} Price</h1>
    </div>
    <div class="crypto-scroll__bar">
      <ul class="crypto-scroll__list">
        <li
          class="crypto-scroll__item"
          v-for="currency in cryptocurrencies"
          :key="currency.symbol"
          :class="{ active: currency.symbol === activeCurrency?.symbol }"
          @click="setActiveCurrency(currency)"
        >
          <img class="crypto-scroll__img" :src="getCurrencyImage(currency.symbol)" alt="">
          <div class="crypto-scroll__text">
            {{ currency.symbol }}
          </div>
        </li>
      </ul>
    </div>
    <div v-if="activeCurrency" class="crypto-description">
      <div class="crypto-description__name">{{ activeCurrency.name }} Price</div>
      <div class="crypto-description__price"><span class="crypto-description__price--bucks">$</span>{{ activeCurrency.price }}</div>
      <div class="crypto-description__body">
        <div class="crypto-description__wallet">
          Your {{ activeCurrency.symbol }} Wallet
        </div>
        <div class="crypto-description__priceCurr">
          5.139799 {{ activeCurrency.symbol }}
        </div>
        <div class="crypto-description__priceUsd">
          =32.423.46 USD
        </div>
      </div>
    </div>
  </div>
  <div>
    <img class="crypto-nav__img" :src="chart" alt="">
    <div class="crypto-nav">
      <MainBtn @click="onclickBuy" class="crypto-nav__buy">Buy</MainBtn>
      <button @click="onclickSell" class="crypto-nav__sell">Sell</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cryptocurrencies } from '@/mocksData/cryptocurrencies'
import chart from "@/public/currencyPrice/chart.svg"

const router = useRouter()
const route = useRoute()

const activeCurrency = ref(null)

const getCurrencyImage = (symbol) => {
  const currencyData = cryptocurrencies.find(crypto => crypto.symbol === symbol)
  return currencyData ? currencyData.icon : ''
}

const setActiveCurrency = (symbol) => {
  activeCurrency.value = symbol
}

const onclickBuy = () => {
  router.push({ 
    name: 'page-buy-sell', 
    query: { action: 'Buy', symbol: activeCurrency.value?.symbol } // Передаем символ активной валюты
  })
}

const onclickSell = () => {
  router.push({ 
    name: 'page-buy-sell', 
    query: { action: 'Sell', symbol: activeCurrency.value?.symbol } // Передаем символ активной валюты
  })
}

onMounted(() => {
  const symbol = route.query.symbol
  if (!symbol) return
  const curr = cryptocurrencies.find((currency) => currency.symbol === symbol) ?? null
  if (curr) {
    setActiveCurrency(curr)
  }
})
</script>

<style lang="scss" scoped>
.crypto-scroll {
  background: #F5F7F6;
  padding: 49px 0 23px 0;

  &__header {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 17px;
    color: #4A4A4A;
  }

  &__bar {
    max-height: 200px;
    overflow-y: auto;
    border-radius: 8px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__list {
    display: flex;
    list-style-type: none;
    padding: 20px;
    margin: 0;
    gap: 20px;

    overflow-x: hidden;
    white-space: nowrap;
    width: calc(100% + 234px);
  }

  &__item {
    width: 137px;
    height: 64px;
    padding: 11px 25px 16px 27px;
    border-radius: 6px;
    background: #fbfbfb;
    transition: background 0.3s;
    color: #4A4A4A;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      border: solid 3px #FFD200;
      color: #FFD200;
      transition: border 0.3s;
    }
  }

  &__text {
    margin: 0 0 10px 9px;
    font-size: 22px;
  }
}
.crypto-description {
  margin: 0 10px;
  color: #4A4A4A;
  background: #F5F7F6;

  &__name {
    margin-bottom: 14px;
    font-size: 15px;
  }
  &__price {
    margin-bottom: 6px;
    font-size: 44px;
    letter-spacing: 1px;

    &--bucks {
      font-size: 30px;
      margin-right: 10px;
    }
  }

  &__body {
    margin-left: 248px;
  }
  &__wallet {
    margin-left: 46px;
    font-size: 12px;
  }
  &__priceCurr {
    font-size: 22px;
  }
  &__priceUsd {
    font-size: 10px;
    margin-left: 63px;
    color: #9A9C9A;
  }
}
.crypto-nav {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  &__img {
    margin: 14px 0 28px 0;
  }

  &__buy {
    flex: 1;
  }
  
  &__sell {
    width: 100%;
    flex: 1;
    padding: 12px;
    margin-left: 10px;
    border-radius: 10px;
    border: solid 1px #fff;
    border-radius: 8px;
  }
}
</style>

