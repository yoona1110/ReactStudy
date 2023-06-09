import type { FC } from "react"
import type { ReactDivProps } from "../components"
import { Div } from "../components"

export type OverlayProps = ReactDivProps & {
  opacityClass?: string
}

export const Overlay: FC<OverlayProps> = ({
  className: _className,
  opacityClass,
  children,
  ...props
}) => {
  const className = [
    _className,
    'abosolute z-50 w-screen h-screen',
    opacityClass ?? 'bg-black/70',
    'flex items-center justify-center'
  ].join(' ')

  return (
    <Div {...props} className={className} top='0' left="0"> {children} </Div>
  )
}