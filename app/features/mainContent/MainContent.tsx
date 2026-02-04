'use client'
import { VStack } from "@chakra-ui/react"
import GlobalHeader from "./GlobalHeader"
import { useState } from "react"
import PageArea from "./PageArea"

const MainContent = () => {
  const [activePage, setActivePage] = useState('planner')
  return (
    <VStack w='full' h='100dvh' justifyContent='start' gap={0} ml='260px' bg="white">
      <GlobalHeader />
      <PageArea activePage={activePage} />
    </VStack>
  )
}

export default MainContent