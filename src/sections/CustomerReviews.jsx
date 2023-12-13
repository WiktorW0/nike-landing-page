import ReviewCard from "../components/ReviewCard"
import {reviews} from "../constants/index"
import { useInView } from 'react-intersection-observer'

const CustomerReviews = ({customerSectionVisible}) => {
  const { ref:customerCardRef, inView:customerCardVisible,} = useInView({rootMargin:"-200px"})
  return (
    <section className={`max-container ${customerSectionVisible ? 'opacity-100 blur-0 translate-x-0 transition-all duration-1000 ease-in-out' :'opacity-0 blur-lg translate-x-[-100%] transition-all duration-1000 ease-in-out'}`}> 
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Customer</span> say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review,index)=> (
          <div ref={customerCardRef} key={review.customerName} className={`delay-[${(index+1)*200}ms] ${customerCardVisible ? 'sm:opacity-100 sm:blur-0 sm:translate-x-0 sm:transition-all sm:duration-500 sm:ease-in-out' :'sm:opacity-0 sm:blur-lg sm:ease-in-out sm:translate-x-[-100%] sm:transition-all sm:duration-500'} `} >
            <ReviewCard 
            imgURL={review.imgURL} 
            customerName={review.customerName}
            feedback={review.feedback}
            rating={review.rating}/>
          </div>
          
        ))}

      </div>
    </section>
  )
}

export default CustomerReviews