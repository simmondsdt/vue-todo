<script>
  import { Bar } from 'vue-chartjs';

  export default {
    props: ['todos'],
    extends: Bar,
    watch: {
      todos: {
        handler() {
          this.updateChart();
        },
        deep: true,
      },
    },
    methods: {
      updateChart() {
        this.renderChart({
          labels: ['', ''],
          datasets: [
            {
              label: 'Completed',
              borderColor: '#007bff',
              backgroundColor: '#007bff',
              data: [
                // eslint-disable-next-line
                this.todos.filter(todo => {
                  return todo.completed === true;
                }).length,
                null,
              ],
            }, {
              label: 'Pending',
              borderColor: '#dc3545',
              backgroundColor: '#dc3545',
              data: [
                null,
                // eslint-disable-next-line
                this.todos.filter(todo => {
                  return todo.completed === false;
                }).length,
              ],
            },
          ],
        }, { responsive: true, maintainAspectRatio: true });
      },
    },
    mounted() {
      this.updateChart();
    },
  };
</script>
