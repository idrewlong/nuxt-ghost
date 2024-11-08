<template>
  <div class="container">
    <main>
      <!-- Show loading state -->
      <div v-if="pending" class="py-8">
        <p>Loading...</p>
      </div>

      <!-- Show error state -->
      <div v-else-if="error" class="py-8">
        <p class="text-red-500">{{ error.message }}</p>
      </div>

      <!-- Show post content -->
      <template v-else-if="post">
        <h1 class="text-3xl font-bold mb-6">{{ post.title }}</h1>
        <div class="content prose prose-lg">
          <div v-html="post.html"></div>
        </div>
      </template>
    </main>
  </div>
</template>

<script setup>
const route = useRoute();

const {
  data: post,
  pending,
  error,
} = await useFetch(`/api/singlepost`, {
  query: {
    slug: route.params.slug,
  },
  onResponseError({ response }) {
    throw createError({
      statusCode: response.status,
      message: response.statusText || "Failed to load post",
    });
  },

  transform: (response) => {
    if (!response) {
      throw createError({
        statusCode: 404,
        message: "Post not found",
      });
    }
    return response;
  },
});
</script>

<!-- <style lang="scss">
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
