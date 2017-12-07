<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card bg-light text-center">
        <div class="row">
          <div class="col-sm-2">
            <span v-on:click="deleteTodo(todo)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
          <div class="col-sm-8">
            <div>{{ todo.project }}</div>
            <div>Notes: {{ todo.notes }}</div>
          </div>
          <div class="col-sm-2">
            <span v-on:click="checkTodo(todo)">
              <i v-show="todo.completed" class="fa fa-check-square-o" aria-hidden="true"></i>
              <i v-show="!todo.completed" class="fa fa-square-o" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
      deleteTodo(todo) {
        // eslint-disable-next-line
        alert('Are you sure you want to delete?');
        this.$emit('delete-todo', todo);
      },
      checkTodo(todo) {
        if (todo.completed === true) {
          this.$emit('revert-todo', todo);
        } else {
          this.$emit('complete-todo', todo);
        }
      },
    },
  };
</script>

<style>
.fa {
  margin-top: 17px;
}
</style>
