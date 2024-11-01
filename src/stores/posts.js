import { ref } from 'vue'
import { defineStore } from 'pinia'
import GetData from '@/services/apiFetch'

export const usePostsStore = defineStore('posts', () => {
  const url = '/feed.json'
  const postsArr = ref([])

  async function updatePostsArr() {
    postsArr.value = await GetData(url)
  }

  return { postsArr, updatePostsArr }
})
