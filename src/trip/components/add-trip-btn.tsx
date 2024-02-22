import { useState } from 'react'
import Modal from '../../common/components/modal'
import AddTripForm from './form/add-trip-form'

const AddTripBtn = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        className="min-w-48 max-w-48 h-44 bg-[#f2f4f8] cursor-pointer border-0 text-base hover:bg-[#f1f1f1]"
        onClick={() => setOpen(true)}
      >
        <span className="block text-2xl">+</span>
        Add trip
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <AddTripForm onClose={() => setOpen(false)} />
      </Modal>
    </>
  )
}
export default AddTripBtn
