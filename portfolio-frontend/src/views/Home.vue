<template>
  <img :src="imagePath" class="link-button theme-button" @click="toggleTheme" />
  <div class="portfolio">
    <div class="flex justify-center first-section">
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
            alt="Merlin Stemmer Text"
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
            I also love video games, strategy games, and board games. They're
            not just fun, but they also hone my strategic thinking.
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
            design is required. The precision and creativity I cultivate in
            gaming directly translates to my coding and backend work.
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

      <div class="section-one-child flex-one img-of-me">
        <img src="/images/man.jpg" alt="Merlin Stemmer" />
      </div>
    </div>

    <section class="skills">
      <h2 class="subheading">My Skills</h2>
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

    <h2 class="subheading">My Websites</h2>
    <section class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card border"
      >
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="project-image-wrapper">
          <img :src="project.imageLink" alt="Project Image" />
        </div>

        <p>{{ project.description }}</p>
        <div class="links">
          <a :href="project.demoLink" target="_blank">View Live Site</a>
          <span class="github-wrapper">
            <a :href="project.gitHubLink" target="_blank">
              <svg
                class="github"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="contact">
      <h2 class="subheading">Contact Me</h2>
      <p>
        If you have any inquiries or would like to discuss a project or job
        opportunity, feel free to
        <a href="mailto:stemmermerlin@gmail.com">email me</a> at
        <span style="font-weight: 900" ref="email"
          >stemmermerlin@gmail.com</span
        >

        <svg
          class="icon"
          @click="copyToClipboard"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <title>ic_fluent_copy_24_regular</title>
          <desc>Created with Sketch.</desc>
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill="currentColor"
            fill-rule="evenodd"
          >
            <g
              id="ic_fluent_copy_24_regular"
              fill="currentColor"
              fill-rule="nonzero"
            >
              <path
                d="M5.50280381,4.62704038 L5.5,6.75 L5.5,17.2542087 C5.5,19.0491342 6.95507456,20.5042087 8.75,20.5042087 L17.3662868,20.5044622 C17.057338,21.3782241 16.2239751,22.0042087 15.2444057,22.0042087 L8.75,22.0042087 C6.12664744,22.0042087 4,19.8775613 4,17.2542087 L4,6.75 C4,5.76928848 4.62744523,4.93512464 5.50280381,4.62704038 Z M17.75,2 C18.9926407,2 20,3.00735931 20,4.25 L20,17.25 C20,18.4926407 18.9926407,19.5 17.75,19.5 L8.75,19.5 C7.50735931,19.5 6.5,18.4926407 6.5,17.25 L6.5,4.25 C6.5,3.00735931 7.50735931,2 8.75,2 L17.75,2 Z M17.75,3.5 L8.75,3.5 C8.33578644,3.5 8,3.83578644 8,4.25 L8,17.25 C8,17.6642136 8.33578644,18 8.75,18 L17.75,18 C18.1642136,18 18.5,17.6642136 18.5,17.25 L18.5,4.25 C18.5,3.83578644 18.1642136,3.5 17.75,3.5 Z"
                id="🎨-Color"
              ></path>
            </g>
          </g>
        </svg>
        <div v-if="showCopyMsg" class="overlay">
      <span class="message">Email copied to clipboard</span>
    </div>
      </p>
    </section>

    <section class="github-links">
      <h2>Find Me on GitHub</h2>
      <div class="links">
        <div class="github-wrapper">
          <a href="https://github.com/waxeye7" target="_blank">
            <p>My GitHub Page</p>
          </a>
        </div>
        <div class="repo-wrapper">
          <a
            href="https://github.com/waxeye7/waxeye7.github.io"
            target="_blank"
          >
            <p>This Project's Repository</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      showCopyMsg: false,
      imagePath: "/images/light.svg",
      imagePathTitle: "/images/merlin-light.png",
      isDarkTheme: true,
      changing: false,
      projects: [
        {
          id: 1,
          title: "MMO RTS",
          imageLink: "/images/mmo-rts.png",
          description:
            "MMO RTS is a project that explores the intricacies of creating a massively multiplayer online real-time strategy game. The game represents a rich shared world, where players can build structures, train units, gather resources, and engage with others in combat. The backend of the game utilizes Node.js, Express, and Socket.IO, with Vue.js driving the frontend. Game state data is managed using MongoDB.",
          demoLink: "https://mmo-rts.com",
          gitHubLink: "https://github.com/waxeye7/mmo-rts",
        },
        {
          id: 2,
          title: "Periodic Table Viewer",
          imageLink: "/images/periodic-table.png",
          description:
            "The Periodic Table Viewer is one of my early projects, built with vanilla JavaScript. The application allows users to view and learn about all the elements of the periodic table. The application features an intuitive and user-friendly interface making it easy to interact with and learn from.",
          demoLink: "https://merlin.stemmer.yoobeestudent.net/filter/",
          gitHubLink: "https://github.com/waxeye7/Periodic-Table-Filter",
        },
        {
          id: 3,
          title: "TechSolutions",
          imageLink: "/images/techsolutions.png",
          description:
            "TechSolutions is the capstone project I completed at the end of my course at Yoobee. The website was built for a hypothetical client, 'TechSolutions', using the WordPress CMS. I created a custom theme for the site, allowing the client to easily add or remove specific posts as needed. This project showcases my understanding of content management systems and my ability to create a functional, customizable, and client-friendly website.",
          demoLink: "https://merlin.stemmer.yoobeestudent.net/techsolutions",
          gitHubLink: "https://github.com/waxeye7/techsolutions",
        },
        {
          id: 4,
          title: "TechSolutions",
          imageLink: "/images/techsolutions.png",
          description:
            "TechSolutions is the capstone project I completed at the end of my course at Yoobee. The website was built for a hypothetical client, 'TechSolutions', using the WordPress CMS. I created a custom theme for the site, allowing the client to easily add or remove specific posts as needed. This project showcases my understanding of content management systems and my ability to create a functional, customizable, and client-friendly website.",
          demoLink: "https://merlin.stemmer.yoobeestudent.net/techsolutions",
          gitHubLink: "https://github.com/waxeye7/techsolutions",
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
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.$refs.email.innerText)
        .then(() => {
          this.showCopyMsg = true;
          setTimeout(() => {
            this.showCopyMsg = false;
          }, 1200);
        })
        .catch((err) => {
          console.error("Failed to copy", err);
        });
    },
  },
  mounted() {
    document.body.setAttribute("data-theme", "dark");
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
  bottom: 32px;
  z-index: -1;
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
  padding: 24px 40px 140px;
  font-family: "Quicksand", Arial, sans-serif;
}

