var app = new Vue({
    el: '#app',
    data: { 
        tasks:[
            { name: 'do this first task', done: false},
            { name: 'do this second task', done: false},
            { name: 'do this third task', done: false},
        ],
        taskInput: '',
    },
    methods:{
        addItem () {
            if(this.taskInput){
                // c.preventDefult();
                this.tasks.push({
               
                    name: this.taskInput,
                    completed: false,
                    done: false
                });
                this.taskInput='';
            }

        },
        deletetask (task){
            this.tasks.splice(this.tasks.indexOf(task),1)
        }
    }
});