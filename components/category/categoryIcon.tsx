import { FaCloud, FaDocker, FaDatabase, FaNetworkWired } from 'react-icons/fa'
import { FaBook, FaBrain, FaRegKeyboard, FaX } from 'react-icons/fa6'
import { GoContainer } from 'react-icons/go'
import { LuMonitorCheck } from 'react-icons/lu'
import { SiKubernetes } from 'react-icons/si'
import { CustomIcon } from '@/components/ui/customIcon'

type CategoryIconProps = {
  category: string
  size?: number
  color?: string
  className?: string
}

function CategoryIcon({ category, size, color, className }: CategoryIconProps) {
  const getIconByCategory = (category: string) => {
    switch (category) {
      case 'cloud':
        return (
          <CustomIcon
            icon={FaCloud}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'docker':
        return (
          <CustomIcon
            icon={FaDocker}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'kubernetes':
        return (
          <CustomIcon
            icon={SiKubernetes}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'database':
        return (
          <CustomIcon
            icon={FaDatabase}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'network':
        return (
          <CustomIcon
            icon={FaNetworkWired}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'programming':
        return (
          <CustomIcon
            icon={FaRegKeyboard}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'book':
        return (
          <CustomIcon
            icon={FaBook}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'machineLearning':
        return (
          <CustomIcon
            icon={FaBrain}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'container':
        return (
          <CustomIcon
            icon={GoContainer}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      case 'monitoring':
        return (
          <CustomIcon
            icon={LuMonitorCheck}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
      default:
        return (
          <CustomIcon
            icon={FaX}
            size={size ? size : 20}
            color={color}
            className={className}
          />
        )
    }
  }

  return <div>{getIconByCategory(category)}</div>
}

export default CategoryIcon
