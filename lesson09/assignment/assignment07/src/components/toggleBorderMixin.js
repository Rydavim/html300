export default {
  data() {
    return {
      isBordered: false  // tracking border state
    };
  },
  methods: {
    toggleBorder() {
      this.isBordered = !this.isBordered;  // toggle border
    }
  }
};
