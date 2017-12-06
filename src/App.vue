<template>
  <div id="app">
    <div class="container">
      <h2 class="title">My Todo List</h2>
      <br />
      <create-todo v-on:create-todo="createTodo"></create-todo>
      <div class="row">
        <div class="col-sm-6">
          <br />
          <todo-list v-bind:todos="todos"></todo-list>
        </div>
        <div class="col-sm-6">
          <br />
          <h2 class="text-center">Bar Chart</h2>
          <div class="">
            <line-chart v-bind:todos="todos"></line-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    LineChart,
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
.Chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
}

.Chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color:  rgba(255, 0,0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>
