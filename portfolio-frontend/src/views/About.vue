<template>
  <div class="homepage">
    <section class="introduction section1">
      <h1>Welcome to my Portfolio</h1>
      <p>
        Hi, I'm Merlin Stemmer, a passionate web developer with a love for
        coding and creating stunning websites. With a strong foundation in
        front-end and back-end development, I strive to deliver exceptional user
        experiences.
      </p>
    </section>

    <section class="skills section2">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Mongo</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
    </section>

    <section class="featured-projects section1">
      <h2>Featured Projects</h2>
      <div class="project-card">
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl
          sed augue tristique viverra a id quam.
        </p>
        <a href="#" class="demo-link">View Demo</a>
      </div>
      <div class="project-card">
        <img src="project2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>
          Nullam quis mi semper, ullamcorper risus sed, lacinia sem. Fusce
          ullamcorper, tortor nec blandit consequat.
        </p>
        <a href="#" class="demo-link">View Demo</a>
      </div>
    </section>

    <section class="testimonials section2">
      <h2>Testimonials</h2>
      <div class="testimonial">
        <p>
          "Merlin is an incredibly talented web developer. His attention to
          detail and ability to create beautiful designs truly sets him apart."
        </p>
        <p class="author">John Doe, CEO of Company XYZ</p>
      </div>
      <div class="testimonial">
        <p>
          "Working with Merlin was a pleasure. His technical skills and
          professionalism exceeded our expectations. Highly recommended!"
        </p>
        <p class="author">Jane Smith, Project Manager</p>
      </div>
    </section>

    <section class="achievements section1">
      <h2>Achievements and Certifications</h2>
      <ul>
        <li>Completed Advanced Web Development Course</li>
        <li>Winner of Web Design Competition</li>
        <li>Certified JavaScript Developer</li>
      </ul>
    </section>

    <section class="contact section2">
      <h2>Get in Touch</h2>
      <p>
        I'm currently available for new opportunities. If you have any
        questions, inquiries, or would like to discuss a project, feel free to
        reach out to me using the contact form below or via email at
        <a href="mailto:contact@merlinstemmer.com">contact@merlinstemmer.com</a
        >.
      </p>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  background-color: #2d2d2d;
  color: #fff;
  padding: 20px;
}

.section1 {
  background-color: #393939;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.section2 {
  background-color: #323232;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

h1,
h2,
h3 {
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.project-card {
  background-color: #3d3d3d;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonial {
  background-color: #3d3d3d;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-link {
  display: inline-block;
  background-color: #ff5b8f;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.demo-link:hover {
  background-color: #ff2d6f;
}

.author {
  color: #aaa;
  margin-top: 10px;
}
</style>
