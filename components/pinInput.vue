<template>
  <div
    class="popup-pin-input"
    :class="{ 'popup-pin-input--visible': isAnimating }"
    v-if="isAnimating"
  >
    <!-- Фон затемнения -->
    <div class="popup-pin-input__overlay" @click="closePopup"></div>

    <!-- Контент попапа -->
    <div class="popup-pin-input__content">
      <h1 class="popup-pin-input__title">{{ title }}</h1>
      <div class="popup-pin-input__fields">
        <input
          v-for="index in pinLength"
          :key="index"
          class="popup-pin-input__field"
          type="tel"
          maxlength="1"
          pattern="[0-9]*"
          @input="handleInput(index - 1, $event)"
          @keydown="handleKeydown($event, index - 1)"
          ref="inputs"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from "vue";

// Пропсы
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
});

// Емиты
const emit = defineEmits(["close", "pin-completed"]);

// Длина PIN-кода
const pinLength = 4;
const pin = ref<string[]>(Array(pinLength).fill(""));
const inputs = ref<HTMLInputElement[]>([]);

// Управление анимацией
const isAnimating = ref(false);

watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      isAnimating.value = true; // Показываем попап
    } else {
      // Ждём завершения анимации перед скрытием
      setTimeout(() => (isAnimating.value = false), 300); // Должно совпадать с CSS `transition`
    }
  },
);

// Закрытие попапа
const closePopup = () => {
  emit("close");
};

// Обработка ввода
const handleInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement;
  const onlyDigits = target.value.replace(/\D/g, "");
  target.value = onlyDigits;

  pin.value[index] = target.value;

  if (target.value && index < pinLength - 1) {
    inputs.value[index + 1].focus();
  }

  if (pin.value.join("").length === pinLength) {
    emit("pin-completed", pin.value.join(""));
  }
};

// Обработка клавиш
const handleKeydown = (event: KeyboardEvent, index: number) => {
  const target = event.target as HTMLInputElement;
  if (event.key === "Backspace" && !target.value && index > 0) {
    inputs.value[index - 1].focus();
  }
};
</script>

<style lang="scss" scoped>
.popup-pin-input {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Контент появляется снизу */
  visibility: hidden;
  opacity: 0;
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &--visible {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Затемнение */
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  &__content {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 80%; /* Увеличили высоту */
    background: #e3eaf0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 40px 20px;
    z-index: 2;
    transform: translateY(100%); /* Начальное положение (снизу) */
    transition: transform 0.3s ease-in-out;

    /* Когда попап видим */
    .popup-pin-input--visible & {
      transform: translateY(0); /* Выезд наверх */
    }
  }

  &__title {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
  }

  &__fields {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  &__field {
    width: 50px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    border: 2px solid #ffffff;
    border-radius: 8px;
    background: #6c757d;
    color: #ffffff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s;

    &:focus {
      border-color: #ffc107;
      box-shadow: 0px 0px 10px rgba(74, 144, 226, 0.5);
    }
  }
}
</style>
