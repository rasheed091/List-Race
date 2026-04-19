import React from 'react'
import AnimatedNumber from 'react-animated-numbers'

export default function Listening() {
    const reviews = [
        {
            Num: 90,
            Value: 'k+',
            Cart: 'Listening',
        },
        {
            Num: 90,
            Value: 'k+',
            Cart: 'Listening',
        },
        {
            Num: 90,
            Value: 'k+',
            Cart: 'Listening',
        },
        {
            Num: 90,
            Value: 'k+',
            Cart: 'Listening',
        },
    ]
  return (
    <>
    <div className='w-[100%] h-[50vh] bg-[url(assets/counter-banner.jpg)] bg-fixed bg-cover z-10 flex justify-center items-center gap-[15%]'>
            {
                reviews.map((eachReviews)=>(
                    <div>
                        <h1 className='text-[57px] text-white font-bold' ><AnimatedNumber animateToNumber={eachReviews.Num}/> <span>{eachReviews.Value}</span></h1>
                        <h2 className='text-white text-center'>{eachReviews.Cart}</h2>
                    </div>
                 ))
            }
        </div>
    </>
  )
}
