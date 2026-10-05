export function useScrollAnimation(target, options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true
  } = options

  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if (!target.value) return

    if (!('IntersectionObserver' in window)) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (once) observer.disconnect()
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { isVisible }
}
