import MacbookHero from '@/components/MacbookHero'
import MacbookFeatures from '@/components/MacbookFeatures'
import MacbookSummary from '@/components/MacbookSummary'
import MacbookVideoSection from '@/components/MacbookVideoSection'
import BatchFadeList from '@/components/BatchFadeList'
import MacbookScrollShowcase from '@/components/MacbookScrollShowcase'

export default function MacbookAirPage() {
  return (
    <div>

        <MacbookHero />
        <MacbookFeatures />
        <div className='pt-50 bg-black'>
        <MacbookVideoSection/>
      <MacbookSummary />
        </div>
        <MacbookScrollShowcase/>
        {/* <BatchFadeList/> */}

    </div>
  )
}
