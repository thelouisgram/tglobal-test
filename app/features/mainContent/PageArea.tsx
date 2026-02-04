import { VStack } from '@chakra-ui/react'
import Planner from './Pages/planner/Planner'

const PageArea = ({activePage}: {activePage: string}) => {
  return (
    <VStack w='full' h='full' justifyContent='start' bg="white" minH="100dvh">
        {activePage === 'planner' && <Planner />}
    </VStack>
  )
}

export default PageArea 