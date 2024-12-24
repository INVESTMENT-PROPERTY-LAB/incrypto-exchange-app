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
  // padding: 83px 0 91px 0;
  
  font-family: $font-logo;
  font-size: 20px; /* Размер текста */
  font-weight: 400; /* Обычный стиль по умолчанию */
  letter-spacing: 2px;
  color: #4A4A4A;

  &__bold {
    font-weight: 700; /* Жирный шрифт */
    color: #000; /* Цвет текста (чёрный для выделения) */
  }
}
</style>