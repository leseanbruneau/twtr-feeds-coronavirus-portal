export interface LinkModel {
  name: string,
  title?: string,
  page: string,
  order: number,
  url: string,
  description?: Array<{
      comment: string
  }>
}
