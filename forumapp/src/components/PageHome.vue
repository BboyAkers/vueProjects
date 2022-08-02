<template>
  <div>
    <!-- <div v-for="thread in threads" :key="thread.id">
      <h2>{{thread.title}}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <h2>{{findUserById(findPostById(postId).userId).name}}</h2>
        <h2>{{findPostById(postId).text}}</h2>
      </div>
    </div> -->
    
    <!-- <div v-for="user in users" :key="user.id">
      <h2>{{user.name}}</h2>
    </div> -->
    <div v-for="thread in threads" :key="thread.id" class="col-large push-top">

        <ul class="breadcrumbs">
              <li><a href="#"><i class="fa fa-home fa-btn"></i>Home</a></li>
              <li><a href="category.html">Discussions</a></li>
              <li class="active"><a href="#">Cooking</a></li>
          </ul>

          <h1>{{thread.title}}</h1>

          <div v-for="postId in thread.posts" :key="postId" class="post-list">

              <div class="post">

                  <div class="user-info">
                      <a href="#" class="user-name">{{findUserById(findPostById(postId).userId).name}}</a>

                      <a href="#">
                          <img class="avatar-large" :src="findUserById(findPostById(postId).userId).avatar" alt="">
                      </a>

                      <p class="desktop-only text-small">107 posts</p>

                  </div>

                  <div class="post-content">
                      <div>
                        <p>
                          {{findPostById(postId).text}}
                        </p>
                      </div>
                      <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
                  </div>



                  <div class="post-date text-faded">
                      {{findPostById(postId).publishedAt}}
                  </div>

                  <div class="reactions">
                      <ul>
                          <li>💡</li>
                          <li>❤️</li>
                          <li>👎</li>
                          <li>👍</li>
                          <li>👌</li>
                      </ul>
                      <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
                      <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
                      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
                  </div>

              </div>
          </div>
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