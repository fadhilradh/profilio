import React from 'react'

import { Button } from 'components/Button'

const Login = () => {
  return (
    <div>
      <form className="rounded-lg border border-stroke-primary p-8">
        <h3 className="mb-8 font-primary !font-semibold text-primary">
          Login Account
        </h3>
        <fieldset>
          <label className="mb-2 text-[13px] text-primary" htmlFor="phone">
            Phone Number
          </label>
          <input type="phone" className="base-input" />
        </fieldset>
        <fieldset className="!mt-6">
          <label className="mb-2 text-[13px] text-primary" htmlFor="phone">
            Password
          </label>
          <input type="password" className="base-input" />
        </fieldset>
      </form>

      <div className="mt-24 flex gap-x-4">
        <Button>Reset</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  )
}

export default Login