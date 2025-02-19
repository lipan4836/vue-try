<template>
  <div class="wrap">
    <h1>Добро пожаловать</h1>
    <div class="links-wrap">
      <router-link to="/posts" class="links">Посты</router-link>
      <router-link to="/about" class="links">О приложении</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
}

.links-wrap {
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.links {
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: rgb(81, 116, 146);
  transition: all 0.2s ease-in;
}

.links:hover {
  background: #ffb5b5;
}
</style>
