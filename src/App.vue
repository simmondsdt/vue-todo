<template>
  <div id="app">
    <br />
    <div id="title" class="container text-center">
      <h2>My Todo List</h2>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-6 text-center">
        Chart will go here
        <comparison-chart></comparison-chart>
      </div>
      <div class="col-sm-6 text-center">
        Todos will go here
        <todo-list v-bind:todos="todos"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import ComparisonChart from './components/ComparisonChart';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    ComparisonChart,
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
        completed: true,
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
