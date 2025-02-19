<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.btn:hover {
  background-color: bisque;
}
</style>