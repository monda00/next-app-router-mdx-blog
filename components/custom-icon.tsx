import { IconBaseProps, IconType } from 'react-icons'

interface CustomIconProps extends IconBaseProps {
  icon: IconType
}

export function CustomIcon({
  icon: Icon,
  size = 30,
  ...props
}: CustomIconProps & React.HTMLProps<SVGElement>) {
  return <Icon size={size} {...props} />
}
