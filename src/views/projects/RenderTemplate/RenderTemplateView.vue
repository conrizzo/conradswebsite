
<template>
  <div>
    <div class="input-background-color">
      <input v-model="inputValue">
      <button class="clean-button" @click="submitValue">Submit</button>      
    </div>
 
     <div v-html="output"></div>
  </div>
</template>

<script>

import { ref} from 'vue';
import { Renderer } from './Renderer.ts';

export default {
  name: 'MyComponent',
  setup() {
    const inputValue = ref(''); // initialize with empty string or any default value
    const output = ref(''); // initialize output with empty string

    const submitValue = () => {
      const renderer = new Renderer(inputValue.value);
      output.value = renderer.getElements();
    };

    return {
      inputValue,
      submitValue,
      output
    };
  }
};
</script>

<style scoped>

input {
  font-size: 1.25em;
  border-radius: 1rem;
  border-width: 1px;
  outline: none;
  border: none;
  padding: 0.25em;
  padding-left: 2rem; 
}

.input-background-color{
  background-color: #000;
  padding: 2rem;
}

.clean-button{
  margin-left: 0.25rem;
}

</style>
