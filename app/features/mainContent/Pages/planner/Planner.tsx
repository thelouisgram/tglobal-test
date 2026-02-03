import PlannerHeader from './PlannerHeader'
import { VStack } from '@chakra-ui/react'
import PlannerTab from './PlannerTab'
import CalendarToolBar from './carlendarToolBar/CalendarToolBar'
import CalendarGrid from './CalendarGrid'

const Planner = () => {
  return (
    <VStack w={'full'} h={'full'} gap='20px'>
      {/* Header */}
        <PlannerHeader />
        {/* Tab */}
        <PlannerTab />
        {/* Calendar Tool Bar */}
        <CalendarToolBar />
        {/* Calendar Grid */}
        <CalendarGrid />
      </VStack>
  )
}

export default Planner