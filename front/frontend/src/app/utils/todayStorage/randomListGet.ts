import api from '../api'

const RandomListGet = async () => {
  try {
    const response = await api({
      method: 'get',
      url: '/notes/room/today',
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default RandomListGet
