<template>
  <div v-if="compact" class="flex items-center gap-1.5">
    <span class="font-display font-black text-white">TRIV</span>
    <span class="font-display font-black bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
      ÉA
    </span>
    <span v-if="showMotto">— Three • Vision • Excellence • Ambition</span>
  </div>

  <div v-else class="flex items-center gap-3 group">
    <div
      class="relative w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 via-blue-600 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/35 group-hover:shadow-pink-500/40 transition duration-300"
    >
      <Sparkles class="w-4 h-4 text-white animate-pulse" />
      <span
        class="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 to-pink-500 opacity-0 group-hover:opacity-40 blur transition duration-300"
      ></span>
    </div>
    <div class="leading-tight">
      <div class="flex items-center tracking-tight">
        <span class="font-display font-black text-base sm:text-lg tracking-tight text-white">
          TRIV
        </span>
        <span
          class="font-display font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400 bg-clip-text text-transparent"
        >
          ÉA
        </span>
      </div>
      <span
        v-if="showMotto"
        class="block text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.22em] text-slate-400 group-hover:text-sky-300 transition-colors"
      >
        THREE • VISION • EXCELLENCE • AMBITION
      </span>
    </div>
  </div>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next'

defineProps({
  compact: {
    type: Boolean,
    default: false
  },
  showMotto: {
    type: Boolean,
    default: true
  }
})
</script>
