<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  name: string
  tagline: string
  url: string
  /** How often he actually reaches for it — the reason for the ordering. */
  cadence: string
  emoji: string
  /** Two stops rooted in that app's real brand colour. */
  from: string
  to: string
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block overflow-hidden rounded-3xl p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
    :style="{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }"
  >
    <!-- Keeps white text legible over the lighter end of every gradient. -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/5 to-transparent" />

    <!-- Oversized watermark, drifts on hover -->
    <span
      aria-hidden="true"
      class="pointer-events-none absolute -right-4 -bottom-6 text-8xl opacity-20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
    >{{ emoji }}</span>

    <div class="relative flex items-start gap-4">
      <span
        aria-hidden="true"
        class="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/25 text-3xl backdrop-blur-sm"
      >{{ emoji }}</span>

      <div class="min-w-0 flex-1 pt-0.5">
        <h2 class="text-xl leading-tight font-extrabold text-white drop-shadow-sm">{{ name }}</h2>
        <p class="mt-1 text-sm font-medium text-white/85">{{ tagline }}</p>
        <span class="mt-3 inline-block rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase backdrop-blur-sm">
          {{ cadence }}
        </span>
      </div>

      <ArrowUpRight
        class="size-6 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
      />
    </div>
  </a>
</template>
