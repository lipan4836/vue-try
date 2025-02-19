<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <nav class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О приложении</my-button>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  padding: 5px 15px;
}

.navbar__btns {
  display: flex;
  gap: 15px;
}
</style>
