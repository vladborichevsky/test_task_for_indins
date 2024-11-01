<template>
  <div class="w-4/5 mx-auto rounded-md cursor-pointer border-2 my-2.5 py-1.5 px-2.5 text-left hover:shadow-lg hover:bg-gray-100">
    <div>
      {{ dateString }} / 
      <span class="font-bold">{{ authorName }}</span> / 
      <span class="text-blue-600"><a @click.stop="" :href="authorUrl">{{ authorUrl }}</a></span> 
    </div>
    <div class="text-left" ref="content"></div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';

  import { usePostsStore } from '@/stores/posts'
  import { useDateString } from '@/hooks/useDateString'
  import { useContentString } from '@/hooks/useContentString'

  const props = defineProps({
    index: Number
  })

  const store = usePostsStore()

  const content = ref(null) 
  const authorName = computed(() => store?.postsArr[props.index].authorName)
  const authorUrl = computed(() => store?.postsArr[props.index].authorUrl)
  const dateString = useDateString(props.index)

  function coloredText() {
    content.value.innerHTML = useContentString(props.index)
  }

  onMounted(()=> {
    coloredText()
  })
</script>