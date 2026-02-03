import { VStack } from '@chakra-ui/react'
import Planner from './Pages/Planner'

const PageArea = ({activePage}: {activePage: string}) => {
  return (
    <VStack w='full' h='full' justifyContent='start'>
        {activePage === 'planner' && <Planner />}
    </VStack>
  )
}

export default PageArea