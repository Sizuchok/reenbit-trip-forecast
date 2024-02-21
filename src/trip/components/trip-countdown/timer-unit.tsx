import { prefixWithZero } from '../../../common/utils/prefix-with-zero.util'

type Props = {
  unit: number
  name: string
}

const TimerUnit = ({ name, unit }: Props) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold">{prefixWithZero(unit)}</div>
      <div className="uppercase font-light text-[0.6rem] mt-1">{name}</div>
    </div>
  )
}
export default TimerUnit
