<template>
  <div class="exchange-container">
    <div class="exchange-block-nav">
      
      <img src="@/public/back-arrow.svg" alt="Back Arrow">
      <h1 class="exchange-block-nav__text">EX-000000</h1>
      <img src="@/public/logo.svg" alt="Logo" />
    </div>
    <div class="exchange-block-title">
      <h2>Exchange is created!</h2>
      <p class="exchange-block-title__desc">EX-000000</p>
    </div>
    
    <div class="exchange-details">
      <div class="exchange-details__item">
        <div class="currency-body">
          <div style="display: flex;">
            <img src="@/public/exchange/create/qr.svg" alt="USDT" class="currency-body__icon" />
          </div>
          <div>
            <p class="currency-body__text">Please send</p>
            <p class="currency-body__amount">100.00 USDT</p>
          </div>
        </div>
        <div class="currency-header">
          <h2 class="currency-header__text">ARNJdKeu6LdSqqCFoy4WGXrhrvvEgfWLfV</h2>
          <img class="currency-header__icon" src="@/public/exchange/create/copy.svg" alt="Copy" >
        </div>
      </div>      
    </div>

    <div class="transaction-details">
      <h2 class="transaction-details__title">Attention!</h2>
      <div class="transaction-details__item">
        <p>Send only <span class="transaction-details__item--size">USDT TRC20</span> to this address. In case of sending another token, it will be impossible to return the funds!</p>
      </div>
    </div>
    <div class="crypto-nav">
      <MainBtn @click="onclickPaid" class="crypto-nav__buy">I paid</MainBtn>
      <button @click="onclickCancel" class="crypto-nav__sell">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const onclickPaid = () => {
  router.push({ path: '/mainDashboard', query: { from: route.fullPath } })
}

const onclickCancel = () => {
  router.push({ 
    name: 'mainDashboard' 
  })
}
</script>

<style scoped lang="scss">
.exchange-container {
  padding: 44px 16px 0 16px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
}

.exchange-block-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 51px;
  letter-spacing: 2.5px;
  
  justify-content: space-between;
  &__text {
    font-size: 17px;
  }
}

.exchange-block-title { 
  margin-bottom: 51px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2.5px;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &__desc {
    font-size: 14px;
  }
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.exchange-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  color: #222222;
  
  &__item {
    padding: 10px 14px 14px 16px;
    border-radius: 8px;
    border: solid 1.5px #F8D74D ;
    background-color: rgba(56, 56, 56, 0.45);
  }
  &__img {
    width: 44px;
    height: auto;
    margin-left: auto;
    padding-top: 10px;
    transform-origin: center;
  }
}

.currency-header {
  display: flex;
  align-items: end;
  justify-content: space-between;

  &__text {
    font-size: 11px;
    letter-spacing: 1.5px;
    color: #F9D74C;
  }
  &__icon {
  }
}

.currency-body {
  display: flex;
  justify-content: space-between;

  &__icon {
    width: 140px;
    height: auto;
  }
  &__text {
    color: #fff;
    font-size: 12px;
    margin-left: 55px;
  }
  &__desc {
    padding-bottom: 8px;
    font-size: 12px;
    letter-spacing: 1.5px;
  }
  &__arrow {
    width: 25px;
    height: auto;
  }
  &__amount {
    padding-top: 20px;
    color: #fff;
    font-size: 17px;
    color: #21FF06;

    letter-spacing: 3px;
    &--green {
      color: #0FB50F;
    }
  }
}

.transaction-details {
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: left;

  &__title {
    margin-bottom: 25px;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    color: #CB0D0D;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 16px;

    &--size {
      font-weight: bold;
      color: #0DFF0D;
    }
  }
}

.crypto-nav {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #fff;

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
