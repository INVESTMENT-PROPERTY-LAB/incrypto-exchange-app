<template>
  <div class="wrapper">
    <div class="container">
      <MainLogo />
      <div class="block-welcome">
        <h2 class="block-welcome__title">Welcome</h2>
        <p class="block-welcome__subtitle">
          To international Exchange app!
        </p>
      </div>
      <NuxtLink to="/signIn">
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
  margin-top: 91px;
  margin-bottom: 468px;

  &__title {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }

  &__subtitle {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }
}

.img-wallet {
  position: absolute;
  top: 324px;
  right: 37px;
}
</style>