<template>
  <div :class="containerClass">
    <span :class="dotClass"></span>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary' // 'primary' | 'secondary' | 'subheadline'
  }
})

const containerClass = computed(() => {
  if (props.variant === 'secondary') {
    return 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-sky-300 bg-slate-900/80 border border-sky-500/20 backdrop-blur-md'
  }
  if (props.variant === 'subheadline') {
    return 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-sky-400/25 backdrop-blur-sm mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
  }
  return 'inline-flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-md border border-sky-500/30 shadow-[0_0_20px_rgba(56,189,248,0.18)] rounded-full px-4 py-1.5'
})

const dotClass = computed(() => {
  if (props.variant === 'secondary') {
    return 'w-1.5 h-1.5 rounded-full bg-sky-400'
  }
  if (props.variant === 'subheadline') {
    return 'w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse'
  }
  return 'w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-pink-500 animate-ping'
})
</script>
