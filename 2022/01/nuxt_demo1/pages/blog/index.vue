<template>
  <div>
    <Navigation></Navigation>
    <div class="blog">
      <div class="wallpaper">
        <div class="container">
          <div class="bcontent">
            <Post :key="post.info.slug" v-for="post of posts" :template="post" />
            End of Index
            <div id="disqus_thread"></div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>

import fs from 'fs';
import path from 'path';

export default {
  name: 'Blog',
  async asyncData({params, redirect}) {
    let listOfPosts = JSON.parse(fs.readFileSync(
      path.join('.', 'data', 'posts', 'index.json')));

    let posts = listOfPosts.map((post) => {
      let data = fs.readFileSync(
        path.join('.', 'data', 'posts', post.slug + ".md"), "utf-8");
      return {info: post, data: data};
    });

    console.log('Posts: ', posts);

    return {posts: posts};
  }
}
</script>
<style lang="scss">
@import "~assets/main.scss";
</style>
