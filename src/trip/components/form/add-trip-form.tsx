import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../../../common/components/button'
import Input from '../../../common/components/input'
import Label from '../../../common/components/label'
import Select from '../../../common/components/select/select'
import { L_S_TRIPS } from '../../../common/const/local-storage-keys.const'
import { DateRange } from '../../../common/types/common.types'
import { citiesMock } from '../../data/cities-mock'
import { addTripSchema } from '../../schemas/add-trip.schema'
import { AddTrip, City } from '../../types/trip.types'
import { TripContext } from '../trip-context'
import FormErrorMessage from './form-error-message'

type Props = {
  onClose: () => void
}

const AddTripForm = ({ onClose }: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTrip>({
    resolver: zodResolver(addTripSchema),
    reValidateMode: 'onChange',
  })

  const { setTrips, trips } = useContext(TripContext)

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit = ({ city, endDate, startDate }: AddTrip) => {
    const newTrips = structuredClone(trips)

    const range = {
      from: new Date(startDate),
      to: new Date(endDate),
    } as DateRange

    const foundCity = citiesMock.find(ct => ct.address === city) as City

    newTrips.push({
      id: Date.now(),
      cityName: foundCity.cityName,
      range: range,
      address: city,
      img: foundCity.img,
    })

    localStorage.setItem(L_S_TRIPS, JSON.stringify(newTrips))

    setTrips(newTrips)

    handleClose()
  }

  return (
    <div className="bg-white w-[32rem] shadow-2xl  rounded-md mx-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="h-14 flex justify-between items-center px-4 border-b">
          <h3 className="text-lg font-semibold">Create trip</h3>
          <IoCloseOutline
            className="size-6 hover:stroke-red-600 cursor-pointer"
            onClick={handleClose}
          />
        </header>
        <div className="px-4 py-10 space-y-3">
          <div>
            <Label required htmlFor="city" children="City" />
            <Select id="city" {...register('city')}>
              {citiesMock.map(city => (
                <option className="h-9" value={city.address}>
                  {city.cityName}
                </option>
              ))}
            </Select>
            {errors.city && <FormErrorMessage children={errors.city.message} />}
          </div>
          <div>
            <Label required htmlFor="start-date" children="Start date" />
            <Input id="start-date" type="date" {...register('startDate')} />
            {errors.startDate && <FormErrorMessage children={errors.startDate.message} />}
          </div>
          <div>
            <Label required htmlFor="end-date" children="End date" />
            <Input id="end-date" type="date" {...register('endDate')} />
            {errors.endDate && <FormErrorMessage children={errors.endDate.message} />}
          </div>
        </div>
        <footer className="h-20 flex justify-end items-center px-4 border-t gap-2">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
        </footer>
      </form>
    </div>
  )
}
export default AddTripForm
