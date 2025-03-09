<template>
  <div class="logo">
    <div>
      <span class="logo__bold">IN</span>
      <span>CRYPTO</span>
    </div>
    <img src="../public/logo.svg" alt="Logo">
  </div>
</template>

<style scoped lang="scss">
@use '../styles/base/vars.scss' as *;

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  
  font-family: $font-logo;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  color: #4A4A4A;

  &__bold {
    font-weight: 700;
    color: #000;
  }
}
</style>