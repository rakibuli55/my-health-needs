import AverageReviews from "@/components/MedicineDetailsPageComponents/AverageReviews"
import MedicineDetails from "@/components/MedicineDetailsPageComponents/MedicineDetails"
import MedicineDetailsAccordion from "@/components/MedicineDetailsPageComponents/MedicineDetailsAccordion"


function MedicineDetailsPage() {
  return (
    <div className="py-24">
        
        <div className="container">
            <MedicineDetails></MedicineDetails>
            <MedicineDetailsAccordion></MedicineDetailsAccordion>

            {/* reviews */}
            <div className="border rounded-lg p-10  w-full flex flex-col">
                 <div className="w-full ">
                 <AverageReviews></AverageReviews>
                 </div>
                 <div>

                 </div>

            </div>
        </div>
        
    </div>
  )
}

export default MedicineDetailsPage