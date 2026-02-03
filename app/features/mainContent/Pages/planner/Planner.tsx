import PlannerHeader from './PlannerHeader'
import { VStack } from '@chakra-ui/react'
import PlannerTab from './PlannerTab'
import CalendarToolBar from './carlendarToolBar/CalendarToolBar'

const Planner = () => {
  return (
    <VStack w={'full'} h={'full'} gap='20px'>
      {/* Header */}
        <PlannerHeader />
        {/* Tab */}
        <PlannerTab />
        {/* Calendar Tool Bar */}
        <CalendarToolBar />
    </VStack>
  )
}

export default Planner