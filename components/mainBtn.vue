<template>
  <div class="block">
    <button class="block__btn">
      <slot />
    </button>
  </div>
</template>

<style scoped lang="scss">
.block {
  
  &__btn {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    background-color: #FECD00;
    color: #4A4A4A;
  }
}
</style>