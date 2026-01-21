'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface LazyLoadProps {
  children: ReactNode
  className?: string
  placeholder?: ReactNode
}

export function LazyLoad({ children, className, placeholder }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  )
}
