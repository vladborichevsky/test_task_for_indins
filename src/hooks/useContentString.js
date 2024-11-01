
import { usePostsStore } from '@/stores/posts'

export const useContentString = function (index) {
  const store = usePostsStore()

  const originText = store?.postsArr[index].content
  const contentPostTones = store?.postsArr[index].contentPostTones
  let coloredText = ""
  let currentIndex = 0
  
  contentPostTones.forEach(item => {
    coloredText += originText.slice(currentIndex, item.position)

    if (item.tone < -0.3) {
      coloredText += `<span class="bg-red-500">${originText.slice(item.position, item.position + item.length)}</span>`
    } else if (contentPostTones.tone > 0.3) {
      coloredText += `<span class="bg-green-500">${originText.slice(item.position, item.position + item.length)}</span>`
    } else {
      coloredText += `<span class="bg-yellow-500">${originText.slice(item.position, item.position + item.length)}</span>`
    }
    
    currentIndex = item.position + item.length
  })

  coloredText += originText.slice(currentIndex)

  return coloredText
}
