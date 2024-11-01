
import { usePostsStore } from '@/stores/posts'

export const useDateString = function (index) {
  const store = usePostsStore()

  const date = new Date(store?.postsArr[index].date);

  const dateString = `${getZero(date.getHours())}:${getZero(date.getMinutes())}, ${date.getDate()} ${getMonthInRus(date.getMonth() + 1)} ${date.getFullYear()}`

  function getZero(num) {
    if (num < 10) {
      return `0${num}`
    } else {
      return `${num}`
    }
  }

  function getMonthInRus(num) {
    const monthNames = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ]
    
    return monthNames[num]
  }

  return dateString
}
