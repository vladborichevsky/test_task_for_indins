
  const GetData = async (url) => {
    try {
      const response = await fetch(url)
  
      if (response.status == 404) {
        return '404'
      }

      if (!response.ok) {
        throw new Error('Возникла ошибка в получении данных через fetch')
      }
  
      return response.json()
      
    } catch (error) {
      console.error(error)

      return 'fetchFail'
    }
  }
  
  export default GetData