<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "Description of project 1",
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description of project 2",
        },
        // Add more projects here
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  /* Add your styling for the projects section here */
}

.project {
  /* Add your styling for each project here */
}
</style>
