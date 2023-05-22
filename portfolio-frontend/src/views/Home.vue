<template>
  <div class="home-page">
    <div class="content">
      <h1>Merlin the Magician</h1>
      <p>
        A web developer from Christchurch, New Zealand who believes there's
        always a way, yes, I'm stubborn.
      </p>
    </div>

    <div class="hex-grid">
      <div
        v-for="(row, rowIndex) in hexGrid"
        :key="rowIndex"
        class="hex-row bottom-row"
      >
        <div v-for="(hex, hexIndex) in row" :key="hexIndex" class="hexagon">
          <div class="hexagon-inner" @click="goToPage(hex.page)">
            {{ hex.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hexGrid: [
        [
          { label: "About", page: "about" },
          { label: "Portfolio", page: "portfolio" },
        ],
        [{ label: "Contact", page: "contact" }],
      ],
    };
  },
  methods: {
    goToPage(page) {
      // Handle page navigation
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  text-align: center;
  margin-bottom: 2rem;
}

.hex-grid {
  margin-top: 2rem;
}

.hex-row {
  display: flex;
  justify-content: center;
}

.hexagon {
  width: 10rem;
  height: 10rem;
  background-color: #e6e6e6;
  clip-path: polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%);
  cursor: pointer;
  margin: -0.8rem;
}
.bottom-row .hexagon {
  margin-top: -1.3rem;
}

.hexagon-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #000;
  font-weight: bold;
}

.hexagon:hover {
  background-color: #d6d6d6;
}
</style>
