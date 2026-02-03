import Sidebar from './features/sidebar/SideBar'
import { HStack } from '@chakra-ui/react'
import MainContent from './features/mainContent/MainContent'

const page = () => {
  return (
    <HStack w='full' h='100vh' gap={0} bg='white'>
      <Sidebar />
      <MainContent />
    </HStack>
  )
}

export default page