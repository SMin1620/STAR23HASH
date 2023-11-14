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
  isReply: boolean
}

export interface Letter {
  id: number
  senderId: number
  content: string
  type: number
  fileUrl: string
  createAt: string
  receiverId: number
  isRead: boolean
  hintContent: string
}
