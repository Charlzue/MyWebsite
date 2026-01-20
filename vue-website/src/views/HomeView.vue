<script setup>
import Gallery from '../components/Gallery.vue' 
</script>

<template>
  <header id="about" class="toph-section">
      <div class="toph-container">
          <img src="/assets/img/toph.png" class="toph-portrait" alt="Portrait of Charl Christopher Peñada">
          <div class="toph-card charl-card">
              <h1 class="main-title">Hello, I'm <span class="accent-orange">Toph</span>!</h1>
              <h2 class="sub-title">Charl Christopher M. Peñada</h2>
              <p class="description">
                  Currently a Computer Science student at Asia Pacific College specializing in Cybersecurity and Forensics, I focus on the vital intersection of technical innovation and strategic leadership. As the President of JPCS-APC, I have established myself as a resilient leader dedicated to executing high-quality initiatives for both the Asia Pacific College and tech community.
              </p>
              <p class="description">
                  I am eager to connect with like-minded professionals to explore tech leadership opportunities, a journey I am proud to share alongside my fiancé, Angelo Laus.
              </p>
              <div class="toph-socials">
                  <a href="https://www.linkedin.com/in/charlchristopher/" target="_blank" class="btn btn-dark btn-sm">LinkedIn</a>
                  <a href="https://www.facebook.com/profile.php?id=61564078963901" target="_blank" class="btn btn-dark btn-sm">Facebook</a>
                  <a href="https://www.instagram.com/charl_christopher/" target="_blank" class="btn btn-dark btn-sm">Instagram</a>
              </div>
          </div>
      </div>
  </header>

  <main class="container">
    <section id="education" class="details-section">
        <h3 class="section-label">🎓 Education</h3>
        </section>

    <section id="experience" class="details-section">
        <h3 class="section-label">💻 IT Experience</h3>
        </section>

    <section id="organizations" class="details-section">
        <h3 class="section-label">🤝 Organizations</h3>
        </section>

    <section id="hobbies" class="details-section">
        <h3 class="section-label">✨ Hobbies</h3>
        <div class="hobbies-wrap">
            <span class="hobby-pill">📢 Student Leadership</span>
            <span class="hobby-pill">🤝 Events Volunteering</span>
            <span class="hobby-pill">💻 Tech & Leadership Events</span>
            <span class="hobby-pill">👕 Thrifting</span>
            <span class="hobby-pill">🎬 Movies & Series</span>
            <span class="hobby-pill">🚶 Walking</span>
        </div>
    </section>

    <section id="goals" class="details-section">
        <h3 class="section-label">🎯 Goals</h3>
        </section>

    <section id="gallery" class="details-section pb-5">
       <h3 class="section-label">Gallery</h3>
       <Gallery />
    </section>
    
  </main>
</template>