.introduction,
.skills,
.projects,
.achievements,
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
  font-weight: 600;
}
.high-width {
  max-width: 800px;
}
.high-width p {
  font-size: clamp(16px, 1.2vw, 18px);
  text-align: justify;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
}

@media (min-width: 900px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  border: 1px solid;
  padding: 14px;
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
  display: flex;
  justify-content: center;
}
.section-one-child {
  margin: 20px;
  flex-grow: 1;
  box-sizing: border-box;
}
.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 280px;
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
.img-of-me {
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-of-me img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.github-wrapper,
.repo-wrapper {
  display: flex;
  align-items: center;
}
.github-links {
  margin-top: 20px;
}

.github-wrapper a,
.repo-wrapper a {
  color: var(--link-color);
  display: flex;
}

.github {
  width: 40px;
  height: 40px;
  transition: transform ease-out 0.3s;
}
.github:hover {
  transform: scale(1.2);
}

.github-links h2 {
  margin-bottom: 20px;
}
.project-title {
  font-size: 32px;
  margin: 0 0 8px 0;
}
.project-image-wrapper {
  min-height: 240px;
  margin-bottom: 8px;
}
.project-image-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.contact {
  padding: 24px 24px 24px 0px;
}
.contact p {
  font-size: 18px;
  line-height: 1.6;
}
.icon {
  cursor: pointer;
  color: var(--link-color);
  width: 24px;
  height: 24px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
}

.message {
  color: var(--link-color);
  font-size: 1.5rem;
  font-weight: bold;
}

.subheading {
  font-size: 44px;
  margin: 14px 0 10px 0;
}
@media (max-width: 1250px) {
  .img-title {
    height: 210px;
  }
}
@media (max-width: 1150px) {
  .img-title {
    margin-top: 0;
    height: 150px;
  }
  .portfolio {
    padding-left: 8px;
    padding-right: 8px;
  }
}

@media (max-width: 900px) {
  .img-title {
    height: 125px;
  }
  .low-width p {
    font-size: clamp(16px, 1.2vw, 18px);
    text-align: left;
  }
}
@media (max-width: 800px) {
  .low-width {
    display: block;
  }
  .high-width {
    display: none;
  }
  .first-section {
    flex-direction: column;
  }

  .introduction,
  .img-of-me {
    max-width: 100%;
    max-height: 400px;
  }
  .introduction {
    margin-bottom: 20px;
  }
  .arrows {
    bottom: 30px;
  }
}
</style>
