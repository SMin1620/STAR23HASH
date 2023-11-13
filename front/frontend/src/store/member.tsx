import { create } from 'zustand'

interface ismember {
  state: boolean
  setIsMember: (select: boolean) => void
}

const IsMember = create<ismember>((set) => ({
  state: false,
  setIsMember: (state: boolean) => {
    set(() => ({ state: state }))
  },
}))

export default IsMember
