<template>
  <div>
    <div class="card">
      <div class="card-body">
        <li>{{ todo.project }}</li>
        <li>{{ todo.description }}</li>
        <li>{{ todo.completed }}</li>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
  };
</script>

<style>
</style>
