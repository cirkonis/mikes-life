<script setup lang="ts">
/**
 * Ordered by how often Mike actually opens them, not alphabetically.
 * Each gradient starts from that app's real brand colour so the card is
 * recognisable at a glance, then reaches toward a neighbouring hue to keep
 * the page reading as a rainbow.
 */
const apps = [
  {
    name: 'Mikes Macros',
    tagline: 'Calories and macros, logged by hand',
    url: 'https://mikesmacros.vercel.app/',
    cadence: 'Daily',
    emoji: '🥗',
    from: '#2f6bff',
    to: '#00c2d1',
  },
  {
    name: 'Mikes Finances',
    tagline: 'What is in the bank and what is still owed',
    url: 'https://mikes-finances.vercel.app/',
    cadence: 'Weekly',
    emoji: '💰',
    from: '#ff5f8f',
    to: '#ff9a4a',
  },
  {
    name: 'Mikes Shamisen',
    tagline: 'Shamisen tabs, written down and saved',
    url: 'https://mikes-shamisen.vercel.app/',
    cadence: 'Practice',
    emoji: '🪕',
    from: '#6a439b',
    to: '#4c55bc',
  },
  {
    name: "Olivia's Yahtzee",
    tagline: 'The score sheet, made for thumbs',
    url: 'https://olivias-yahtzee.vercel.app/',
    cadence: 'Game nights',
    emoji: '🎲',
    from: '#d6202a',
    to: '#7a0f16',
    accent: '#f5d327',
  },
  {
    name: 'Drunk Chicken Hunt',
    tagline: 'Find them before the money runs out',
    url: 'https://chicken-hunt.com/',
    cadence: 'Bar nights',
    emoji: '🐔',
    from: '#d35400',
    to: '#f9ca24',
  },
  {
    name: 'Bella Center Bullies',
    tagline: 'Steel boules and the odd argument about who is closest',
    url: 'https://bouledogs.com/',
    cadence: 'Pétanque',
    emoji: '🐶',
    from: '#d3517e',
    to: '#a855f7',
  },
]
</script>

<template>
  <div class="relative min-h-dvh overflow-hidden">
    <!-- Drifting colour behind everything -->
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10">
      <div class="blob size-72 bg-[#2f6bff]" style="top: -4rem; left: -3rem" />
      <div class="blob size-72 bg-[#f9ca24]" style="top: 20%; right: -4rem; animation-delay: -4s" />
      <div class="blob size-72 bg-[#ff5f8f]" style="bottom: 12%; left: -4rem; animation-delay: -8s" />
      <div class="blob size-72 bg-[#a855f7]" style="bottom: -4rem; right: -2rem; animation-delay: -12s" />
    </div>

    <main class="mx-auto w-full max-w-2xl px-5 pt-14 pb-16">
      <header class="mb-9 text-center">
        <h1 class="rainbow-text text-5xl font-black tracking-tight sm:text-6xl">
          Mike's Life
        </h1>
        <p class="mt-3 text-base font-medium" style="color: var(--ink-soft)">
          Everything I built, one tap away.
        </p>
      </header>

      <div class="grid gap-4 sm:grid-cols-2">
        <AppCard v-for="app in apps" :key="app.url" v-bind="app" />
      </div>

      <p class="mt-10 text-center text-xs font-medium" style="color: var(--ink-soft)">
        Every card opens in a new tab.
      </p>
    </main>
  </div>
</template>
