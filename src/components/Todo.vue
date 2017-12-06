<template>
  <div>
    <div id="card" class="card w-50 text-center">
      <div class="card-header" v-show="!isEditing">
        <div class="row">
          <div class="col-sm-2">
            <div class="row">
              <div class="col-sm-5">
                <span v-on:click="showForm">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
              </div>
              <div class="col-sm-5">
                <span v-on:click="deleteTodo(todo)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div>{{ todo.project }}</div>
            <div>{{ todo.description }}</div>
            <div>{{ todo.completed }}</div>
          </div>
        </div>
      </div>
      <div class="card-body" v-show="isEditing">
        <div>
          <label>Project</label>
          <input type="text" v-model="todo.project">
        </div>
        <div>
          <label>Description</label>
          <input type="text" v-model="todo.description">
        </div>
        <div>
          <button class="btn btn-primary" v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
      <div class="btn btn-primary" v-show="!isEditing && todo.completed" disabled>
        Completed
      </div>
      <div class="btn btn-danger" v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.completed">
        Pending
      </div>
    </div>
    <br />
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
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
    },
  };
</script>

<style>
</style>
