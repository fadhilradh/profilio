import { Response } from 'miragejs'
import { AnyFactories, AnyModels, Registry } from 'miragejs/-types'
import { RouteHandler } from 'miragejs/server'

enum MockStates {
  success = 'success',
  error = 'error',
}

enum MockStateMethods {
  get = 'get',
  post = 'post',
  put = 'put',
  patch = 'patch',
  delete = 'delete',
}

enum MockResponseMode {
  full = 'full',
  empty = 'empty',
}

type MockRouteHandler = RouteHandler<Registry<AnyModels, AnyFactories>>

export function setResponse(
  responseFullSuccess: MockRouteHandler,
  responseEmptySuccess?: MockRouteHandler
): MockRouteHandler {
  return function responseCallback(schema, request) {
    const state = getMockState()
    const method = getMockStateMethod()
    const mode = getMockResponseMode()

    let responseSuccess

    if (mode === MockResponseMode.full) {
      responseSuccess = responseFullSuccess(schema, request)
    } else if (mode === MockResponseMode.empty && !!responseEmptySuccess) {
      responseSuccess = responseEmptySuccess(schema, request)
    }

    // @ts-expect-error: method should be there, but doesn't exist on type declaration
    if (method === request.method.toLowerCase()) {
      if (state === MockStates.success) {
        return responseSuccess
      } else if (state === MockStates.error) {
        return new Response(500, {}, { errors: ['Internal server error!'] })
      }
    }

    return responseSuccess
  }
}

function getMockState(): MockStates {
  if (window.location) {
    const url = new URL(window.location.href)
    const state = url.searchParams.get('mockState')
    return MockStates[state] || MockStates.success
  }
  return MockStates.success
}

function getMockStateMethod(): MockStateMethods {
  if (window.location) {
    const url = new URL(window.location.href)
    const state = url.searchParams.get('mockStateMethod')
    return MockStateMethods[state] || MockStateMethods.get
  }
  return MockStateMethods.get
}

function getMockResponseMode(): MockResponseMode {
  if (window.location) {
    const url = new URL(window.location.href)
    const state = url.searchParams.get('mockResponseMode')
    return MockResponseMode[state] || MockResponseMode.full
  }
  return MockResponseMode.full
}
