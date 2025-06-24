import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from '../components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard id="123" name="Neura the brainy explorer" topic="Derivatives and Integrals" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="456" name="Countsy the number wizard" topic="Derivatives and Integrals" subject="Maths" duration={30} color="#e5d0ff" />
        <CompanionCard id="789" name="Verba the vocabulary builder" topic="language" subject="English Literature" duration={45} color="#BDE7FF" />
      </section>
      <section className='home-section'>
        <CompanionsList
        title="Recently Completed Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        
        
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page