<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-on:revert-todo="revertTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
      </div>
      <div class="col-sm-6">
        <bar-chart class="card bg-light" v-bind:todos="todos"></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import BarChart from './BarChart';
  import Todo from './Todo';

  export default {
    props: ['todos'],
    components: {
      BarChart,
      Todo,
    },
    methods: {
      deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      completeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].completed = true;
      },
      revertTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].completed = false;
      },
    },
  };
</script>
