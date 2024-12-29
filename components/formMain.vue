<!-- <template>
  <div id="app">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First name</label>
        <input type="text" id="firstName" v-model.trim="form.firstName" placeholder="Enter your first name" />
        <span v-for="error in $v.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" v-model.trim="form.lastName" placeholder="Enter your last name" />
        <span v-for="error in $v.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="agreeTerms">I agree to the terms and conditions</label>
        <input type="checkbox" id="agreeTerms" v-model="form.agreement" />
        <span v-for="error in $v.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const form = reactive({
  firstName: '',
  lastName: '',
  agreement: false
})

const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage('first name', required),
  },
  lastName: {
    required: helpers.withMessage('last name', required),
  },
  agreement: {
    required: helpers.withMessage('qweqwee', required)
  }
}))

const $v = useVuelidate(rules, form)

const handleSubmit = () => {
  console.log(2, 'не прошел форму');
  
  $v.value.$validate()
  if (!$v.value.$invalid) console.log(1, 'Прошли форму');
  
}

</script>

<style scoped>

.form-group {
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.is-invalid {
  border-color: red;
  outline: 0;
  box-shadow: none;
}

span {
  color: red;
}
</style> -->