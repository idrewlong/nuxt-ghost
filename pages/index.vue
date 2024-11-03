<script setup>
const { data: posts, pending, error } = useFetch("/api/posts");
</script>

<template>
  <div>
    <div class="hero flex flex-col justify-center items-center">
      <div class="container">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          modi. Maxime explicabo neque odio facilis.
        </p>
        <nuxt-link to="/contact" class="hire">Hire me</nuxt-link>
      </div>
    </div>

    <div class="container p-10">
      <main>
        <h2>Latest thoughts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image" />
            <div class="content flex flex-col">
              <nuxt-link class="text-xl" :to="{ path: post.slug }">{{
                post.title
              }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
              <span class="pt-2 text-xs">{{ post.authors[0].name }}</span>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>
