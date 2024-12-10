/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Star } from 'lucide-react';

const FeedbackModal = ({ setOpen }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <DialogContent className="sm:max-w-[650px] px-10 py-6 text-center font-nunito">
      {/* Wrap everything in a container that can scroll and hide scrollbar */}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#052D4C] font-bold font-poppins leading-[1.4] mb-2">
            Give your Feedback
          </DialogTitle>
          <DialogDescription className="text-[#052D4C] text-base">
            {/* modal body */}
            <div className="w-full mt-4">
              {/* title */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold ">How are you felling?</h2>
                <p className="text-lg w-4/5 mx-auto">
                  Your Input is valuable in helping us better understand your
                  needs and tailor our service accordingly
                </p>
              </div>

              {/* Rating */}
              <div className='w-full flex items-center justify-center mt-3 mb-6'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="transition-transform hover:scale-110"
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      size={32}
                      className={`${
                        star <= (hover || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-transparent text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>

              {/* Message */}
              <div>
                <form action="" className="mt-5">
                  <textarea
                    rows={5}
                    className="border resize-none border-[#CDBFBF] p-4 focus:outline-none rounded-md w-full"
                    placeholder="Write your feedback here."
                  />
                  {/* Submit button */}
                  <div className="mt-6 w-full flex items-center justify-center">
                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="bg-[#0CA6FC] text-white font-bold py-3 px-12 rounded-full"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </div>
    </DialogContent>
  );
};

export default FeedbackModal;
