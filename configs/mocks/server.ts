import { createServer as createServerMirage } from 'miragejs'

import * as apis from './apis'
import Models from './models'

interface options {
  environment?: 'development' | 'testing'
}

export function createServer({ environment = 'development' }: options = {}) {
  return createServerMirage({
    environment,
    models: Models,
    routes() {
      Object.keys(apis).forEach((key) => {
        apis[key](this)
      })
      this.passthrough()
    },
  })
}

export default createServer
