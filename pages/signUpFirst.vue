<template>
  <div class="wrapper">
    <div class="container">
      <MainLogo />
      <div class="block-welcome">
        <h2 class="block-welcome__title">Enter your real name </h2>
      </div>
      <form>
        <div >
          <input class="input" type="text" placeholder="First name">
          <input type="text" placeholder="Last name">
        </div>
      </form>
      <NuxtLink to="/signIn">
        <MainBtn>Create account</MainBtn>
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

  &__title {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  }
}
.input {

}
</style>