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
      andGroup: {
        expressions: [
          {
            notExpression: {
              filter: {
                fieldName: 'pagePath',
                stringFilter: {
                  matchType: 1,
                  value: '/',
                },
              },
            },
          },
          {
            notExpression: {
              filter: {
                fieldName: 'pagePath',
                stringFilter: {
                  matchType: 1,
                  value: '/tag',
                },
              },
            },
          },
          {
            notExpression: {
              filter: {
                fieldName: 'pagePath',
                stringFilter: {
                  matchType: 2,
                  value: '/tag/',
                },
              },
            },
          },
        ],
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
