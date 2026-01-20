<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-graphics">
    <div class="geo-square sq-1"></div><div class="geo-outline sq-2"></div>
    <div class="geo-square sq-3"></div><div class="geo-square sq-4"></div>
    <div class="geo-outline sq-5"></div><div class="geo-square sq-6"></div>
    <div class="geo-outline sq-7"></div><div class="geo-square sq-8"></div>
    <div class="geo-outline sq-9"></div><div class="geo-square sq-10"></div>
    <div class="geo-outline sq-11"></div><div class="geo-square sq-12"></div>
    <div class="geo-outline sq-13"></div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold" href="#about">TOPH</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tophNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="tophNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                <li class="nav-item"><a class="nav-link" href="#experience">IT Experience</a></li>
                <li class="nav-item"><a class="nav-link" href="#organizations">Organizations</a></li>
                <li class="nav-item"><a class="nav-link" href="#hobbies">Hobbies</a></li>
                <li class="nav-item"><a class="nav-link" href="#goals">Goals</a></li>
                <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
            </ul>
        </div>
    </div>
  </nav>

  <RouterView />

  <footer class="text-center py-5 border-top">
    <a href="https://docs.google.com/document/d/1m7ysriZaP5wH4BobJH__W5WlqaFE7K2hT3K-bvIZdFE/edit?usp=sharing" target="_blank" class="footer-link">
        Personal Website References
    </a>
  </footer>
</template>