import clsx from 'clsx'
import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }) => {
    const classes = clsx(
      'text-base font-medium rounded-lg px-8 py-3 border-2 hover:opacity-80 focus:border-accent focus:border-2',
      variant === 'primary'
        ? 'bg-surface-contrast text-surface-primary'
        : 'bg-transparent text-primary border-tertiary',
      className
    )
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
