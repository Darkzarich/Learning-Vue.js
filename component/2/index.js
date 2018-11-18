Vue.component('blog-post-body', {
  props: ['post'],
  template: `
    <div class="blog-post-body">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Увеличить размер текста
      </button>
      <div v-html="post.full"></div>
      <hr>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    posts: [
        {
          id: 0,
          title: 'My Journey with Vue.',
          full: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ducimus!'
        },
        {
          id: 1,
          title: 'Vue is cool!',
          full: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio perferendis laborum modi odit, ea autem.'
        },
        {
          id: 2,
          title: 'Why Vue is so fun',
          full: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
        }
    ],
    postFontSize: 1
  }
})