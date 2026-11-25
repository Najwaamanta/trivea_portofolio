import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import najwaPhoto from '@/assets/images/najwa.png'
import syepriaPhoto from '@/assets/images/syepria.png'
import auliaPhoto from '@/assets/images/aulia.png'

export const useTeamStore = defineStore('team', () => {
  const defaultHeadline =
    import.meta.env.VITE_APP_TAGLINE || 'THREE • VISION • EXCELLENCE • AMBITION'

  const teamMembers = ref([
    {
      id: 0,
      slot: 'Left Wing',
      badge: '01',
      name: 'Najwa Azzahra Amanta',
      nim: '102042330133',
      role: 'Frontend & System Analyst',
      photo: najwaPhoto,
      haloGradient: 'from-sky-400/40 via-blue-500/20 to-transparent',
      accentDot: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]'
    },
    {
      id: 1,
      slot: 'Center Lead',
      badge: '02',
      name: 'Syepria Bilqiis Yosya',
      nim: '102042300139',
      role: 'Frontend & System Architect',
      photo: syepriaPhoto,
      haloGradient: 'from-purple-400/40 via-pink-500/25 to-transparent',
      accentDot: 'bg-pink-400 shadow-[0_0_8px_#f43f5e]'
    },
    {
      id: 2,
      slot: 'Right Wing',
      badge: '03',
      name: 'Aulia Rahmatika',
      nim: '102042330078',
      role: 'System Analyst',
      photo: auliaPhoto,
      haloGradient: 'from-rose-500/40 via-pink-500/20 to-transparent',
      accentDot: 'bg-violet-400 shadow-[0_0_8px_#a78bfa]'
    }
  ])

  const activeIndex = ref(1)
  const hoveredIndex = ref(null)

  const activeMember = computed(() => teamMembers.value[activeIndex.value])

  const activeSubHeadline = computed(() => {
    const idx = hoveredIndex.value !== null ? hoveredIndex.value : null
    if (idx !== null && teamMembers.value[idx]) {
      const member = teamMembers.value[idx]
      return `${member.name.toUpperCase()} (${member.nim}) — ${member.role.toUpperCase()}`
    }
    return defaultHeadline
  })

  function getMemberPosition(index) {
    const total = teamMembers.value.length
    const diff = (index - activeIndex.value + total) % total
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    return 'left'
  }

  function selectMember(index) {
    const total = teamMembers.value.length
    activeIndex.value = ((index % total) + total) % total
  }

  function nextMember() {
    selectMember(activeIndex.value + 1)
  }

  function prevMember() {
    selectMember(activeIndex.value - 1)
  }

  function setHoveredMember(idx) {
    hoveredIndex.value = idx
  }

  function clearHoveredMember() {
    hoveredIndex.value = null
  }

  return {
    defaultHeadline,
    teamMembers,
    activeIndex,
    activeMember,
    activeSubHeadline,
    getMemberPosition,
    selectMember,
    nextMember,
    prevMember,
    setHoveredMember,
    clearHoveredMember
  }
})
