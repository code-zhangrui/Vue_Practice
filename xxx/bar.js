export default function bar() {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'You loaded this page on ' + new Date()
        }
    })

    var app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }
    })

    var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome!!!!!' }
        ]
      }
    })

    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
      el: '#app-7',
      data: {
        groceryList: [
          { text: 'Vegetables' },
          { text: 'Cheese' },
          { text: 'Whatever else humans are supposed to eat' }
        ]
      }
    })



}
