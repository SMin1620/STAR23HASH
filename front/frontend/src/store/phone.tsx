import { create } from 'zustand'

interface Phone {
  phone: string
  setPhone: (select: string) => void
}

const PhoneStore = create<Phone>((set) => ({
  phone: '',
  setPhone: (phone: string) => {
    set(() => ({ phone: phone }))
  },
}))

export default PhoneStore
