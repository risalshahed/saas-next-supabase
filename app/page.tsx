import CompaionsList from "@/components/CompaionsList";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button"
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-3xl underline">
        Popular Companions
      </h1>
      {/* <Button>
        Let&apos;s get started
      </Button> */}
      <section className="home-section">
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          subject='science'
          topic='Neural Network of the Brain'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          subject='maths'
          topic='Derivatives & Integrals'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id='789'
          name='Verba the Vocabulary Builder'
          subject='language'
          topic='English Literature'
          duration={30}
          color='#bde7ff'
        />
      </section>
      <section className="home-section">
        <CompaionsList
          title='Recently Completed Sessions'
          companions={recentSessions}
          classNames='w-2/3 lg:max-w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page;