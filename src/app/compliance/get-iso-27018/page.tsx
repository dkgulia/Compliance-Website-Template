'use client'

import React from 'react'
import Iso27018HeroSection from './components/Iso27018HeroSection'
import Iso27018FeaturesSection from './components/Iso27018FeaturesSection'
import Iso27018Banner from './components/Iso27018Banner'
import Iso27018ComplianceHub from './components/Iso27018ComplianceHub'
import Iso27018ComplianceWorkFlow from './components/Iso27018ComplianceWorkFlow'
import Iso27018FaqSection from './components/Iso27018FaqSection'
import ImplementationSteps from './components/ImplementationSteps'

const Page = () => {
  return (
    <>
      <Iso27018HeroSection />
      <Iso27018FeaturesSection />
      <Iso27018ComplianceHub />
      <Iso27018ComplianceWorkFlow />
      <ImplementationSteps/>
      <Iso27018Banner />
      <Iso27018FaqSection />
    </>
  )
}

export default Page