import { ElementRef, ReactNode, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type Props = {
  withArrows?: boolean
  children: ReactNode
}

const Scrollable = ({ withArrows, children }: Props) => {
  const ref = useRef<ElementRef<'div'>>(null)

  const arrowClasses =
    'size-8 cursor-pointer flex-shrink-0 self-center fill-[#110E3B] hover:fill-[#2C2B3B] hover:scale-110'

  const scrollAmout = 200

  return (
    <div className="w-full flex">
      {withArrows && (
        <IoIosArrowBack
          className={arrowClasses}
          onClick={() => {
            if (!ref.current) return
            ref.current.scrollLeft -= scrollAmout
          }}
        />
      )}

      <div
        ref={ref}
        className="overflow-x-auto scroll-smooth"
        onWheel={event => {
          if (!ref.current) return
          ref.current.scrollLeft += event.deltaY * 2
        }}
      >
        {children}
      </div>

      {withArrows && (
        <IoIosArrowForward
          className={arrowClasses}
          onClick={() => {
            if (!ref.current) return
            ref.current.scrollLeft += scrollAmout
          }}
        />
      )}
    </div>
  )
}
export default Scrollable
