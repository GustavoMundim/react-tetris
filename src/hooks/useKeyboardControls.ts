import { useEffect } from 'react'

type Props = {
  timerId: number | null
  moveLeft: () => void
  moveRight: () => void
  moveDown: () => void
}

export const useKeyboardControls = ({
  timerId,
  moveLeft,
  moveRight,
  moveDown,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!timerId) return

      switch (event.key) {
        case 'ArrowLeft':
          moveLeft()
          break
        case 'ArrowRight':
          moveRight()
          break
        case 'ArrowDown':
          moveDown()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [timerId, moveLeft, moveRight, moveDown])
}
