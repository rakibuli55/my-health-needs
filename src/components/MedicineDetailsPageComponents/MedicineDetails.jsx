
import MedicineImg from '../../assets/images/medicine_img.png'

function MedicineDetails() {
  return (
    <div className="p-14 rounded-xl bg-[#EFF8FF]">
        <div className="grid grid-cols-2 gap-24">
            {/* image container */}
            <div className="flex flex-col gap-6">
                <div className='w-full h-[500px] p-8 bg-white rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover ' src={MedicineImg} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-6 ">
                    <div className='h-[200px] p-4 bg-white object-cover rounded-lg overflow-hidden'> <img src={MedicineImg} alt="" /> </div>
                    <div className='h-[200px] p-4 bg-white  object-cover rounded-lg overflow-hidden'> <img src={MedicineImg} alt="" /> </div>
                    <div className='h-[200px] p-4 bg-white  object-cover rounded-lg overflow-hidden'> <img src={MedicineImg} alt="" /> </div>
                </div>
            </div>
            {/* details text */}
            <div>
                <h3>Company Vitamin C by Nature’s Bounty for Immune Support
                </h3>
                <h3>Vitamin</h3>

            </div>
        </div>
        
    </div>
  )
}

export default MedicineDetails