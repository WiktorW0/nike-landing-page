import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = ({superSectionVisible}) => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className={`flex flex-1 flex-col delay-100 ${superSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}>
      
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red "> Super Quality</span> Shoes
        </h2> 
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with umatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
  
      </div>
      <div className={`flex flex-1 justify-center items-center delay-300 ${superSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}>
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality