<template>
  <div class="about">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="profile">
        <img
          src="https://i.ibb.co/s9R4PH5/unnamed.gif"
          alt="Profile Picture"
          class="profile-picture"
        />
        <h3>Merlin Stemmer</h3>
        <p>Web Developer</p>
      </div>
      <div class="description">
        <p>
          Hi, I'm Merlin Stemmer, a passionate web developer with a love for
          coding. I specialize in front-end development and have a strong
          foundation in HTML, CSS, and JavaScript. I strive to create
          user-friendly and visually appealing websites that leave a lasting
          impression.
        </p>
        <p>
          My journey in web development began several years ago when I realized
          the potential of the internet to connect people and businesses. Since
          then, I've been continuously expanding my skills and staying up to
          date with the latest industry trends.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          learning about design principles, and seeking inspiration from
          innovative websites. I believe in the power of collaboration and enjoy
          working in teams to create exceptional digital experiences.
        </p>
        <p>
          Let's work together to bring your ideas to life and create
          cutting-edge web solutions that make a difference.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #f7f7f7;
  padding: 20px;
}

.about h2 {
  text-align: center;
  color: #333333;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin-top: 20px;
}

.profile {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile h3 {
  font-size: 24px;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 5px;
}

.profile p {
  font-size: 16px;
  color: #555555;
  margin-bottom: 10px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.description {
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  color: #555555;
}
</style>
