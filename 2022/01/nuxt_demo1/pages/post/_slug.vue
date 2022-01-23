<template>
  <div v-html="data">
  </div>
</template>

<script>

import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';

export default {
  name: 'Post',

  async asyncData({params, redirect}) {
    let slug = params.slug;
    let data = fs.readFileSync(path.join('.', 'data', 'posts', slug + '.md'), 'utf-8');
    const md = new MarkdownIt();
    md.use(MarkdownItAttrs, {});

    console.log(`Slug: ${slug}`);

    console.log('Data', data);

    return {data: md.render(data)};

  }
}
</script>
