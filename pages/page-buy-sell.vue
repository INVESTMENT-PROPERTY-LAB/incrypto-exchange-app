<template>
  <div class="crypto-scroll">
    <div class="crypto-scroll__header">
      <h1>{{ route.query.action }} {{ activeCurrency?.name }}</h1>
    </div>
    <div class="crypto-scroll__bar" :class="{ 'crypto-scroll__bar--reverse': changeBuySell}">
      <div>
        <h3 class="crypto-scroll__desc">Crypto Currency Amount</h3>
        <div class="crypto-scroll__input">
          <input placeholder="1.5459" class="crypto-scroll__input--number" v-model="inputNumberCurr" type="number">
        </div>
        <div class="crypto-scroll__bar-curr">
          <ul class="crypto-scroll__list">
            <li
              class="crypto-scroll__item"
              v-for="currency in cryptocurrencies"
              :key="currency.symbol"
              :class="{ active: currency.symbol === activeCurrency?.symbol }"
              @click="setActiveCurrency(currency)"
            >
              <img class="crypto-scroll__img" :src="currency.icon" alt="">
              <div class="crypto-scroll__text">
                {{ currency.symbol }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="crypto-scroll__desc">Currency Amount</h3>
        <div class="crypto-scroll__input">
          <input placeholder="8,989.79" class="crypto-scroll__input--number" v-model="inputNumberCurr" type="number">
        </div>
        <div class="crypto-scroll__bar-lang">
          <ul class="crypto-scroll__list">
            <li
              class="crypto-scroll__item"
              v-for="currency in buySell"
              :key="currency.symbol"
              :class="{ active: currency.symbol === CurrActiveAmount?.symbol }"
              @click="setActiveCurrencyAmount(currency)"
            >
              <img class="crypto-scroll__img" :src="currency.icon" alt="">
              <div class="crypto-scroll__text">
                {{ currency.symbol }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h3 style=" font-size: 17px ;padding-left: 20px; padding-top: 15px; letter-spacing: 1.5px;">Payment</h3>
    <div class="crypto-body">
      <div class="crypto-body__cardLeft crypto-body__cardLittle" style=""></div>
      <div class="crypto-body__card">
        <div class="card-block">
          <img class="card-block__img" src="@/public/pageBuySell/iconVisa.svg" alt="Visa">
          <div>
            <h3 class="card-block__text">Valid thru</h3>
            <p class="card-block__date">08/2022</p>
          </div>
        </div>
        <p style="letter-spacing: 3px; font-size: 14px;">3979 **** **** **** 1618</p>
      </div>
      <div class="crypto-body__cardRight crypto-body__cardLittle"></div>
    </div>
    <div class="totalAmount-block">
      <p class="totalAmount-block__pay">Total Amount to Pay:</p>
      <p class="totalAmount-block__">8,989.79 {{ CurrActiveAmount?.symbol }}</p>
    </div>
    <div class="totalAmount-block totalAmount-block--right">
      <p class="totalAmount-block__pay">Your Balance After:</p>
      <p>{{ activeCurrency?.price }} {{ activeCurrency?.symbol }}</p>
    </div>
    <div class="crypto-nav">
      <NuxtLink style="width: 100%;" to="/mainDashboard">
        <MainBtn @click="onclickBuy" class="crypto-nav__buy">{{ route.query.action }}</MainBtn>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { cryptocurrencies } from '@/mocksData/cryptocurrencies'
import { buySell } from '@/mocksData/buySell'

const route = useRoute()

const activeCurrency = ref(null)
const changeBuySell = ref(route.query.action === 'Sell')

const CurrActiveAmount = ref(buySell.find(currency => currency.symbol === 'USD') || null)
const inputNumberCurr = ref('')

const setActiveCurrency = (symbol) => {
  activeCurrency.value = symbol
}

const setActiveCurrencyAmount = (symbol) => {
  CurrActiveAmount.value = symbol
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
  padding: 49px 0 55px 0;
  margin-bottom: 100px;

  &__header {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 17px;
    color: #4A4A4A;
    letter-spacing: 3px;
  }

  &__bar {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    padding: 0 20px;
    border-radius: 8px;
    color: #4A4A4A;

    &--reverse {
      flex-direction: column-reverse;
    }
  }

  &__desc {
    font-size: 12px;
    letter-spacing: 2px;
  }
  &__input {
    background-color: #FFFFFF;
    border-radius: 6px;
    margin: 17px 0 0 0 ;
    padding: 10px 204px 22px 20px;
    font-size: 20px;

    &--number::placeholder {
      letter-spacing: 3px;
      color: #1D2A45;
    }
  }

  &__bar-curr,
  &__bar-lang {
    flex: 1;
    overflow-y: auto;
    max-height: 200px;
    margin-right: 10px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__list {
    display: flex;
    list-style-type: none;
    padding: 20px 0 20px 0;
    margin: 0;
    gap: 20px;

    overflow-x: hidden;
    white-space: nowrap;
    width: calc(100% + 234px);
  }

  &__item {
    width: 87px;
    height: 50px;
    border-radius: 6px;
    background: #fbfbfb;
    transition: background 0.3s;
    color: #4A4A4A;
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
    font-size: 14px;
  }

  &__img {
    width: 30px;
    height: auto;
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

.crypto-body {
  display: flex;

  &__cardLittle {
    margin-top: 48px;
    height: 70px;
    width: 51px;
    background-color: rgba(74, 74, 74, 0.4);
  }
  
  &__cardLeft {
    border-radius: 0 6px 6px 0;
  }
  &__card {
    padding: 7px 19px 22px 19.5px;
    margin: 25px 20px 16px 20px;
    background-color: #475958;
    border-radius: 6px;
  }
  &__cardRight {
    border-radius: 6px 0 0 6px;
  }
}

.card-block {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 11px 0 24px 0;
  max-width: 261px;

  &__text {
    letter-spacing: 3px;
    font-size: 10px;
    padding-left: 93px;
  }
  &__date {
    margin-left: 118px;
    letter-spacing: 1.5px;
    font-size: 10px;
  }
}

.totalAmount-block {
  padding-left: 18px;

  &--right {
    margin: 11px 0 28px 263px;
  }
  
  &__pay {
    font-size: 12px;
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
}
</style>

