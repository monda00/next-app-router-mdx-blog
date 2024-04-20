import { BetaAnalyticsDataClient } from '@google-analytics/data'

const analyticsDataClient = new BetaAnalyticsDataClient()

export async function fetchPopularPosts(pageSize: number): Promise<string[]> {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: '7daysAgo',
        endDate: '1daysAgo',
      },
    ],
    dimensions: [
      {
        name: 'pagePath',
      },
    ],
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
    dimensionFilter: {
      filter: {
        fieldName: 'pagePath',
        stringFilter: {
          matchType: 5,
          value: '^/[0-9a-zA-Z-]+$',
        },
      },
    },
    limit: pageSize,
  })
  return (
    response.rows?.map((row) => {
      return row.dimensionValues?.[0].value?.replace(/^\/|\/$/g, '') ?? ''
    }) ?? []
  )
}
