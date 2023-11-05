import { cookies } from 'next/headers'

export function setAccesstokentoServer(token: string | null) {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('accessToken', `Bearer ${token}`, {
    expires: Date.now() - oneDay,
  })
  console.log(cookies().get('accessToken'))
}
