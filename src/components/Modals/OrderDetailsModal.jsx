/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PrintSvg } from '../SvgContainer/SvgContainer';

const OrderDetailsModal = ({ setOpen }) => {
  const medicineInfo = [
    {
      name: 'Paracetamol',
      quantity: 5,
      price: 900,
      totalPrice: 4500,
    },
    {
      name: 'Ibuprofen',
      quantity: 3,
      price: 700,
      totalPrice: 2100,
    },
    {
      name: 'Amoxicillin',
      quantity: 1,
      price: 1500,
      totalPrice: 1500,
    },
    // Add more items here for testing scrolling functionality
    {
      name: 'Ciprofloxacin',
      quantity: 2,
      price: 1200,
      totalPrice: 2400,
    },
    {
      name: 'Aspirin',
      quantity: 4,
      price: 500,
      totalPrice: 2000,
    },
    {
      name: 'Paracetamol Extra',
      quantity: 6,
      price: 1100,
      totalPrice: 6600,
    },
  ];

  return (
    <DialogContent className="sm:max-w-[1150px] px-10 py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold font-poppins leading-[1.4] mb-2">
            Your Order
          </DialogTitle>
          <DialogDescription className="text-[#333333] text-base">
            <div className="mb-4">Order #27346733-022</div>
            <div className="flex text-start gap-6 mb-4">
              <div className="space-y-1">
                <p>Order Date</p>
                <p>Delivery Date</p>
              </div>
              <div className="font-bold space-y-1">
                <p>6 March, 2023</p>
                <p>7 March, 2023</p>
              </div>
            </div>
            <div className="border-[#E7EBF4] border my-4" />
          </DialogDescription>
        </DialogHeader>

        {/* modal body */}
        <div className="w-full">
          {/* billing container */}
          <div className="w-full flex items-start justify-start mb-6 text-start">
            <div className="w-1/2 pr-4 ">
              <h3 className="font-bold text-base mb-2">Billed To</h3>
              <div className="space-y-1 text-sm">
                <p className="font-bold text-base">Din Djarin</p>
                <p className="font-bold">dindjarin@gmail.com</p>
                <p>9029 Salt Lake, Mandalor</p>
                <p>(+254) 724-453-233</p>
              </div>
            </div>
            <div className="w-1/2 pl-4 ">
              <h3 className="font-bold text-base mb-2">Shipping To</h3>
              <div className="space-y-1 text-sm">
                <p className="font-bold text-base">Din Djarin</p>
                <p className="font-bold">dindjarin@gmail.com</p>
                <p>9029 Salt Lake, Mandalor</p>
                <p>(+254) 724-453-233</p>
              </div>
            </div>
          </div>

          {/* billing table */}
          <div>
            {/* table title */}
            <div className="w-full flex items-center pb-2 border-b border-[#E7EBF4]">
              <div className="w-1/2 text-start">
                <h2 className="font-bold text-base">Description</h2>
              </div>
              <div className="w-1/2 font-bold text-base flex items-center justify-between">
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Amount</h2>
              </div>
            </div>

            {/* table body */}
            {medicineInfo?.map((med) => (
              <div
                key={med.name}
                className="w-full flex items-center py-2 border-b border-[#E7EBF4]"
              >
                <div className="w-1/2 text-start space-y-1">
                  <h2 className="font-bold text-base">{med?.name}</h2>
                  <p className="text-sm">{med?.quantity} Medicine included </p>
                </div>
                <div className="w-1/2 font-bold text-center text-base flex items-center justify-between pl-5">
                  <h2>{med?.quantity}</h2>
                  <h2>$ {med?.price}</h2>
                  <h2>$ {med?.totalPrice}</h2>
                </div>
              </div>
            ))}

            {/* table footer */}
            <div className="flex w-full">
              <div className="w-1/2"></div>

              {/* Second Half */}
              <div className="w-1/2 mt-6 flex flex-col gap-3 items-center justify-end">
                <div className="w-full flex items-center justify-between text-base pb-2 border-b border-[#E7EBF4]">
                  <h2 className="font-bold">Subtotal</h2>
                  <p className="font-medium">$95,000</p>
                </div>
                <div className="w-full flex items-center justify-between text-base pb-2 border-b border-[#E7EBF4]">
                  <h2 className="font-bold">Total excluding tax</h2>
                  <p className="font-medium">$95,000</p>
                </div>
                <div className="w-full flex items-center justify-between text-base pb-2 border-b border-[#E7EBF4]">
                  <h2 className="font-bold">Discount (2%)</h2>
                  <p className="font-medium">$1,900</p>
                </div>
                <div className="w-full flex items-center justify-between text-base pb-2 border-b border-[#E7EBF4]">
                  <h2 className="font-bold">Total</h2>
                  <p className="font-medium">$93,100</p>
                </div>
                <div className="w-full flex items-center justify-between text-base pb-2 border-b border-[#E7EBF4]">
                  <h2 className="font-bold">Amount Due</h2>
                  <p className="font-medium">$93,100</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-12 w-full flex !items-center !justify-center">
          <button
            onClick={() => setOpen(false)}
            className="px-8 py-3 rounded-full bg-primary text-white flex items-center justify-center gap-2"
          >
            <PrintSvg /> <span>Download Invoice</span>
          </button>
        </DialogFooter>
      </div>
    </DialogContent>
  );
};

export default OrderDetailsModal;
