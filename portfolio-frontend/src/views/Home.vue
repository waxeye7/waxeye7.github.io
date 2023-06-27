<template>
  <div class="portfolio">
    <img
      :src="imagePath"
      class="link-button theme-button"
      @click="toggleTheme"
    />
    <div class="flex">
      <section class="introduction flex-one section-one-child">
        <div class="img-wrapper">
          <img
            class="img-title-styles img-title"
            :src="imagePathTitle"
            alt="Merlin Stemmer"
          />
        </div>

        <p class="small-margin-bottom">
          Hello there, I'm Merlin Stemmer. Born and raised in Christchurch, New
          Zealand, with German roots. I'm a web developer by trade, with a knack
          for problem-solving and a love for crafting beautiful things from
          lines of code.
        </p>

        <p class="small-margin-bottom">
          Like many people, I enjoy playing sports. I like to hit the tennis,
          table tennis, or badminton court whenever I can. Video games, strategy
          games, and board games help me hone my strategic thinking and planning
          skills, and they're just a whole lot of fun.
        </p>

        <p class="small-margin-bottom">
          There's one game, though, that stands out from the rest: Screeps. It's
          a game for coders, where you use JavaScript to control a virtual
          colony. It's not just a game, it's a sandbox where I can flex my
          coding skills, learn new strategies, and have a bit of fun along the
          way. It's fair to say I talk about Screeps a fair bit, but only to
          those who can appreciate the thrill of a well-executed script.
        </p>

        <p class="small-margin-bottom">
          When it comes to my work, I lean more towards the coding and backend
          side of things, but I can still deliver a great design when needed. I
          apply the same principles to my work that I use when gaming or coding
          for fun – precision, efficiency, and a creative spark. It's all about
          taking a problem, breaking it down, and finding the best way to solve
          it.
        </p>

        <p>
          All in all, I'm just a guy who loves a good challenge, whether it's in
          my work, a game, or life itself. I'm always looking forward to the
          next thing, ready to learn and grow. And I'm pretty excited to see
          where my coding and web development journey takes me next.
        </p>
      </section>

      <img
        class="flex-one section-one-child"
        style="width: 650px; height: 800px; margin: auto 0"
        src=""
        alt=""
      />

      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
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
  bottom: 20px;
}

.arrows path {
  stroke: var(--primary-color);
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
  font-size: 20px;
  margin-bottom: 8px;
}

p,
li {
  line-height: 1.6;
}
p {
  font-size: 20px;
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
.section-one-child {
  margin: 20px;
}
.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.img-title {
  margin: 30px 10px 30px 0;
}
.introduction {
  font-weight: 500;
  text-align: justify;
}
</style>
