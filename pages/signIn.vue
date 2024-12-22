<template>
  <div class="wrapper">
    <div>
      <div class="block">
        <h2 class="block-welcome__title textTitle">Welcome back to</h2>
        <MainLogo />
        <p class="block-welcome__subtitle textSubtitle">
          Choose your method to sign in:
        </p>
        <div class="block-messengers">
          <img src="@/public/icons/messengers/instagram.svg" alt="instagram">
          <img src="@/public/icons/messengers/whatsapp.svg" alt="whatsapp">
          <img src="@/public/icons/messengers/telegram.svg" alt="telegram">
          <img src="@/public/icons/messengers/facebook.svg" alt="facebook">
        </div>
        <p class="block-or">
          Or
        </p>
      </div>
      <NuxtLink to="/signUpFirst">
        <MainBtn>Get started</MainBtn>
      </NuxtLink>
    </div>
  </div>
</template>

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