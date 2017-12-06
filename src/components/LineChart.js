import { Bar } from 'vue-chartjs';

export default ({
  props: ['todos'],
  extends: Bar,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 0);
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 0);

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

    // eslint-disable-next-line
    this.getCompleteTodos = this.todos.filter(todo => { return todo.completed === true; }).length;

      // eslint-disable-next-line
    this.getPendingTodos = this.todos.filter(todo => { return todo.completed === false; }).length;

    this.renderChart({
      labels: ['', ''],
      datasets: [
        {
          label: 'Completed',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [this.getCompleteTodos, null],
        }, {
          label: 'Pending',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [null, this.getPendingTodos],
        },
      ],
    }, { responsive: true, maintainAspectRatio: false });
  },
});
