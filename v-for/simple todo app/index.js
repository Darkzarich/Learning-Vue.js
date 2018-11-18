Vue.component('todo-item', {
	props: ['title'],
	template: '<li>{{title}} <button v-on:click="$emit(\'remove\')" class="btn btn-danger btn-sm float-right">Delete</button></li>'
})

var app = new Vue({
  el: '#app',
  data: {
    todos: [
	    {
	    	title: 'Clear room',
	    	id: 0
	    }, 
	    {
	    	title: 'Do homework',
	    	id: 1
	    },
	    {
	    	title: 'Sport',
	    	id: 2
	    }
    ],
    newTodoText: '', 
    nextTodoId: 3 
  },
  methods: { 
  	addNewTodo: function() {
	  	if (this.newTodoText) { 
	  		this.todos.push ({
		  		title: this.newTodoText,
		  		id: this.nextTodoId++
	  		})
	  	}
  		this.newTodoText = ''
  	}  
  }
})