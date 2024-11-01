<template>
  <div class="w-9/12 mx-auto rounded-md border-2 my-2.5 py-1.5 px-2.5 text-left">
    <div>
      {{ dateString }} / 
      <span class="font-bold">{{ authorName }}</span> / 
      <span class="text-blue-600"><a @click.stop="" :href="authorUrl">{{ authorUrl }}</a></span> 
    </div>
    <div class="text-left" ref="content"></div>
  </div>

  <my-button
    @click="router.push('/')">
      назад
  </my-button>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRouter, useRoute } from 'vue-router'

  import { usePostsStore } from '@/stores/posts'
  import { useDateString } from '@/hooks/useDateString'
  import { useContentString } from '@/hooks/useContentString'

  const content = ref(null) 
  const router = useRouter()
  const route = useRoute()
  const store = usePostsStore()

  const index = new URL(window.location).pathname.slice(6) - 1

  const authorName = computed(() => store?.postsArr[index]?.authorName)
  const authorUrl = computed(() => store?.postsArr[index]?.authorUrl)
  const dateString = ref('')

  const loadingData = async () => {
    await store.updatePostsArr()
  }

  loadingData().then(()=> {
    dateString.value = useDateString(index)
    coloredText()
  })

  function coloredText() {
    content.value.innerHTML = useContentString(index)
  }
</script>

<style scoped>

</style>