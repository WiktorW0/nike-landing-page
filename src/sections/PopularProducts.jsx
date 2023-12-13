import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
import { useInView } from 'react-intersection-observer'

const PopularProducts = ({popularSectionVisible}) => {
  const { ref:popularCardRef, inView:popularCardVisible,} = useInView({rootMargin:"-200px"})
  return (
    <section id="products" className={`delay-100 max-container  max-sm:mt-12 ${popularSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16 ">
        {products.map((product,index)=>{
          return(
            <div ref={popularCardRef} key={product.name} className={`delay-[${(index+1)*200}ms] ${popularCardVisible ? 'sm:opacity-100 sm:blur-0 sm:translate-x-0 sm:transition-all sm:duration-500 sm:ease-in-out' :'sm:opacity-0 sm:blur-lg sm:ease-in-out sm:translate-x-[-100%] sm:transition-all sm:duration-500' } `} >
              <PopularProductCard {...product}/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PopularProducts