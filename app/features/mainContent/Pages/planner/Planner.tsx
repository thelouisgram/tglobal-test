import PlannerHeader from './PlannerHeader'
import { VStack } from '@chakra-ui/react'
import PlannerTab from './PlannerTab'
import CalendarToolBar from './CalendarToolBar'
import CalendarGrid from './CalendarGrid'
import { useState } from "react";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <VStack w={'full'} h={'full'} gap='20px'>
      {/* Header */}
        <PlannerHeader />
        {/* Tab */}
        <PlannerTab />
        {/* Calendar Tool Bar */}
        <CalendarToolBar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        {/* Calendar Grid */}
        <CalendarGrid selectedDate={selectedDate}/>
      </VStack>
  )
}

export default Planner