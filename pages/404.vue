<template>
  <div class="container">
    <div class="container-header">
      <h1 class="container-header__text">
        Oops! <br/>
        Page not found
      </h1>
      <img class="container-header__img" src="@/public/logo.svg" alt="">
    </div>
    <p class="container-text">
      The page you’re looking for 
      might be under construction
    </p>
    <div class="crypto-nav">
      <MainBtn @click="onclickBuy" class="crypto-nav__buy">Go back</MainBtn>
      <button @click="onclickSell" class="crypto-nav__sell">Return to Home</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onclickBuy = () => {
  router.go(-1)
}

const onclickSell = () => {
  router.push({ 
    name: 'mainDashboard', 
  })
}
</script>

<style scoped lang="scss">
@use '../styles/base/vars.scss' as *;

.container {
  text-align: center;
}

.container-header {
  margin-bottom: 175px;
  margin-top: 207px;

  &__text {
    margin-bottom: 47px;
    font-size: 25px;
    color: #4A4A4A;
    font-weight: bold;
    font-family: $font-logo;
  }
  &__img {
    width: 140px;
    height: auto;
  }
}

.container-text {
  margin-bottom: 25px;
  font-size: 20px;
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