
<template>
  <div class="spinner flex justify-center items-center text-slate-950"></div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MySpinner'
  })
</script>

<style scoped>
  .spinner:after {
    animation: changeContent .8s linear infinite;
    display: block;
    content: "⠋";
    font-size: 80px;
  }

  @keyframes changeContent {
    10% { content: "⠙"; }
    20% { content: "⠹"; }
    30% { content: "⠸"; }
    40% { content: "⠼"; }
    50% { content: "⠴"; }
    60% { content: "⠦"; }
    70% { content: "⠧"; }
    80% { content: "⠇"; }
    90% { content: "⠏"; }
  }
</style>
