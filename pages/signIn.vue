<template>
  <div class="wrapper">
    <div class="container">
      <div class="block-welcome">
        <h2 class="block-welcome__title">Welcome back to</h2>
        <MainLogo />
        <p class="block-welcome__subtitle">
          Choose your method to sign in:
        </p>
        <div style="display: flex;justify-content: center; gap: 20px; color: #fff; margin-bottom: 50px;">
          <img src="@/public/icons/messengers/instagram.svg" alt="instagram">
          <img src="@/public/icons/messengers/whatsapp.svg" alt="whatsapp">
          <img src="@/public/icons/messengers/telegram.svg" alt="telegram">
          <img src="@/public/icons/messengers/facebook.svg" alt="facebook">
        </div>
        <p>
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
.container {
  padding: 42px 0 34px 0;
}

.block-welcome {
  text-align: center;
  margin-top: 230px;
  margin-bottom: 41px;
  color: #fff;

  &__title {
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    margin-bottom: 16px;
  }

  &__subtitle {
    font-size: 18px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    margin: 153px 0 16px 0;
  }
}
</style>