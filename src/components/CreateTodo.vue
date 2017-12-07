<template>
  <div>
    <button class="btn btn-primary btn-sm" v-on:click="openForm" v-show="!isCreating">
      Create
    </button>
    <div v-show="isCreating">
      <div>
        <label>Project</label>
        <input v-model="projectText" type="text" ref="project" defaultValue="">
      </div>
      <div>
        <label>Notes</label>
        <input v-model="notesText" type="text" ref="notes" defaultValue="">
      </div>
      <div class="btn">
        <button class="btn btn-primary btn-sm" v-on:click="sendForm()">
          Create
        </button>
        <button class="btn btn-danger btn-sm" v-on:click="closeForm">
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
        notesText: '',
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
        if (this.projectText.length > 0 && this.notesText.length > 0) {
          const project = this.projectText;
          const notes = this.notesText;
          this.$emit('create-todo', {
            project,
            notes,
            completed: false,
          });
          this.projectText = '';
          this.notesText = '';
          this.isCreating = '';
        }
      },
    },
  };
</script>
