<template>
  <div class="relative z-30 hero-bottom-vignette pt-4 pb-4 px-4 sm:px-8">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
      <!-- Left: 3D Stage Reset Button & Status -->
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="w-8 h-8 rounded-full bg-slate-900 border border-sky-500/40 hover:border-pink-400 flex items-center justify-center text-xs font-display font-black text-sky-300 hover:text-white shadow-lg transition"
          title="Reset Sudut Pandang 3D"
          @click="$emit('reset')"
        >
          3D
        </button>
        <div class="text-xs text-slate-300">
          <span class="text-white font-semibold">TRIVÉA 3D Stage</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['reset'])
</script>
