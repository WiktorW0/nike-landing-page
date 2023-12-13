import {Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality, } from './sections'
import Nav from './components/Nav'
import { useInView } from 'react-intersection-observer'


const App = () => {

  const { ref:popularProductsSectionRef, inView:popularSectionVisible, } = useInView({rootMargin:"-50px"})
  const { ref:superQualityRef, inView:superSectionVisible, } = useInView({rootMargin:"-20%"})
  const { ref:serviceRef, inView:serviceSectionVisible, } = useInView()
  const { ref: specialRef, inView:specialSectionVisible, } = useInView({rootMargin:"-20%"})
  const { ref: customerRef, inView:customerSectionVisible, } = useInView({rootMargin:"-20%"})
  


  return (
    <main id='#home' className='relative bg-white scroll-smooth'>
      <Nav/> 
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section ref={popularProductsSectionRef} className="padding">
        <PopularProducts popularSectionVisible={popularSectionVisible}/>
      </section>
      <section ref={superQualityRef} className="padding">
        <SuperQuality superSectionVisible={superSectionVisible}/>
      </section>
      <section ref={serviceRef} className="padding-x py-10">
        <Services serviceSectionVisible={serviceSectionVisible}/>
      </section>
      <section ref={specialRef} className="padding">
        <SpecialOffer specialSectionVisible={specialSectionVisible}/>
      </section>
      <section ref={customerRef} className="bg-pale-blue padding">
        <CustomerReviews customerSectionVisible={customerSectionVisible}/>
      </section>
      <section id='subscribe' className="padding-x sm:py-32 py-16 w-full pb-1">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}
  


export default App