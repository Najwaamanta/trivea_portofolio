<template>
  <div class="min-h-screen bg-[#030612] text-[#f4f6fb] relative overflow-x-hidden">
    <!-- Floating Navbar -->
    <AppNavbar />

    <!-- Main View Content -->
    <main>
      <slot />
    </main>

    <!-- Clean Footer with Official TRIVÉA Motto -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/app/AppNavbar.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>
