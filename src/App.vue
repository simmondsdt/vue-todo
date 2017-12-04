<template>
  <div id="app">
    <br />
    <div class="container text-center">
      <h2>My Todo List</h2>
      <br />
      <div class="row">
        <div class="col-sm-8">
          <todo-list v-bind:todos="todos"></todo-list>
        </div>
        <div class="col-sm-4">
          Comparison Chart
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [{
        project: 'Project 1',
        description: 'Description 1',
        completed: false,
      }, {
        project: 'Project 2',
        description: 'Description 2',
        completed: true,
      }, {
        project: 'Project 3',
        description: 'Description 3',
        completed: false,
      }, {
        project: 'Project 4',
        description: 'Description 4',
        completed: true,
      }],
    };
  },
};
</script>

<style>
</style>
