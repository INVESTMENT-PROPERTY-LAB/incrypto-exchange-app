<template>
  <div class="wrapper">
    <div class="container-wrapper">
      <MainLogo />
      <div class="block" v-if="accountCreatedInfo">
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
  top: 380px;
  width: 100%;
}
</style>