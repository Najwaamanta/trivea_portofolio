<template>
  <section
    id="home"
    ref="heroRef"
    class="relative min-h-screen pt-20 sm:pt-24 pb-4 flex flex-col justify-between hero-studio-backdrop overflow-hidden select-none"
    @mousemove="handleMouseMove"
    @touchmove="handleTouchMove"
  >
    <!-- Three.js WebGL 3D Background Canvas -->
    <canvas ref="threeCanvasRef" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

    <!-- 3D Perspective Horizon Grid Floor -->
    <div class="stage-perspective-floor"></div>

    <!-- CENTER 3D STAGE: GIANT "TRIVÉA" STRICTLY BEHIND THE 3D TEAM CAROUSEL -->
    <div
      class="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-8 my-auto stage-3d-wrapper py-2 sm:py-4"
    >
      <div class="relative w-full flex flex-col items-center justify-center stage-3d-inner py-2 sm:py-4">
        <!-- LAYER 1 (STRICTLY BEHIND FIGURES, z-index: 5): Giant Typography & Cosmic Backlight Halo -->
        <div
          class="layer-bg-text absolute inset-x-0 top-[2%] sm:top-[4%] flex flex-col items-center justify-start pointer-events-none px-2"
        >
          <!-- Architecture Subheadline Badge -->
          <StatusBadge variant="subheadline">
            <p class="text-[9px] sm:text-xs font-mono uppercase tracking-[0.32em] text-sky-300 font-semibold text-center">
              {{ activeSubHeadline }}
            </p>
          </StatusBadge>

          <!-- Giant Typography Container with Ambient Bloom Halo -->
          <div class="relative w-full flex justify-center items-center">
            <div class="giant-title-halo"></div>
            <h1 class="hero-giant-title text-[18vw] sm:text-[14vw] lg:text-[160px] text-center whitespace-nowrap">
              TRIVÉA
            </h1>
          </div>
        </div>

        <!-- LAYER 2 (STRICTLY IN FRONT OF TEXT, z-index: 25): 3D DEPTH / COVERFLOW CAROUSEL -->
        <div class="layer-fg-figures relative w-full max-w-5xl pt-20 sm:pt-28 md:pt-32 flex flex-col items-center">
          <!-- Interactive Carousel Stage (Supports Click, Drag/Swipe, Prev/Next & 5s Auto-Rotate) -->
          <div
            class="carousel-depth-stage relative w-full h-[300px] sm:h-[400px] md:h-[455px] touch-pan-y cursor-grab active:cursor-grabbing"
            @mouseenter="pauseAutoRotate"
            @mouseleave="resumeAutoRotate"
            @pointerdown="onDragStart"
            @pointerup="onDragEnd"
            @pointercancel="onDragCancel"
          >
            <!-- Previous Button -->
            <button
              type="button"
              aria-label="Anggota tim sebelumnya"
              class="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full dock-glass flex items-center justify-center text-sky-300 hover:text-white hover:border-sky-400/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
              @pointerdown.stop
              @click.stop="handlePrev"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>

            <!-- 3 Team Member Figures Orbiting in 3D Depth -->
            <TeamMemberFigure
              v-for="(member, idx) in teamMembers"
              :key="member.id"
              :member="member"
              :position="teamStore.getMemberPosition(idx)"
              @hover="teamStore.setHoveredMember(idx)"
              @leave="teamStore.clearHoveredMember()"
              @select="onMemberSelect(idx)"
            />

            <!-- Next Button -->
            <button
              type="button"
              aria-label="Anggota tim berikutnya"
              class="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full dock-glass flex items-center justify-center text-pink-300 hover:text-white hover:border-pink-400/60 hover:shadow-[0_0_24px_rgba(236,72,153,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
              @pointerdown.stop
              @click.stop="handleNext"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Hero Overlay Bar & Interactive Telemetry -->
    <StageTelemetryBar @reset="reset3DCamera" />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useTeamStore } from '@/stores/team'
import { useParallax3D } from '@/composables/useParallax3D'
import { useThreeCosmicScene } from '@/composables/useThreeCosmicScene'
import StatusBadge from '@/components/ui/StatusBadge.vue'
import TeamMemberFigure from '@/components/team/TeamMemberFigure.vue'
import StageTelemetryBar from '@/components/team/StageTelemetryBar.vue'

const heroRef = ref(null)
const threeCanvasRef = ref(null)

const teamStore = useTeamStore()
const { teamMembers, activeSubHeadline } = storeToRefs(teamStore)

const { mouseTarget, handleMouseMove, handleTouchMove, reset3DCamera } = useParallax3D(heroRef)
useThreeCosmicScene(threeCanvasRef, mouseTarget)

const AUTO_ROTATE_MS = 3000
let autoRotateTimer = null
let isPausedByHover = false

function stopAutoRotate() {
  if (autoRotateTimer !== null) {
    clearInterval(autoRotateTimer)
    autoRotateTimer = null
  }
}

function startAutoRotate() {
  stopAutoRotate()
  if (isPausedByHover || document.hidden) return
  autoRotateTimer = setInterval(() => {
    teamStore.nextMember()
  }, AUTO_ROTATE_MS)
}

function pauseAutoRotate() {
  isPausedByHover = true
  stopAutoRotate()
}

function resumeAutoRotate() {
  isPausedByHover = false
  startAutoRotate()
}

function handlePrev() {
  teamStore.prevMember()
  startAutoRotate()
}

function handleNext() {
  teamStore.nextMember()
  startAutoRotate()
}

function handleSelect(idx) {
  teamStore.selectMember(idx)
  startAutoRotate()
}

let dragStartX = null
let suppressNextClick = false

function onDragStart(e) {
  if (e.button !== undefined && e.button !== 0) return
  dragStartX = e.clientX
  suppressNextClick = false
}

function onDragEnd(e) {
  if (dragStartX === null) return
  const deltaX = e.clientX - dragStartX
  dragStartX = null

  if (Math.abs(deltaX) >= 45) {
    suppressNextClick = true
    if (deltaX < 0) {
      handleNext()
    } else {
      handlePrev()
    }
    setTimeout(() => {
      suppressNextClick = false
    }, 80)
  }
}

function onDragCancel() {
  dragStartX = null
}

function onMemberSelect(idx) {
  if (suppressNextClick) return
  handleSelect(idx)
}

function handleKeydown(e) {
  const tag = e.target?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
  if (e.key === 'ArrowLeft') {
    handlePrev()
  } else if (e.key === 'ArrowRight') {
    handleNext()
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    stopAutoRotate()
  } else {
    startAutoRotate()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  startAutoRotate()
})

onBeforeUnmount(() => {
  stopAutoRotate()
  window.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>
