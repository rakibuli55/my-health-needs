import React from 'react'
import { Link } from 'react-router-dom'
import TreatmentCard from './TreatmentCard'

const popularTreatmentData = [
    {
        id:1,
        title:"Medicine and Nephrology",
        imgUrl:"https://i.ibb.co.com/C2ksPGf/nephrology.png"
    },
    {
        id:1,
        title:"Medicine and Nephrology",
        imgUrl:"https://i.ibb.co.com/v1HkD03/cardiology.png"
    },
    {
        id:1,
        title:"Medicine and Nephrology",
        imgUrl:"https://i.ibb.co.com/pRbW7Jf/food.png"
    },
    {
        id:1,
        title:"Medicine and Nephrology",
        imgUrl:"https://i.ibb.co.com/hmTQYsY/spine.png"
    },
]

function PopularTreatment() {
  return (
    <section className='py-[140px]'>
        <div className='container'>
            {/* section-title  */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text--xl">Most Popular Treatment </h2>
                <Link to={'/'} className="text-[24px] font-semibold text-[#01548B]">See All</Link>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    popularTreatmentData.map((item) => (
                        <div key={item.id} className='mt-5'>
                            <TreatmentCard item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default PopularTreatment