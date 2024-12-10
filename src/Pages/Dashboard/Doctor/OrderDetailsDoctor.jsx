import { RightArrowSvg } from '@/components/SvgContainer/SvgContainer';

const OrderDetailsDoctor = () => {
  return (
    <div>
      {/* top title */}
      <div className="text-[#052D4C] flex items-center font-semibold text-lg gap-2">
        <h2>Order Management</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Details */}
      <div className="mt-5 flex gap-10 font-nunito">
        {/* left content */}
        <div className="px-12 py-16 w-4/5 bg-white   rounded-lg">
          {/* title */}
          <div>
            <h2 className="text-3xl font-bold text-[#052D4C]">
              Order Details{' '}
            </h2>

            {/* description */}
            <div className="text-[#052D4C] mt-7 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Order ID :</p>
                <span className='font-medium'>27346733</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Name :</p>
                <span className='font-medium'>Meloni D</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Email :</p>
                <span className='font-medium'>meloniD@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Date of Birth :</p>
                <span className='font-medium'>23/02/1996</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Gender :</p>
                <span className='font-medium'>Female6</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Phone :</p>
                <span className='font-medium'>+234*********</span>
              </div>
            </div>
          </div>
        </div>

        {/* right contetnt */}
        <div className="px-12 py-16 w-4/5 bg-white   rounded-lg"></div>
      </div>
    </div>
  );
};

export default OrderDetailsDoctor;
