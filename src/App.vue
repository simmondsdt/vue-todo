<template>
  <div id="app">
    <br />
    <div class="container text-center">
      <h2>My Todo List</h2>
      <br />
      <create-todo v-on:create-todo="createTodo"></create-todo>
      <div class="row">
        <div class="col-sm-8">
          <br />
          <todo-list v-bind:todos="todos"></todo-list>
        </div>
        <div class="col-sm-4">
          <br />
          <chart v-bind:todos="todos"></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    Chart,
    CreateTodo,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>

<style>
</style>
