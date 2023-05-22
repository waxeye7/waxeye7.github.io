<template>
  <div class="projects">
    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        @click="openModal(project)"
      >
        <div class="inside-image-on-hover">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <div class="project-card-inner">
          <div class="project-card-front">
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedProject" class="modal" @click="selectedProject = null">
      <div v-on:click.stop class="modal-content">
        <h3>{{ selectedProject.title }}</h3>
        <p>{{ selectedProject.description }}</p>
        <div target="_blank" class="modal-link">View More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          image: "https://i.ibb.co/ZN8pvwb/00502-2828786513.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl sed augue tristique viverra a id quam.",
          demoLink: "https://ibb.co/qxs3h42",
        },
        {
          id: 2,
          title: "Project 2",
          image: "https://i.ibb.co/8KYjKtH/00000-933350867.png",
          description:
            "Nullam quis mi semper, ullamcorper risus sed, lacinia sem. Fusce ullamcorper, tortor nec blandit consequat.",
          demoLink: "https://example.com/project2-demo",
        },
        {
          id: 3,
          title: "Project 3",
          image: "https://i.ibb.co/NZGQ8DG/00018-562481647.png",
          description:
            "Suspendisse vel mauris sit amet urna pharetra eleifend. Morbi quis consectetur risus, eget rhoncus nulla.",
          demoLink: "https://example.com/project3-demo",
        },
        {
          id: 4,
          title: "Project 4",
          image: "https://i.ibb.co/yyrgQVk/00033-2359661398.png",
          description:
            "Suspendisse vel mauris sit amet urna pharetra eleifend. Morbi quis consectetur risus, eget rhoncus nulla.",
          demoLink: "https://example.com/project3-demo",
        },
        {
          id: 5,
          title: "Project 5",
          image: "https://i.ibb.co/D7ywPgk/00021-915916729.png",
          description:
            "Suspendisse vel mauris sit amet urna pharetra eleifend. Morbi quis consectetur risus, eget rhoncus nulla.",
          demoLink: "https://example.com/project3-demo",
        },
        {
          id: 6,
          title: "Project 6",
          image: "https://i.ibb.co/XD1sZQS/00008-2854471624.png",
          description:
            "Suspendisse vel mauris sit amet urna pharetra eleifend. Morbi quis consectetur risus, eget rhoncus nulla.",
          demoLink: "https://example.com/project3-demo",
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
.projects {
  background-color: #212121; /* Secondary Color: Charcoal Gray */
  padding: 20px;
  color: #e8e8e8; /* Primary Color: Light Gray */
  margin: 0 auto;
  max-width: 1000px;
}

.projects h2 {
  text-align: center;
  margin-bottom: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;
}

.project-card {
  position: relative;
  cursor: pointer;
}

.project-card-inner {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover .project-card-inner {
  transform: scale(1.075);
  overflow: normal;
  border-radius: 0px !important;
}

.project-card-inner:hover {
  overflow: hidden;
}

.project-card-front,
.project-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.project-card-front {
  opacity: 1;
}

.project-card-back {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.project-card:hover .project-card-front {
  opacity: 0;
}

.project-card:hover > .inside-image-on-hover {
  opacity: 1 !important;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.project-info {
  margin-bottom: 10px;
}

.project-title {
  font-size: 18px;
}

.project-description {
  font-size: 14px;
}

.demo-link-text {
  color: #ffffff;
  font-size: 16px;
  padding: 8px 16px;
  background-color: #ff4081; /* Accent Color: Pink */
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.demo-link-text:hover {
  background-color: #ff6098; /* Lighter Shade of Accent Color: Pink */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
}
.modal-content {
  z-index: 3;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal h3 {
  margin-top: 0;
  color: #333333;
}

.modal-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
}

.modal-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff4081; /* Accent Color: Pink */
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.modal-link:hover {
  background-color: #ff6098; /* Lighter Shade of Accent Color: Pink */
}
.inside-image-on-hover {
  position: absolute;
  opacity: 0;
}
</style>
