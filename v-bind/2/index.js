var example1 = new Vue({
  el: '#example1',
  data: {
  	isActive: true,
  	hasError: false, 
  	classObject: {
    	active: true,
    	'text-danger': false
  	}
  }
})

var example2 = new Vue({
	el: '#example2',
	data: {
	  isActive: true,
	  error: null
	},
	computed: {
	  classObject: function () {
	    return {
	      active: this.isActive && !this.error,
	      'text-danger': this.error && this.error.type === 'fatal'
	    }
	  }
	}
})