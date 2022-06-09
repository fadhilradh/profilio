import { Registry, Server } from 'miragejs'
import { AnyFactories, AnyModels } from 'miragejs/-types'

import { setResponse } from 'utils/mirage'

import { baseUrl } from 'configs/api'

import {
  SAMPLE_USING_DATA_GET_RESPONSE,
  SAMPLE_USING_DATA_POST_RESPONSE,
} from './data'

export function samplesUsingDataHandlers(
  server: Server<Registry<AnyModels, AnyFactories>>
) {
  server.get(
    `${baseUrl}/samples-using-data`,
    setResponse(
      () => SAMPLE_USING_DATA_GET_RESPONSE,
      () => ({ data: [] })
    )
  )

  server.post(
    `${baseUrl}/samples-using-data`,
    setResponse(() => SAMPLE_USING_DATA_POST_RESPONSE)
  )
}
