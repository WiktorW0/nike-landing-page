import ServiceCard from "../components/ServiceCard"
import {services} from "../constants"
import { useInView } from 'react-intersection-observer'

const Services = ({serviceSectionVisible}) => {
  const { ref:serviceRef, inView:serviceVisible,} = useInView({rootMargin:"-100px"})
  return (
    <section className={`max-container flex justify-center flex-wrap gap-9 ${serviceSectionVisible ? 'opacity-100 blur-0  ease-in-out translate-x-0 transition-all duration-1000': 'opacity-0 blur-lg ease-in-out translate-x-[-100%] transition-all duration-1000'}`}>
      {services.map((service,index)=>
        (<div ref={serviceRef} key={service.label} className={`delay-[${(index+1)*200}ms] ${serviceVisible ? 'sm:opacity-100 sm:blur-0 sm:translate-x-0 sm:transition-all sm:duration-500 sm:ease-in-out' :'sm:opacity-0 sm:blur-lg sm:ease-in-out sm:translate-x-[-100%] sm:transition-all sm:duration-500' } `} >
          <ServiceCard   {...service}/>
        </div> 
        )
      )}
    </section>
  )
}

export default Services