<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-7">
        <div class="todo">
          <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
        </div>
      </div>
      <div class="col-sm-5">
        <bar-chart v-bind:todos="todos"></bar-chart>
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
    },
  };
</script>

<style>
.todo {
  margin-left: 75px;
}
</style>
