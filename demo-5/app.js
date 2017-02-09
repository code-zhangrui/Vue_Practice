import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'eWDgDXiNoCqSt2fKChuAETYC-gzGzoHsz';
var APP_KEY = 'zu4tUVB1pJPKgw7k4Pr3nUkL';
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
        this.currentUser = this.getCurrentUser();
        this.fetchTodos() // 将原来的一坨代码取一个名字叫做 fetchTodos
    },
    methods: {
        fetchTodos: function() {
            if (this.currentUser) { //5、此时是存在的
                var query = new AV.Query('AllTodos'); //6、创建一个可以查询的东西query，这里的AllTodos就是前面save()的一个对象，对象里是要查询的东西
                query.find()   //7、开始遍历查询

                .then((todos) => { //8、查询到的信息放入形参todos
                    let avAllTodos = todos[0] // 因为理论上 AllTodos 只有一个，所以我们取结果的第一项 //9、将形参携带的信息放进一个叫做avAllTodos的容器里
                    let id = avAllTodos.id //10、提取信息中的 id 这项内容
                    this.todoList = JSON.parse(avAllTodos.attributes.content) // 为什么有个 attributes？因为我从控制台看到的 //11、提取信息中的 动作 这项内容传给数组
                    this.todoList.id = id // 为什么给 todoList 这个数组设置 id？因为数组也是对象啊  //12、将提取的 id 这项内容也传给数组

                }, function(error) {
                    console.error(error)
                })
            }
        },
        updateTodos: function() {
            // 如何更新对象， https://leancloud.cn/docs/leanstorage_guide-js.html#更新对象
            let dataString = JSON.stringify(this.todoList) // JSON 在序列化这个有 id 的数组的时候，会得出怎样的结果？
            let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id)
            avTodos.set('content', dataString)
            avTodos.save().then(() => {
                console.log('更新成功')
            })
        },

        saveTodos: function() {
            let dataString = JSON.stringify(this.todoList)
            var AVTodos = AV.Object.extend('AllTodos'); //这里就出现了AllTodos这个值，是AV.Object下的一个新对象
            var avTodos = new AVTodos(); //AllTodos构造出avTodos
            var acl = new AV.ACL()
            acl.setReadAccess(AV.User.current(), true) // 只有这个 user 能读
            acl.setWriteAccess(AV.User.current(), true) // 只有这个 user 能写
            avTodos.set('content', dataString); //avTodos设置出原数组中的 内容 这项信息
            avTodos.setACL(acl) // 设置访问控制
            avTodos.save().then((todo) => {
                this.todoList.id = todo.id // 一定要记得把 id 挂到 this.todoList 上，否则下次就不会调用 updateTodos 了

                console.log('保存成功');
            }, function(error) {
                console.log('保存失败');
            });
        },
        saveOrUpdateTodos: function() {
            if (this.todoList.id) {
                this.updateTodos()
            } else {
                this.saveTodos()
            }
        },

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
                done: false
            })
            this.newTodo = ''
            this.saveOrUpdateTodos()

        },
        // 加了这个函数
        removeTodo: function(todo) {
            let index = this.todoList.indexOf(todo) // Array.prototype.indexOf 是 ES 5 新加的 API
            this.todoList.splice(index, 1) // 不懂 splice？赶紧看 MDN 文档！
            this.saveOrUpdateTodos() // 不能用 saveTodos 了
        },
        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => {
                this.currentUser = this.getCurrentUser() //
            }, (error) => {
                console.log('注册失败') //
            });
        },
        login: function() {
            AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => { //1、首先，将this.formData.username与this.formData.password传入，变成形参loginedUser
                this.currentUser = this.getCurrentUser() //3、将当前this所指的loginedUser的id,username,createdAt传给变量currentUser
                this.fetchTodos() // 4、登录成功后读取 todos
            }, function(error) {
                console.log('登录失败') //
            });
        },
        getCurrentUser: function() { //2、这个函数传出id,username,createdAt
            let current = AV.User.current()
            if (current) {
                let {
                    id,
                    createdAt,
                    attributes: {
                        username
                    }
                } = current

                return {
                    id,
                    username,
                    createdAt
                }
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
