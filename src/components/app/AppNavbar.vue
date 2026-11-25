<template>
  <header class="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 flex justify-center pointer-events-none">
    <div
      class="pointer-events-auto w-full max-w-6xl rounded-full dock-glass px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 shadow-[0_12px_45px_rgba(37,99,235,0.25),0_0_0_1px_rgba(56,189,248,0.22)] transition-all duration-300"
    >
      <!-- Brand Logo: TRIVÉA -->
      <RouterLink to="/" class="shrink-0 focus:outline-none">
        <BrandLogo :show-motto="false" />
      </RouterLink>

      <!-- Center Pill Navigation -->
      <nav
        class="flex items-center gap-1 bg-[#0b1229]/90 border border-slate-800/90 rounded-full p-1 shadow-inner overflow-x-auto"
      >
        <RouterLink
          to="/"
          class="px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white shadow-md shadow-blue-600/30 transition"
        >
          <Compass class="w-3.5 h-3.5 shrink-0" /> Beranda
        </RouterLink>

        <button
          v-for="item in previewNavItems"
          :key="item.label"
          type="button"
          aria-disabled="true"
          tabindex="-1"
          class="group px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap text-slate-300 border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-blue-600/25 hover:via-indigo-600/25 hover:to-pink-600/25 hover:border-sky-400/30 hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] transition-all duration-300 cursor-not-allowed select-none"
          @click.prevent
        >
          <component
            :is="item.icon"
            class="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-sky-300 group-hover:scale-110 transition-all duration-300"
          />
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <!-- Right CTA Button (Interactive Hover Only, Non-Clickable) -->
      <button
        type="button"
        aria-disabled="true"
        tabindex="-1"
        class="hidden sm:inline-flex shrink-0 items-center justify-center px-5 py-2 rounded-full text-xs font-bold text-white whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 shadow-lg shadow-blue-600/25 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] transition-all duration-300 cursor-not-allowed select-none"
        @click.prevent
      >
        Hubungi Kami
      </button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Compass, Users, Briefcase, Mail } from 'lucide-vue-next'
import BrandLogo from '@/components/ui/BrandLogo.vue'

const previewNavItems = [
  { label: 'Tentang Tim', icon: Users },
  { label: 'Portfolio', icon: Briefcase },
  { label: 'Kontak', icon: Mail }
]
</script>
