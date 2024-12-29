<template>
  <div class="block">
    <button
      class="block__btn"
      :type="type"
      @click="$emit('onClick')"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
})

defineEmits(['onClick'])
</script>

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