import { useEffect, useState } from 'react'
import TimerUnit from './timer-unit'

type Props = {
  date: Date
}

const TripCountdown = ({ date }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(0)

  useEffect(() => {
    const updateTimeLeft = () => {
      const difference = date.getTime() - Date.now()

      difference > 0 ? setTimeLeft(difference) : setTimeLeft(0)
    }

    updateTimeLeft()
    const interval = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [date])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className="flex gap-7">
      <TimerUnit name="days" unit={days} />
      <TimerUnit name="hours" unit={hours} />
      <TimerUnit name="minutes" unit={minutes} />
      <TimerUnit name="seconds" unit={seconds} />
    </div>
  )
}

export default TripCountdown
