<script setup lang="ts">
useHead({
  title: "Mike's Life",
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    { name: 'description', content: 'One tap to everything Mike built.' },
    { name: 'theme-color', content: '#2f6bff' },
  ],
  link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
})
</script>

<template>
  <NuxtPage />
</template>
