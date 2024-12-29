<template>
  <div class="bg-img">
    <div class="wrapper">
      <div class="container">
        <MainLogo />
        <div class="block-welcome">
          <h2 class="textTitle">Welcome</h2>
          <p class="textSubtitle">
            To international Exchange app!
          </p>
        </div>
        <NuxtLink to="/signIn">
          <MainBtn>Get started</MainBtn>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="img-wallet">
    <img src="../public/Yellow Cartoon Crypto Wallet.H03.2k.svg" alt="Wallet">
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  padding: 42px 0 0 0;
}

.container {
  padding-bottom: 34px;
}

.block-welcome {
  text-align: center;
  margin-top: 91px;
  margin-bottom: 468px;
}

.img-wallet {
  position: absolute;
  top: 410px;
  left: 50%;
  width: 410px;
  transform: translate(-55%, -45%)
}

</style>