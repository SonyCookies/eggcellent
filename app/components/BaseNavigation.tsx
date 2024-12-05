import Link from 'next/link'
import Image from 'next/image'

interface BaseNavigationProps {
  children: React.ReactNode
}

const BaseNavigation: React.FC<BaseNavigationProps> = ({ children }) => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=50&width=150"
            alt="EGG-CELLENT Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        {children}
      </div>
    </nav>
  )
}

export default BaseNavigation

