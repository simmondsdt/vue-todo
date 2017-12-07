<template>
  <div class="row">
    <div class="col-sm-11">
      <div class="card text-center">
        <div class="row">
          <div class="col-sm-2">
            <span v-on:click="deleteTodo(todo)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </span>
          </div>
          <div class="col-sm-8">
            <div>{{ todo.project }}</div>
            <div>Description: {{ todo.description }}</div>
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
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      deleteTodo(todo) {
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
  margin-top: 15px;
}
</style>
