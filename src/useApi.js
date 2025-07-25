const { useState, useEffect } = require('react')
const axios = require('axios')

const useApi = (url, mapResults = (result) => result) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then((response) => setData(mapResults(response.data)))
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error }
}

module.exports = { useApi }
