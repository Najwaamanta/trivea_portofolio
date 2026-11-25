<template>
  <div
    role="button"
    tabindex="0"
    :aria-label="
      isCenter
        ? `${member.name} sedang aktif di tengah`
        : `Tampilkan ${member.name} ke tengah`
    "
    :aria-pressed="isCenter"
    :class="[
      'carousel-item-3d group flex flex-col items-center cursor-pointer focus:outline-none',
      'w-[215px] sm:w-[300px] md:w-[340px]',
      positionClass
    ]"
    @mouseenter="$emit('hover')"
    @mouseleave="$emit('leave')"
    @click="$emit('select')"
    @keydown.enter.prevent="$emit('select')"
    @keydown.space.prevent="$emit('select')"
  >
    <!-- Ambient Studio Rim Halo Behind Portrait -->
    <div
      :class="[
        'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] h-[74%] rounded-full blur-3xl transition-opacity duration-500 z-10 bg-gradient-to-b',
        member.haloGradient,
        isCenter ? 'opacity-95 group-hover:opacity-100' : 'opacity-45 group-hover:opacity-80'
      ]"
    ></div>

    <!-- Ground Pedestal Glow Ring -->
    <div
      :class="[
        'figure-pedestal-glow transition-all duration-500',
        isCenter ? 'opacity-100 scale-110' : 'opacity-45 scale-90 group-hover:opacity-75'
      ]"
    ></div>

    <!-- Member Cutout Photo -->
    <div
      class="relative z-20 w-full h-[275px] sm:h-[375px] md:h-[430px] flex items-end justify-center overflow-visible"
    >
      <img
        :src="member.photo"
        :alt="member.name"
        draggable="false"
        class="member-photo-fade h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] select-none pointer-events-none"
      />
    </div>

    <!-- Floating Member HUD Card: Vertical layout (Nama, NIM, dan Role di bawahnya) -->
    <div
      :class="[
        'absolute -bottom-8 sm:-bottom-6 z-30 transition-all duration-500 pointer-events-none w-max max-w-[210px] sm:max-w-[265px]',
        isCenter
          ? 'opacity-100 scale-100 group-hover:-translate-y-1.5'
          : 'opacity-85 scale-95 group-hover:opacity-100 group-hover:-translate-y-1'
      ]"
    >
      <div
        :class="[
          'px-3 sm:px-4 py-2 rounded-xl bg-slate-950/95 backdrop-blur-md shadow-[0_10px_28px_rgba(0,0,0,0.88)] flex flex-col items-center text-center gap-0.5 border transition-colors duration-300',
          isCenter
            ? 'border-pink-400/65 shadow-[0_0_24px_rgba(236,72,153,0.22),0_10px_28px_rgba(0,0,0,0.9)]'
            : 'border-sky-400/30 group-hover:border-sky-400/60'
        ]"
      >
        <!-- Baris 1: Indicator Dot + Nama Lengkap -->
        <div class="flex items-center gap-1.5">
          <span
            :class="[
              'w-2 h-2 rounded-full shrink-0 transition-transform duration-300',
              isCenter ? 'bg-pink-400 shadow-[0_0_10px_#f43f5e] scale-110' : member.accentDot
            ]"
          ></span>
          <span class="text-[11px] sm:text-xs font-mono font-bold text-white tracking-tight leading-tight">
            {{ member.name }}
          </span>
        </div>
        <!-- Baris 2: NIM -->
        <span class="text-[10px] font-mono text-slate-400 leading-tight">{{ member.nim }}</span>
        <!-- Baris 3: Role (Di Bawah Nama & NIM) -->
        <span
          :class="[
            'text-[9.5px] font-mono font-medium leading-tight mt-0.5',
            isCenter ? 'text-sky-300' : 'text-sky-300/80'
          ]"
        >
          {{ member.role }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  member: {
    type: Object,
    required: true
  },
  position: {
    type: String,
    default: 'center',
    validator: (val) => ['left', 'center', 'right'].includes(val)
  }
})

defineEmits(['hover', 'leave', 'select'])

const isCenter = computed(() => props.position === 'center')

const positionClass = computed(() => {
  if (props.position === 'left') return 'carousel-pos-left'
  if (props.position === 'right') return 'carousel-pos-right'
  return 'carousel-pos-center'
})
</script>
