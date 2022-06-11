import React from 'react'

class OTPInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      disable: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value })
  }

  handleSubmit(event) {
    // const data = new FormData(event.target)
    // console.log(this.state)
    event.preventDefault()
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    } else {
      // console.log('next')

      const next = elmnt.target.tabIndex
      if (next < 4) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex items-center gap-x-4">
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="h-[44px] w-1/6 rounded-md border border-stroke-primary bg-transparent text-center text-2xl font-semibold text-primary "
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={(e) => this.handleChange('otp1', e)}
            tabIndex={1}
            maxLength={1}
            onKeyUp={(e) => this.inputfocus(e)}
          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="h-[44px] w-1/6 rounded-md border border-stroke-primary bg-transparent text-center text-2xl font-semibold text-primary "
            value={this.state.otp2}
            onChange={(e) => this.handleChange('otp2', e)}
            tabIndex={2}
            maxLength={1}
            onKeyUp={(e) => this.inputfocus(e)}
          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="h-[44px] w-1/6 rounded-md border border-stroke-primary bg-transparent text-center text-2xl font-semibold text-primary "
            value={this.state.otp3}
            onChange={(e) => this.handleChange('otp3', e)}
            tabIndex={3}
            maxLength={1}
            onKeyUp={(e) => this.inputfocus(e)}
          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="h-[44px] w-1/6 rounded-md border border-stroke-primary bg-transparent text-center text-2xl font-semibold text-primary "
            value={this.state.otp4}
            onChange={(e) => this.handleChange('otp4', e)}
            tabIndex={4}
            maxLength={1}
            onKeyUp={(e) => this.inputfocus(e)}
          />
        </div>
      </form>
    )
  }
}

export default OTPInput
