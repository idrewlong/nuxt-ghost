<template>
  <div class="container">
    <main>
      <h1>{{ page.title }}</h1>
      <div class="content">
        <div v-html="page.html"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
const {
  data: page,
  pending,
  error,
} = await useFetch("/api/page", {
  query: { slug: "about" },
  onResponseError({ response }) {
    throw createError({
      statusCode: response.status,
      message: response.statusText || "Failed to load page",
    });
  },
  transform: (response) => {
    if (!response) {
      throw createError({
        statusCode: 404,
        message: "Page not found",
      });
    }
    return response;
  },
});
</script>

<!-- <style>
header {
  height: 15em;
}

h1 {
  color: white;
  margin-bottom: 1em;
}

.content {
  background: white;
  border-radius: 1em;
  padding: 1em;
}

main {
  margin-top: -9em;
}

.content img {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .content {
    padding: 2em;
  }
}
</style> -->
