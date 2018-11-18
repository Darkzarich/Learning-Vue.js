Vue.component('todo-item', {
  // Компонент todo-item теперь принимает
  // "prop", то есть входной параметр.
  // Имя входного параметра todo.
  props: ['todo'],
  template: '<li v-bind:id="todo.id"> {{ todo.text }}</li>' 
  // id is these just for example
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Булка' },
      { id: 3, text: 'Что-то еще' }
    ]
  },
  methods: {
    sortedArray: function () {
      return this.groceryList.sort((a, b) => a.id - b.id );
    }
  }
})