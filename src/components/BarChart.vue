<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>
  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs';

export default {
  props: ['todos'],
//   extends: Bar,
//   mounted() {
//     // eslint-disable-next-line
//   this.getCompleteTodos = this.todos.filter(todo => { return todo.completed === true; }).length;
//     // eslint-disable-next-line
//   this.getPendingTodos = this.todos.filter(todo => { return todo.completed === false; }).length;

//     this.renderChart({
//       labels: ['', ''],
//       datasets: [
//         {
//           label: 'Completed',
//           borderColor: '#007bff',
//           backgroundColor: '#007bff',
//           data: [this.getCompleteTodos, null],
//         }, {
//           label: 'Pending',
//           borderColor: '#dc3545',
//           backgroundColor: '#dc3545',
//           data: [null, this.getPendingTodos],
//         },
//       ],
//     }, { responsive: true, maintainAspectRatio: false });
//   },
};
</script>
