<template>
  <div class="home">
    <h2>Welcome to My Portfolio</h2>
    <div class="home-content">
      <div class="feature">
        <h3>Web Development</h3>
        <p>
          I specialize in creating modern and responsive websites using the
          latest web technologies. From simple landing pages to complex web
          applications, I have the expertise to bring your ideas to life.
        </p>
      </div>
      <div class="feature">
        <h3>UI/UX Design</h3>
        <p>
          User experience is a top priority in my design process. I carefully
          consider every detail to ensure that the websites I create are not
          only visually appealing but also intuitive and easy to navigate for
          users.
        </p>
      </div>
      <div class="feature">
        <h3>Responsive Design</h3>
        <p>
          In today's mobile-driven world, it's crucial for websites to adapt to
          different screen sizes. I design and develop responsive websites that
          provide a seamless user experience across all devices, from desktop
          computers to smartphones.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background-color: #f7f7f7;
  padding: 20px;
}

.home h2 {
  text-align: center;
  color: #333333;
}

.home-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
}

.feature {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  font-size: 20px;
  color: #333333;
  margin-bottom: 10px;
}

.feature p {
  font-size: 16px;
  color: #555555;
}
</style>
