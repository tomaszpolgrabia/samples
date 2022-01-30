<template>
  <div>
    <div v-html="renderedTemplate"></div>
    <NuxtLink :to="'/blog/post/' + this.template.info.slug">Read me</NuxtLink>
  </div>
</template>
<script>

import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';

const md = new MarkdownIt();
md.use(MarkdownItAttrs, {});

export default {
  name: 'Post',
  computed: {
      renderedTemplate: function() {
        return md.render(this.template.data);
      }
  },
  props: ['template'],
}
</script>
<style lang="scss">
@import "~assets/main.scss";
</style>
