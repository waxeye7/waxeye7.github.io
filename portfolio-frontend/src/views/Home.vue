<template>
  <img :src="imagePath" class="link-button theme-button" @click="toggleTheme" />
  <div class="portfolio">
    <section class="introduction">
      <h1 class="main-heading">Merlin Stemmer</h1>
      <p>
        Merlin is a skilled full-stack developer with a particular passion for
        backend complexities. His proficiency in Vue, Node.js, Express, MongoDB,
        and RESTful APIs, combined with his front-end expertise, enables him to
        create robust, scalable, and user-friendly web solutions.
      </p>
    </section>

    <section class="skills">
      <h2>Merlin's Skills</h2>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>RESTful APIs</li>
        <li>Vue.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Version Control with Git</li>
      </ul>
    </section>

    <h2>Merlin's Projects</h2>
    <section class="projects">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.demoLink" target="_blank">View Demo</a>
      </div>
    </section>

    <!-- <section class="achievements">
      <h2>Merlin's Achievements</h2>
      <ul>
        <li>Full Stack Web Development Course Completion</li>
        <li>Backend Development Competition Winner</li>
        <li>Certified Node.js Developer</li>
      </ul>
    </section> -->

    <section class="contact">
      <h2>Contact Merlin</h2>
      <p>
        If you have any inquiries or would like to discuss a project, feel free
        to <a href="mailto:contact@merlin.com">email Merlin</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      imagePath: "/images/dark.png",
      isDarkTheme: false,
      projects: [
        {
          id: 1,
          title: "Full-Stack Project 1",
          description:
            "An efficient, user-friendly web application developed by Merlin. It features a robust backend built with Node.js, Express.js, and MongoDB, and a responsive front-end utilizing Vue.js.",
          demoLink: "https://example.com/project1-demo",
        },
        {
          id: 2,
          title: "Full-Stack Project 2",
          description:
            "A comprehensive, scalable application by Merlin that showcases the power of full-stack development. This project employs RESTful practices for data manipulation and Vue.js for an interactive user interface.",
          demoLink: "https://example.com/project2-demo",
        },
        // Add more projects as needed
      ],
    };
  },

  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.setAttribute(
        "data-theme",
        this.isDarkTheme ? "dark" : "light"
      );
      if (this.isDarkTheme) {
        this.imagePath = "/images/light.png";
      } else {
        this.imagePath = "/images/dark.png";
      }
    },
    // rest of your methods
  },
};
</script>

<style scoped>
.portfolio {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: "Quicksand", Arial, sans-serif;
}

.introduction,
.skills,
.projects,
.achievements,
.contact {
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
  margin-bottom: 8px;
}

p,
li {
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
}

.project-card {
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.theme-button {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 50px;
  width: 50px;
  padding: 10px;
  z-index: 1;
}
.main-heading {
  margin-bottom: 40px;
  font-size: 32px;
}
</style>
