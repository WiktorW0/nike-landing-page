import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = ({specialSectionVisible}) => {
  return (
    <section className="flex flex-wrap justify-start items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className={`flex-1 delay-300 ${specialSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}>
        <img src={offer} alt="offer"  width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className={`flex flex-1 flex-col delay-100 ${specialSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}>
      
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red "> Special </span> Offer
        </h2> 
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart. 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities design to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
  
      </div>
    </section>
  )
}

export default SpecialOffer