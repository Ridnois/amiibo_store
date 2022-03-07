export const fetchJsonFromApi = (api: string) => async (query: string) => {
  const response = await fetch(api + query)
  return response.json()
}

export const getAmiiboseries = fetchJsonFromApi('https://amiiboapi.com/api/amiibo/?amiiboSeries=')

