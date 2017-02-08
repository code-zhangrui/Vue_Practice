import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: []
    },

    methods: {
        addTodo: function() {
            var date = new Date();
            var year = date.getFullYear(),
                month = parseInt(date.getMonth() + 1),
                day = date.getDate(),
                hours = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds();
            var time = year + "-" +
                (month < 10 ? "0" : "") + month + "-" +
                (date < 10 ? "0" : "") + day + "-" +
                (hours < 10 ? "0" : "") + hours + ":" +
                (min < 10 ? "0" : "") + min + ":" +
                (sec < 10 ? "0" : "") + sec;

            this.todoList.push({
                title: this.newTodo,
                createdAt: time,
                done: false // 添加一个 done 属性
            })
            this.newTodo = ''
        },
        // 加了这个函数
        removeTodo: function(todo) {
            let index = this.todoList.indexOf(todo) // Array.prototype.indexOf 是 ES 5 新加的 API
            this.todoList.splice(index, 1) // 不懂 splice？赶紧看 MDN 文档！
        }
    },
    created: function() {
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
            window.localStorage.setItem('myTodos', dataString) // 看文档https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage
        }

        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []

    },
})
