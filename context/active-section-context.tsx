"use client"

import type { SectionName } from '@/lib/types'
import React, { useContext, useState } from 'react'


type ActiveSectionContextProviderType = {
    children : React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderType) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0) //need this to disable the observer temporarily used when user clicks the alternate tabs example home to projects
  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}>
    {children}
  </ActiveSectionContext.Provider>
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }
    return context;
}
