<template>
  <div>
    <button 
      class="uppercase bg-green-900 rounded mt-3 mb-9 px-3.5 py-2 text-white lg:hover:bg-green-950"
      @click="click()">
      <slot></slot> 
    </button>
  </div>
</template>


<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MyButton',
    setup(props, { emit }) {
      const click = () => {
        emit('click')
      }

      return { click }
    }
  })
</script>

