<template>
  <div class="container-market">
    <div class="container-market__header">
      <h1>Market Price</h1>
      <div class="balance">Your Account Balance</div>
      <strong class="balance-amount">$39,798.29</strong>
    </div>

    <div class="container-market__bg">111</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.container-market {
  position: relative;
  display: flex;
  justify-content: center;


  &__header {
    display: block;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }
  &__bg {
    position: absolute;
    background: #F5F7F6;
    width: 100%;
    height: 150px;
  }
}

.balance {
  font-size: 1.2em;
  color: #6c757d;
}

.balance-amount {
  font-size: 2em;
  margin-left: auto;
}
</style>