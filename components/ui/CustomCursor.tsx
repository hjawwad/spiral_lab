'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)

  // Use motion values for smooth, performant cursor movement
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Smooth spring animation for cursor - optimized for performance
  const springConfig = { damping: 25, stiffness: 700, mass: 0.2 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    // Use motion values directly for better performance (no re-renders)
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)

    // Check if hovering over interactive element
    const target = e.target as HTMLElement
    const isInteractive =
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') !== null ||
      target.closest('button') !== null

    setIsPointer(isInteractive)
  }, [cursorX, cursorY])

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [updateMousePosition])

  // Don't render on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-electric-lime rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -4,
          translateY: -4,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.15, ease: 'easeOut' }
        }}
      />

      {/* Trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-electric-lime/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -16,
          translateY: -16,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.2, ease: 'easeOut' }
        }}
      />
    </>
  )
}
