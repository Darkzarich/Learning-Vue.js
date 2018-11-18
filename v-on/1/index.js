var app = new Vue({
  el: '#app',

  data: {
    message: 'Some message which is going to be reverted'
  }, 
  methods: {
  	reverseMessage: function() {
  		this.message = this.message.split('').reverse().join('')
  	}  	
  }
})