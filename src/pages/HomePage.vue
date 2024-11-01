<template>
  <my-spinner
    v-show="postsArr.length == 0"/>

  <div
    class="mt-5">
      <transition-group name="contact-list">
        <my-post
          v-for="(post, index) in postsArr"
          @click="router.push(`/post/${index + 1}`)" 
          :key="index"
          :index="index"/>
      </transition-group>
  </div>

  <my-button
    v-show="!postsArr.length == 0"
    @click="incrNumOfPosts">
      показать ещё
  </my-button>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router'

  import MyPost from '@/components/MyPost.vue'
  import { usePostsStore } from '@/stores/posts'

  const router = useRouter()
  const store = usePostsStore()

  const numberOfPosts = ref(10)

  const postsArr = computed(()=> store?.postsArr.slice(0, numberOfPosts.value))

  const incrNumOfPosts = () => {
    numberOfPosts.value += 10
  }

  store.updatePostsArr()
</script>

<style scoped>
  .contact-list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .contact-list-enter-active,
  .contact-list-leave-active {
    transition: all 1s ease;
  }

  .contact-list-enter-from,
  .contact-list-leave-to {
    transition: all 1s ease;
    opacity: 0;
    transform: translateY(30px);
  }
</style>