/**
 * Created by lenovo on 2017/1/10.
 */
import Vue from 'vue';
import style from './style.css'
var app = new Vue({  
    el: '#app',
    data: {
        newTodo: '', //����ֵ��newTodo��ֵͨ��v-model˫���
        todoList: [], //v-on�س�֮��ֵ����������
        inputData: [{ct:''}]
    },
    methods: {
        save: function () {
            this.inputData.push({
                ct: this.newTodo
            });
            console.log(this.inputData);
        },
        addTodo: function () {
            var date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds(),
                time = year + '-' + ''
                    + ( (month < 10) ? '0' : '' ) + month + '-' + ''
                    + ( (day < 10) ? '0': '' ) + day + ' '
                    + ( (hour < 10) ? '0' : '' ) +  hour + ':'
                    + ( (minute < 10) ? '0': '' ) + minute + ':'
                    + ((second < 10) ? '0' : '') + second;
            if(this.newTodo){
                this.todoList.push({
                    title: this.newTodo,
                    createdAt: time,
                    done: false,  //���ɵĶ����done���Ժ�inputͨ��v-model˫���
                });
            }
            this.newTodo = '';
            this.save();
        },
        removeTodo: function (todo) {
            var idx = this.todoList.indexOf(todo);
            this.todoList.splice(idx, 1); //splice ��飬ʹ��ϣ�����ȴ��ɾ����
        },
    },
    created: function(){  //��ʵ������֮��ִ�к���
        // onbeforeunload�ĵ���https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = ()=>{  //��ҳ��رջ�ˢ�µ�ʱ��ִ��һ������
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos', dataString)  //ҳ��رյ�ʱ�򱣴���������е�ֵ

            let inputDataString = JSON.stringify(this.inputData)
            window.localStorage.setItem('save', inputDataString)

        };//localStorage���涼���ַ�����

        let oldDataString = window.localStorage.getItem('myTodos')  //�û�����ҳ��֮��������ȡlocalStorage�е�����
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []

        let oldInputDataString = window.localStorage.getItem('save')
        let oldInputData = JSON.parse(oldInputDataString)  //[obj1, obj2,....objn]
        if(oldInputData.length){
            this.inputData.push ( oldInputData[oldInputData.length - 1] )
        }else {
            this.InputData =  [{ct:''}]
        }


    }
});

