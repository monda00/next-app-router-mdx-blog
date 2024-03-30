import ogs from 'open-graph-scraper'

export async function GetMetadata(url: string) {
  return ogs({ url })
    .then((data) => {
      if (!data.result.success) {
        throw new Error('Failed to fetch metadata')
      }
      return data.result
    })
    .catch((error) => {
      console.error(error)
    })
}
