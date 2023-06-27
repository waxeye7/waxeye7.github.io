<template>
  <div class="portfolio">
    <img
      :src="imagePath"
      class="link-button theme-button"
      @click="toggleTheme"
    />
    <div class="flex first-section">
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
      <section class="introduction flex-one section-one-child">
        <div class="img-wrapper">
          <img
            class="img-title-styles img-title"
            :src="imagePathTitle"
            alt="Merlin Stemmer"
          />
        </div>

        <div class="high-width">
          <p class="small-margin-bottom">
            Hi there, I'm Merlin Stemmer, a Christchurch native with German
            roots. I'm a web developer, passionate about problem-solving and
            crafting meaningful things through code.
          </p>

          <p class="small-margin-bottom">
            I enjoy hitting the tennis, table tennis, or badminton courts. But,
            my interest goes beyond sports to video games, strategy games, and
            board games. They're not just fun, but they also hone my strategic
            thinking.
          </p>

          <p class="small-margin-bottom">
            Screeps, a coding game, has a special place in my life. More than a
            game, it's a playground where I flex my JavaScript skills, develop
            strategies, and enjoy. You'll often find me discussing Screeps,
            especially with those who appreciate a well-executed script.
          </p>

          <p class="small-margin-bottom">
            In my professional life, I tend to gravitate more towards coding and
            backend work. However, I can rise to the occasion when a great
            design is required. Precision, efficiency, and creativity - the
            principles I follow in gaming, are the same ones I apply to my work.
          </p>

          <p>
            At the end of the day, I love challenges, be it in work, games, or
            life. Always eager to learn and grow, I can't wait to see where my
            web development journey leads next.
          </p>
        </div>
        <div class="low-width">
          <p class="small-margin-bottom">
            Hi, I'm Merlin Stemmer, a Christchurch-born web developer with a
            love for problem-solving and crafting code.
          </p>

          <p class="small-margin-bottom">
            Sports, strategy games, and particularly Screeps, a coding game,
            enhance my strategic thinking and bring me joy.
          </p>

          <p class="small-margin-bottom">
            While my professional focus leans towards coding and backend work, I
            can create great designs when needed.
          </p>

          <p>
            I relish challenges, love to grow, and eagerly anticipate the next
            step in my web development journey.
          </p>
        </div>
      </section>

      <img
        class="flex-one section-one-child"
        style="width: 650px; height: 800px; margin: auto 0"
        src=""
        alt=""
      />
    </div>

    <section class="skills">
      <h2>Merlin's Skills</h2>
      <ul>
        <li>Git</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>RESTful APIs</li>
      </ul>
    </section>

    <h2>Merlin's Projects</h2>
    <section class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card border"
      >
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
      imagePath: "/images/dark.svg",
      imagePathTitle: "/images/merlin-dark.png",
      isDarkTheme: false,
      changing: false,
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
        this.imagePath = "/images/light.svg";
        document.querySelector(".img-title").classList.add("half-opacity");
        setTimeout(() => {
          this.imagePathTitle = "/images/merlin-light.png";
        }, 150);
        document.querySelector(".img-title").classList.remove("half-opacity");
      } else {
        this.imagePath = "/images/dark.svg";
        document.querySelector(".img-title").classList.add("half-opacity");
        setTimeout(() => {
          this.imagePathTitle = "/images/merlin-dark.png";
        }, 150);
        document.querySelector(".img-title").classList.remove("half-opacity");
      }
    },
    // rest of your methods
  },
  mounted() {
    document.body.setAttribute("data-theme", "light");
  },
};
</script>

<style scoped>
.arrows {
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 34px;
}

.arrows path {
  stroke: var(--primary-text);
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
}
.small-margin-bottom {
  margin-bottom: 10px;
}
.portfolio {
  position: relative;
  max-width: 1600px;
  margin: auto;
  padding: 24px 40px 120px;
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
  margin-bottom: 8px;
}

p,
li {
  line-height: 1.6;
}
p {
  font-size: 18px;
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
  border: 1px solid;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.theme-button {
  position: fixed;
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
img {
  transition: opacity 0.1s ease-in-out;
  opacity: 1;
}

img.half-opacity {
  opacity: 0.25;
}
.first-section {
  position: relative;
  height: 90vh;
  padding-bottom: 10vh;
}
.section-one-child {
  margin: 20px;
}
.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-title {
  margin: 30px 10px 34px 0;
}
.introduction {
  font-weight: 500;
  text-align: justify;
}
.low-width {
  display: none;
}
@media (max-width: 1450px) {
  .low-width {
    display: block;
  }
  .high-width {
    display: none;
  }
}
</style>
