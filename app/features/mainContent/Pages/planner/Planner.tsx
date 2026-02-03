import PlannerHeader from './PlannerHeader'
import { VStack } from '@chakra-ui/react'
import PlannerTab from './PlannerTab'

const Planner = () => {
  return (
    <VStack w={'full'} h={'full'} gap='0'>
      {/* Header */}
        <PlannerHeader />
        {/* Tab */}
        <PlannerTab />
    </VStack>
  )
}

export default Planner