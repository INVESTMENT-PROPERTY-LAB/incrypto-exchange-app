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
      
      <div class="block-menu">
        <MainMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const accountCreatedInfo = ref<boolean>(true)

setTimeout(() => accountCreatedInfo.value = false, 3000)
</script>

<style lang="scss" scoped>
.container-wrapper {
  position: relative;
}
.block {
  text-align: center;
  color: #fff;
  
  &-welcome__title {
    margin: 190px 0 16px 0;
  }

  &-welcome__subtitle {
    margin: 153px 0 16px 0;
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
  top: 495px;
  width: 100%;
}
</style>