import type {FC} from 'react'
import { Div } from './Div'
import type { DivProps } from './Div'

export type AvatarTestProps = DivProps & {
  size?: string
}
export const Avatar: FC<AvatarTestProps> = ({
  className: _className, style, src, size, ...props
}) => {
  const w_or_h = size ?? '3rem'
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')
  
  return (
    <Div
      {...props}
      src={src}
      width={w_or_h}
      height={w_or_h}
      className={className}
      style={style}/>
  )
}