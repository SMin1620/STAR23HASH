export interface item {
  userId: number
  id: number
  title: string
  body: string
}

export interface member {
  id: string
  password?: string
}

export interface note {
  id: number
  senderId: string
  senderNickname: string
  date: string
  content: string
  isNew: boolean
  isSender: boolean
}

export interface letter {
  id: number
  userId: number
  sender: string
  date: string
  isNew: boolean
}

export interface letterInfo extends letter {
  content: string
  type: number
  fileUrl?: string
  nickname: string
  hint?: string
}

export interface Room {
  id: number
  senderId: number
  senderName: string
  receiverId: number
  receiverName: string
  createdAt: string
  read: boolean
  store: any
}

export interface Note {
  id: number
  senderId: number
  senderName: string
  receiverId: number
  receiverName: string
  content: string
  createdAt: string
  send: boolean
  isRead: boolean
}
