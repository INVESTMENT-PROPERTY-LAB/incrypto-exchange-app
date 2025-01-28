<template>
  <div class="wrapper">
    <div>
      <div class="block">
        <MainLogo />
        <p class="block-welcome__subtitle textSubtitle">
          <img src="../public/Сгруппировать 3.svg" alt="Success">
        </p>
        <p v-if="accountCreatedInfo" class="block-or textTitle">
          Account created
        </p>
      </div>
      {{ accountCreatedInfo }}
      <div>
        <MainMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const accountCreatedInfo = ref<boolean>(true)
</script>

<style lang="scss" scoped>

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
</style>