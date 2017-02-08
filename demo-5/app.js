import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'eWDgDXiNoCqSt2fKChuAETYC-gzGzoHsz';
var APP_KEY = '51GD6FUCOS32gvXE752Trs1B';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var app = new Vue({
    el: '#app',
    data: {
        actionType: 'signUp',
        formData: {
            username: '',
            password: ''
        },
        newTodo: '',
        todoList: [],
        currentUser: null
    },
    created: function() {
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList) // JSON 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON

            var AVTodos = AV.Object.extend('AllTodos');
            var avTodos = new AVTodos();
            avTodos.set('content', dataString);
            avTodos.save().then(function(todo) {
                 // 成功保存之后，执行其他逻辑.
                console.log('保存成功');
            }, function(error) {
                 // 异常处理
                console.error('保存失败');
            });
        }

        this.currentUser = this.getCurrentUser();

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
        },
        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => { // 👈，将 function 改成箭头函数，方便使用 this
                this.currentUser = this.getCurrentUser() // 👈
            }, (error) => {
                alert('注册失败') // 👈
            });
        },
        login: function() {
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => { // 👈
                this.currentUser = this.getCurrentUser() // 👈
            }, function(error) {
                alert('登录失败') // 👈
            });
        },
        getCurrentUser: function() {
            let current = AV.User.current()
            if (current) {
                let {
                    id,
                    createdAt,
                    attributes: {
                        username
                    }
                } = current
                // 上面这句话看不懂就得看 MDN 文档了
                // 我的《ES 6 新特性列表》里面有链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                return {
                    id,
                    username,
                    createdAt
                } // 看文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#ECMAScript_6%E6%96%B0%E6%A0%87%E8%AE%B0
            } else {
                return null
            }
        },
        logout: function() {
            AV.User.logOut()
            this.currentUser = null
            window.location.reload()
        }
    }
})
