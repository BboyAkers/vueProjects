<template>
  <div>
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{thread.title}}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <h2>{{findUserById(findPostById(postId).userId).name}}</h2>
        <h2>{{findPostById(postId).text}}</h2>
      </div>
    </div>
    
    <div v-for="user in users" :key="user.id">
      <h2>{{user.name}}</h2>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',
  props: {
    msg: String
  },
  data () {
    return {
      threads : sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    findPostById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    findUserById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style>

</style>