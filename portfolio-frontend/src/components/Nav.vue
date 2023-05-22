<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/projects">Projects</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background-color: #282a36;
  padding: 20px;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 15px;
  color: #f8f8f2;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #bd93f9;
}
</style>
