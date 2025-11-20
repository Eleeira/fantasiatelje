import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // una volta visibile, non serve più osservarlo
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.2,
        ...options
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}
