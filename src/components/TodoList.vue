<template>
  <div>
    <todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
  </div>
</template>

<script>
  import Todo from './Todo';

  export default {
    props: ['todos'],
    components: {
      Todo,
    },
  };
</script>

<style>
</style>
