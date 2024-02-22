import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MODALS_CONTAINER } from '../const/dom-keys.const'
import { cn } from '../utils/class-names.util'

type Props = {
  open?: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ open, onClose, children }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return createPortal(
    <div
      className={cn(
        'absolute top-0 left-0 size-full justify-center items-center backdrop-blur-sm bg-black bg-opacity-10',
        open ? 'flex' : 'hidden',
      )}
    >
      {children}
    </div>,
    document.querySelector(`#${MODALS_CONTAINER}`)!,
  )
}

export default Modal
