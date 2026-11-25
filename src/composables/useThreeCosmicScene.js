import { onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

export function useThreeCosmicScene(canvasRef, mouseTarget) {
  let scene = null
  let camera = null
  let renderer = null
  let threeGroup = null
  let threeAnimationId = null

  function handleResize() {
    if (!camera || !renderer) return
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function initThreeScene() {
    const canvas = canvasRef.value
    if (!canvas) return

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 26

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    } catch {
      return
    }

    threeGroup = new THREE.Group()
    scene.add(threeGroup)

    // Gyroscopic Dual Orbital Cosmic Rings behind TRIVÉA
    const torusGeo1 = new THREE.TorusGeometry(12.5, 0.05, 16, 120)
    const torusMatBlue = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.38
    })
    const torusRing1 = new THREE.Mesh(torusGeo1, torusMatBlue)
    torusRing1.rotation.x = Math.PI / 2.3
    threeGroup.add(torusRing1)

    const torusGeo2 = new THREE.TorusGeometry(11.2, 0.05, 16, 120)
    const torusMatPink = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.32
    })
    const torusRing2 = new THREE.Mesh(torusGeo2, torusMatPink)
    torusRing2.rotation.x = -Math.PI / 2.6
    torusRing2.scale.set(0.92, 0.92, 0.92)
    threeGroup.add(torusRing2)

    // Floating Wireframe Polyhedra
    const icoGeo = new THREE.IcosahedronGeometry(2.2, 0)
    const icoBlueMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    })
    const icoPinkMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    })

    const leftPoly = new THREE.Mesh(icoGeo, icoBlueMat)
    leftPoly.position.set(-14, 4.2, -4)
    threeGroup.add(leftPoly)

    const centerPoly = new THREE.Mesh(icoGeo, icoPinkMat)
    centerPoly.position.set(0, 8.5, -7)
    threeGroup.add(centerPoly)

    const rightPoly = new THREE.Mesh(icoGeo, icoBlueMat)
    rightPoly.position.set(14, 4.2, -4)
    threeGroup.add(rightPoly)

    // Stardust Cosmic Particles
    const particleCount = 260
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color(0x38bdf8)
    const color2 = new THREE.Color(0xec4899)
    const color3 = new THREE.Color(0xa855f7)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 56
      positions[i3 + 1] = (Math.random() - 0.5) * 32
      positions[i3 + 2] = (Math.random() - 0.5) * 22

      const choice = Math.random()
      const c = choice < 0.45 ? color1 : choice < 0.8 ? color2 : color3
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    const partGeo = new THREE.BufferGeometry()
    partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    partGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const partMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    })
    const particles = new THREE.Points(partGeo, partMat)
    threeGroup.add(particles)

    function animateThree() {
      threeAnimationId = requestAnimationFrame(animateThree)
      leftPoly.rotation.x += 0.003
      leftPoly.rotation.y += 0.005
      centerPoly.rotation.y -= 0.004
      rightPoly.rotation.x -= 0.003
      rightPoly.rotation.y += 0.005

      torusRing1.rotation.z += 0.0016
      torusRing2.rotation.z -= 0.0014
      particles.rotation.y += 0.0006

      threeGroup.rotation.y += (mouseTarget.x * 0.4 - threeGroup.rotation.y) * 0.05
      threeGroup.rotation.x += (mouseTarget.y * 0.28 - threeGroup.rotation.x) * 0.05

      renderer.render(scene, camera)
    }

    animateThree()
    window.addEventListener('resize', handleResize)
  }

  onMounted(() => {
    initThreeScene()
  })

  onBeforeUnmount(() => {
    if (threeAnimationId) cancelAnimationFrame(threeAnimationId)
    window.removeEventListener('resize', handleResize)
    if (renderer) renderer.dispose()
  })
}
