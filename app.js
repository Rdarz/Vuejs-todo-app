// var Vue = require('vue');

new Vue({
  el: '#list',

  data: {
    task: {id:'', title:''},
    tasks:[],
  },

  ready: function () {
    this.fetchTasks();
  },

  methods: {
    fetchTasks: function(){
      var tasks = [];
      
      this.$http.get('/api/tasks')
        .success(function(tasks){
          this.$set('tasks',tasks);
        })
        .error(function(err){
          console.log("error",err);
        });
    },
    addTask: function(){
      if(this.task.title.trim()){
        this.task.id = Math.floor(Math.random()*90 + 10)
        this.$http.post('/api/tasks',this.task)
          .success(function(){
            this.tasks.push(this.task);
            console.log("Task added!");
            this.task=""
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },
    deleteTask: function(index){
      if(confirm('Are you sure ? ')){
        this.$http.delete('api/tasks/' + this.tasks[index])
          .success(function(res){
            console.log(res);
            this.tasks.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});