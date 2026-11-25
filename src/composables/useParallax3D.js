import { onMounted, onBeforeUnmount } from 'vue'

export function useParallax3D(containerRef) {
  const mouseTarget = { x: 0, y: 0 }
  let currentMouseX = 0
  let currentMouseY = 0
  let parallaxAnimationId = null

  function handleMouseMove(e) {
    if (!containerRef.value) return
    const rect = containerRef.value.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    mouseTarget.x = Math.max(-0.5, Math.min(0.5, nx))
    mouseTarget.y = Math.max(-0.5, Math.min(0.5, ny))

    const spotX = Math.round((mouseTarget.x + 0.5) * 100) + '%'
    const spotY = Math.round((mouseTarget.y + 0.5) * 100) + '%'
    document.documentElement.style.setProperty('--spot-x', spotX)
    document.documentElement.style.setProperty('--spot-y', spotY)
  }

  function handleTouchMove(e) {
    if (!containerRef.value || !e.touches || !e.touches[0]) return
    const rect = containerRef.value.getBoundingClientRect()
    const nx = (e.touches[0].clientX - rect.left) / rect.width - 0.5
    const ny = (e.touches[0].clientY - rect.top) / rect.height - 0.5
    mouseTarget.x = Math.max(-0.5, Math.min(0.5, nx))
    mouseTarget.y = Math.max(-0.5, Math.min(0.5, ny))
  }

  function reset3DCamera() {
    mouseTarget.x = 0
    mouseTarget.y = 0
    currentMouseX = 0
    currentMouseY = 0
    document.documentElement.style.setProperty('--rx', '0deg')
    document.documentElement.style.setProperty('--ry', '0deg')
    document.documentElement.style.setProperty('--mx', '0px')
    document.documentElement.style.setProperty('--my', '0px')
    document.documentElement.style.setProperty('--spot-x', '50%')
    document.documentElement.style.setProperty('--spot-y', '44%')
  }

  function startParallaxLoop() {
    function loop() {
      currentMouseX += (mouseTarget.x - currentMouseX) * 0.08
      currentMouseY += (mouseTarget.y - currentMouseY) * 0.08

      const rx = (-currentMouseY * 9).toFixed(2) + 'deg'
      const ry = (currentMouseX * 12).toFixed(2) + 'deg'
      const mx = (currentMouseX * 28).toFixed(1) + 'px'
      const my = (currentMouseY * 20).toFixed(1) + 'px'

      document.documentElement.style.setProperty('--rx', rx)
      document.documentElement.style.setProperty('--ry', ry)
      document.documentElement.style.setProperty('--mx', mx)
      document.documentElement.style.setProperty('--my', my)

      parallaxAnimationId = requestAnimationFrame(loop)
    }
    parallaxAnimationId = requestAnimationFrame(loop)
  }

  onMounted(() => {
    startParallaxLoop()
  })

  onBeforeUnmount(() => {
    if (parallaxAnimationId) cancelAnimationFrame(parallaxAnimationId)
  })

  return {
    mouseTarget,
    handleMouseMove,
    handleTouchMove,
    reset3DCamera
  }
}
