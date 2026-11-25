<template>
  <footer class="border-t border-slate-900 bg-[#02040a] py-6 px-4 sm:px-8 text-xs text-slate-500 relative z-30">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <BrandLogo compact show-motto />
    </div>
  </footer>
</template>

<script setup>
import BrandLogo from '@/components/ui/BrandLogo.vue'
</script>
