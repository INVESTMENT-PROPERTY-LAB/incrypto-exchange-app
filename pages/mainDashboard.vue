<template>
  <div class="wrapper">
    <div class="container-wrapper">
      <div class="block" v-if="accountCreatedInfo === false && createdExchengeLoader === false && createdExchengeSuccessful === false">
        <div class="block-header">
          <img src="@/public/dashboard/burger.svg" alt="Burger">
          <img src="@/public/logo.svg" alt="Logo">
        </div>
        <div class="block-body">
          <h3 class="block-body__title">{{ route.query.firstName }} {{  route.query.lastName  }}</h3>
          <img src="@/public/dashboard/iconProfile.svg" alt="Profile">
          <p class="block-body__text">Your Account Balance</p>
          <span class="block-body__number--dollar">$</span><span class="block-body__number">39,798.29</span>
        </div>
        <NuxtLink to="/signUpFirst">
          <button class="block-btn">Log out</button>
        </NuxtLink>
      </div>
      <div class="block" v-if="accountCreatedInfo">
        <MainLogo />
        <p class="block-welcome__subtitle textSubtitle">
          <img src="../public/Сгруппировать 3.svg" alt="Success">
        </p>
        <p class="block-or textTitle">
          Account created
        </p>
      </div>
      <div class="block" v-if="createdExchengeLoader">
        <p class="block-welcome__subtitle textSubtitle block-welcome__subtitle--fix">
          <img src="@/public/bitcoin-exchange.svg" alt="Success">
        </p>
        <p class="block-or textTitle">
          Exchange in process ID EX-000000
        </p>
      </div>
      <div class="block" v-if="createdExchengeSuccessful">
        <p class="block-welcome__subtitle textSubtitle">
          <img src="../public/Сгруппировать 3.svg" alt="Success">
        </p>
        <p class="block-or textTitle">
          Successful exchange ID EX-000000
        </p>
      </div>
      <div class="block-menu">
        <MainMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const accountCreatedInfo = ref<boolean>(false);
const createdExchengeLoader = ref<boolean>(false);
const createdExchengeSuccessful = ref<boolean>(false);

onMounted(() => {
  if (route.query.from === '/signUpFirst') {
    accountCreatedInfo.value = true
    setTimeout(() => {
      accountCreatedInfo.value = false
    }, 2000)
  }
  if (route.query.from === '/exchange-created') {
    createdExchengeLoader.value = true
    setTimeout(() => {
      createdExchengeLoader.value = false
      createdExchengeSuccessful.value = true

      setTimeout(() => {
        createdExchengeSuccessful.value = false
      }, 2000)
    }, 2000)
  }
})
</script>

<style lang="scss" scoped>
.container-wrapper {
  position: relative;
  margin-top: 74px;
}
.block {
  text-align: center;
  color: #fff;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  &-body {
    margin-bottom: 15px;

    &__title {
      margin-bottom: 30px;
      letter-spacing: 3px;
    }
    &__text {
      margin-top: 28px;
    }
    &__number {
      font-size: 48px;

      &--dollar {
        font-size: 36px;
      }
    }
  }

  &-btn {
    padding: 2px 37px 10px 37px;
    border: solid 1px #fff;
    border-radius: 50px;
    font-size: 12px;
  }
  
  &-welcome__title {
    margin: 150px 0 16px 0;
  }

  &-welcome__subtitle {
    margin: 92px 0 16px 0;

    &--fix {
      margin: 35px 0 16px 0;
    }
  }

  &-messengers {
    display: flex;
    justify-content: center;
    gap: 20px; color: #fff;
    margin-bottom: 50px;
  }

  &-or {
    margin-bottom: 60px;
  }
}
.block-menu {
  position: absolute;
  top: 437px;
  width: 100%;
}
</style>