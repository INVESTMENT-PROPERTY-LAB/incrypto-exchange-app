<template>
  <div class="exchange-container">
    <div class="exchange-block-nav">
      <img src="@/public/back-arrow.svg" alt="Back Arrow">
      <h1 class="exchange-block-nav__text">Exchange</h1>
      <img src="@/public/logo.svg" alt="Logo" />
    </div>
    <div class="exchange-block-title">
      <h2>Exchange</h2>
      <p>USDT <span class="exchange-block-title__desc">TRC20</span> - THB <span class="exchange-block-title__desc">Bank transfer</span></p>
    </div>
    
    <div class="exchange-details">
      <div class="exchange-details__item">
        <div class="currency-header">
          <h2 class="currency-header__text">I want to sell</h2>
          <span class="currency-header__number">0.753538228 BTC</span>
        </div>
        <div class="currency-body">
          <div style="display: flex;">
            <img src="@/public/exchange/iconCurrency/Bitcoin.svg" alt="USDT" class="currency-body__icon" />
            <div>
              <h3 class="currency-body__text">USDT</h3>
              <p class="currency-body__desc">TRC20 (Tron)</p>
              <img class="currency-body__arrow" src="@/public/exchange/arrow.svg" alt="arrow">
            </div>
          </div>
          <p class="currency-body__amount">100.00</p>
        </div>
      </div>
      
      <img class="exchange-details__img" src="@/public/exchange/Icon.png" alt="Arrow">

      <div class="exchange-details__item">
        <div class="currency-header">
          <h2 class="currency-header__text">I will get</h2>
          <span class="currency-header__number">0.86363454 USDT</span>
        </div>
        <div class="currency-body">
          <div style="display: flex; gap: 10px;">
            <img src="@/public/exchange/iconFlag/Thailand-SVG.svg" alt="USDT" class="currency-body__icon" />
            <div>
              <h3 class="currency-body__text">THB</h3>
              <p class="currency-body__desc"> Bank transfer</p>
              <img class="currency-body__arrow" src="@/public/exchange/arrow.svg" alt="arrow">
            </div>
          </div>
          <p class="currency-body__amount currency-body__amount--green">$350.00</p>
        </div>
      </div>
    </div>

    <div class="transaction-details">
      <h2 class="transaction-details__title">Transaction details:</h2>
      <div class="transaction-details__item">
        <p>Exchange rate</p><p class="transaction-details__item--size">USDT / THB: 34.08</p>
      </div>
      <div class="transaction-details__item">
        <p>To sale</p><p class="transaction-details__item--size">100 USDT TRC20</p>
      </div>
      <div class="transaction-details__item">
        <p>To receive</p><p class="transaction-details__item--size">3 500 THB bank transfer</p>
      </div>
      <div class="transaction-details__item">
        <p>Account</p><p class="transaction-details__item--size">146-0-24245-1</p>
      </div>
      <div class="transaction-details__item">
        <p>Client</p><p class="transaction-details__item--size">Albert Green</p>
      </div>
    </div>
    <NuxtLink to="/">
      <MainBtn>Exchange</MainBtn>
    </NuxtLink>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.exchange-container {
  padding: 44px 9px 0 9px;
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
  margin-bottom: 34px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2.5px;
  text-align: center;

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
  margin-bottom: 20px;
  color: #222222;

  &__item {
    padding: 5px 10px 10px 10px;
    border-radius: 8px;
    background-color: #FFD83B;
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
  justify-content: space-between;
  padding-bottom: 6px;

  &__text {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: bold;
  }
  &__number {
    font-size: 12px;
  }
}

.currency-body {
  display: flex;
  justify-content: space-between;
  align-self: center;

  &__icon {
    width: 66,37;
    height: auto;
  }
  &__text {
    padding-top: 12px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 20px;
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
    font-size: 24px;
    font-weight: bold;

    &--green {
      color: #0FB50F;
    }
  }
}

.transaction-details {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;

  &__title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 4px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &__item {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    font-size: 12px;

    &--size {
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
