/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
          <DialogTitle className="text-3xl font-bold text-[#052D4C] font-poppins leading-[1.4] mb-2">
            Give your Feedback
          </DialogTitle>
          <DialogDescription className="text-[#333333] text-base">
             
            <div className="border-[#E7EBF4] border my-4" />
          </DialogDescription>
        </DialogHeader>

        {/* modal body */}
        <div className="w-full">

        </div>
      </div>
    </DialogContent>
  );
};

export default OrderDetailsModal;
