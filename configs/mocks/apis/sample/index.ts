import { Registry, Server } from 'miragejs'
import { AnyFactories, AnyModels } from 'miragejs/-types'

import { baseUrl } from 'configs/api'

export function sampleHandlers(
  server: Server<Registry<AnyModels, AnyFactories>>
) {
  // @ts-expect-error
  server.get(`${baseUrl}/samples`, (schema) => schema.sampleModels.all())

  server.post(`${baseUrl}/samples`, (schema, request) => {
    const attr = JSON.parse(request.requestBody)

    // @ts-expect-error
    const sampleData = schema.sampleModels.create(attr)
    return { id: sampleData.id }
  })
}
