import MeetingScheduleModal from '@/components/Modals/MeetingScheduleModal';
import { Modal } from '@/components/Modals/Modal';
import {
  MeetingSvg,
  RightArrowSvg,
} from '@/components/SvgContainer/SvgContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const OrderDetailsDoctor = () => {
  const [open, setOpen] = useState(false);
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
  ];
  return (
    <div>
      {/* top title */}
      <div className="text-[#052D4C] flex items-center font-semibold text-lg gap-2">
        <h2>Order Management</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Details */}
      <div className="mt-5 flex gap-10 font-nunito w-full">
        {/* left content */}
        <div className="px-12 py-16 w-3/5 bg-white   rounded-lg">
          <div>
            {/* title */}
            <h2 className="text-3xl font-bold text-[#052D4C]">Order Details</h2>

            {/* description */}
            <div className="text-[#052D4C] mt-7 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Order ID :</p>
                <span className="font-medium">27346733</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Name :</p>
                <span className="font-medium">Meloni D</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Email :</p>
                <span className="font-medium">meloniD@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Date of Birth :</p>
                <span className="font-medium">23/02/1996</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Gender :</p>
                <span className="font-medium">Female6</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold ">Phone :</p>
                <span className="font-medium">+234*********</span>
              </div>
            </div>

            {/* order information */}
            <div className="mt-12">
              <div className="mt-12">
                {/* table title */}
                <div className="w-full flex items-center pb-4 border-b border-[#E7EBF4]">
                  <div className="w-1/2 text-start">
                    <h2 className="font-bold text-lg">Description</h2>
                  </div>
                  <div className="w-1/2 font-bold text-lg flex items-center justify-between">
                    <h2>Quantity</h2>
                    <h2 className="mr-8">Price</h2>
                    <h2>Amount</h2>
                  </div>
                </div>

                {/* table body */}
                {medicineInfo?.map((med) => (
                  <div
                    key={med.name}
                    className="w-full flex items-center py-2 border-b border-[#E7EBF4]"
                  >
                    <div className="w-1/2 text-start space-y-2">
                      <h2 className="font-bold text-base">{med?.name}</h2>
                      <p className="text-sm">
                        {med?.quantity} Medicine included{' '}
                      </p>
                    </div>
                    <div className="w-1/2 font-bold text-center text-base flex items-center justify-between pl-5">
                      <h2>{med?.quantity}</h2>
                      <h2>$ {med?.price}</h2>
                      <h2>$ {med?.totalPrice}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Orders */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#052D4C]">Past Order</h2>

            {/* orders */}
            <Accordion type="single" collapsible className='mt-10'>
              <AccordionItem value="item-1" className='border-b-0 '>
                <AccordionTrigger>
                  {/* Header */}
                  <div className='flex items-center gap-10 text-[#052D4C] '>
                    <h2 className='text-lg font-semibold'>Order ID :</h2>
                    <p className='font-medium'>#27346733</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {/* Header */}
                  <div className='flex items-center gap-10 text-[#052D4C] '>
                    <h2 className='text-lg font-semibold'>Order ID :</h2>
                    <p className='font-medium'>#27346733</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* right content */}
        <div className="px-12 py-16 w-2/5 bg-white rounded-lg">
          <div>
            {/* title */}
            <h3 className="text-xl font-bold text-[#052D4C]">
              Manage the order
            </h3>

            {/* filter */}
            <div className="mt-6 flex items-center gap-10">
              <div>
                <Select>
                  <SelectTrigger className="w-40 border font-semibold text-base h-12 rounded-xl px-8 font-nunito">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Select" disabled>
                      Select
                    </SelectItem>
                    <SelectItem value="Approve">Approve</SelectItem>
                    <SelectItem value="Cancel">Cancel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center gap-2 px-5 py-3 text-primary border border-primary rounded-lg text-base font-semibold"
                >
                  Create a New Meeting <MeetingSvg />
                </button>
              </div>
            </div>

            {/* Add Note */}
            <div className="mt-10">
              <h4 className="text-xl font-bold text-[#052D4C]">Add a Note</h4>

              <form action="" className="w-full mt-3">
                <textarea
                  rows={5}
                  className="p-5 rounded-lg border border-[#00000033] w-full resize-none focus:outline-none"
                  placeholder="write your notes..."
                  name="note"
                  id="note"
                ></textarea>

                <button
                  type="submit"
                  className="mt-5 font-semibold px-5 py-3 rounded-lg bg-primary text-white"
                >
                  Assign to Pharmacist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <MeetingScheduleModal setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default OrderDetailsDoctor;
