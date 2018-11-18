var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  },
  computed: {
  	reversedMessage: function () {
  		// `this` указывает на экземпляр vm
  		return this.message.split('').reverse().join('')
  	}
  }
})