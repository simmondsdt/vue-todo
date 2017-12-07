<template>
  <div id="app">
    <div class="container">
      <div class="text-center">
        <h2>My Todo List</h2>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
      <br />
      <todo-list v-bind:todos="todos"></todo-list>
    </div>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    CreateTodo,
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          project: 'Go Shopping',
          description: 'Tuesday',
          completed: false,
        }, {
          project: 'Call Phil',
          description: 'Dont forget about party',
          completed: true,
        },
      ],
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
