<template>
  <div class="wrapper">
    <div class="container">
      <MainLogo />
      <div class="block-welcome">
        <h2 class="textTitle">Enter your real name </h2>
      </div>
      <form class="formName" @submit.prevent="handleSubmit">
        <div class="formName__block-input">
          <div>
            <input
              class="inputName" type="text" placeholder="First name"
              v-model="form.firstName"
            />

            <span style="color: red;" v-if="$v.firstName.$error">
              {{ $v.firstName.$errors[0].$message }}
            </span>
          </div>
          <div>
            <input
              class="inputName" type="text" placeholder="Last name" 
              v-model="form.lastName"
            />
            <span style="color: red;" v-if="$v.lastName.$error">
              {{ $v.lastName.$errors[0].$message }}
            </span>
          </div>
        </div>
        <div class="block-text">
          <p class="textSubtitle block-text__deac" >
            You can use exchange service with false data, but if you wanting more external services like:
          </p>
          <div class="block-text__list">
            <div class="textSubtitle block-list">
              <div class="block-list__item">
                <div class="block-list__item-dot"></div>
                <span class="block-list__item-text">adding banks account</span>
              </div>
              <div class="block-list__item">
                <div class="block-list__item-dot"></div>
                <span class="block-list__item-text">exchange in two clicks</span>
              </div>
              <div class="block-list__item">
                <div class="block-list__item-dot"></div>
                <span class="block-list__item-text">crypto investments portfolio</span>
              </div>
              <div class="block-list__item">
                <div class="block-list__item-dot"></div>
                <span class="block-list__item-text">discounts for all of operations</span>
              </div>
              <div class="block-list__item">
                <div class="block-list__item-dot"></div>
                <span class="block-list__item-text">and more - you need to do KYC!</span>
              </div>
            </div>
          </div>
          <div class="block-checkbox">
            <input class="block-checkbox__item" type="checkbox" v-model="form.agreement" id="checkbox" >
            <label class="block-checkbox__text" for="checkbox">
              I certify that I am 18 years of age or older, 
              and I agree to the <strong>User Agreement</strong>  and <strong>Privacy Policy</strong>.
            </label>
          </div>

          <span style="color: red;" v-if="$v.agreement.$error">
            {{ $v.agreement.$errors[0].$message }}
          </span>
          <div style="justify-items: center; margin-top: 10px;">
            <p>Already have an account?</p>
          </div>
          <img class="block-text__img" src="@/public/20-Shield.svg" alt="Иконка">
        </div>
        <PinPopup
          :title="'Enter your PIN'"
          :isVisible="isPopupVisible"
          @close="isPopupVisible = false"
          @pin-completed="onPinCompleted"
        />
        <MainBtn type="submit">Next</MainBtn>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { ref } from "vue";
import PinPopup from "@/components/pinInput.vue";
const router = useRouter()
const route = useRoute()

const form = reactive({
  firstName: '',
  lastName: '',
  agreement: false
})

const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage('Enter first name', required),
  },
  lastName: {
    required: helpers.withMessage('Enter last name', required),
  },
  agreement: {
    required: helpers.withMessage('Required field', (value) => value === true)
  }
}))

const $v = useVuelidate(rules, form)

const handleSubmit = async () => {
 
  await $v.value.$validate()
  if ($v.value.$invalid) {
    console.log(2, 'не прошел форму')
    return
  }
  isPopupVisible.value = true
}

const isPopupVisible = ref(false);

const onPinCompleted = (pin: string) => {
  router.push({ path: '/mainDashboard', query: { from: route.fullPath, firstName: form.firstName, lastName: form.lastName } })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 42px 0 34px 0;
}

.block-welcome {
  text-align: center;
  margin: 91px 0 70px 0;
}

.formName {
  &__block-input {
    display: flex;
    justify-content: space-between;
    gap: 23px;
    margin-bottom: 24px;
  }
}

.inputName {
  width: 100%;
  padding: 10px 20px 18px 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #000;
}

.block-text {
  position: relative;
  margin-bottom: 29px;

 &__deac {
  font-weight: 500;
 }

 &__list {
  display: flex;
 }

 &__img {
  position: absolute;
  width: 116px;
  height: 116px;
  top: 102px;
  left: 230px;
 }
}

.block-list {
  font-size: 14px;
  margin-top: 30px;

  &__item {
    display: flex;
    align-items: center;

    &-dot {
      width: 5px;
      height: 5px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: #fff;
    }
    &-text {
      font-weight: 500
    }
  }
}

.block-checkbox {
  margin-top: 24px;
  display: flex;

  &__item {
    margin: 3px 10px auto 0;
  }
  
  &__text {
    font-size: 12px;
  }
}
</style>