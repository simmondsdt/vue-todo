<template>
  <div>
    <button class="btn btn-primary" v-on:click="openForm" v-show="!isCreating">
      Create
    </button>
    <div v-show="isCreating">
      <div>
        <label>Project</label>
        <input v-model="projectText" type="text" ref="project" defaultValue="">
      </div>
      <div>
        <label>Description</label>
        <input v-model="descriptionText" type="text" ref="description" defaultValue="">
      </div>
      <div class="btn">
        <button class="btn btn-primary" v-on:click="sendForm()">
          Create
        </button>
        <button class="btn btn-danger" v-on:click="closeForm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectText: '',
      descriptionText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.projectText.length > 0 && this.descriptionText.length > 0) {
        const project = this.projectText;
        const description = this.descriptionText;
        this.$emit('create-todo', {
          project,
          description,
          completed: false,
        });
        this.projectText = '';
        this.descriptionText = '';
        this.isCreating = '';
      }
    },
  },
};
</script>

<style>
</style>