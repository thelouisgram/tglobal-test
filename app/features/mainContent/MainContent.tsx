'use client'
import { VStack } from "@chakra-ui/react"
import GlobalHeader from "./GlobalHeader"
import { useState } from "react"
import PageArea from "./PageArea"

const MainContent = () => {
  const [activePage, setActivePage] = useState('planner')
  return (
    <VStack w='full' h='full' justifyContent='start' gap={0}>
      <GlobalHeader />
      <PageArea activePage={activePage} />
    </VStack>
  )
}

export default MainContent