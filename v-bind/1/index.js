var app = new Vue({
  el: '#app',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})