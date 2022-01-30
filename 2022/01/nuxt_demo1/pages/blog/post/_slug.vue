<template>
  <div>
    <Navigation></Navigation>
    <div id="blog">
      <div class="wallpaper">
        <div class="container">
          <div class="bcontent">
            <Post :template="post" />
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
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';

export default {
  name: 'BlogPost',

  async asyncData({params, redirect}) {
    let slug = params.slug;
    let data = fs.readFileSync(path.join('.', 'data', 'posts', slug + '.md'), 'utf-8');

    let listOfPosts = JSON.parse(fs.readFileSync(
      path.join('.', 'data', 'posts', 'index.json')));

    let matchingPosts = listOfPosts.filter(post => {
      return post.slug == slug;
    });

    if (matchingPosts.length < 0) {
      return {data: ""};
    }

    return {post: {info: matchingPosts[0], data: data}};

  }
}
</script>
<style lang="scss">
@import "~assets/main.scss";
</style>
