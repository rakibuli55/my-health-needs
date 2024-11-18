const testimonialData = [
  {
    id: 1,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 1,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 2,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 3,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 4,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 5,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 6,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
  {
    id: 7,
    message:
      "“The company keeps in touch and is very helpful if the customer has any concerns.”",
    imgUrl: "https://i.ibb.co.com/RzBj57y/Ellipse-1988.png",
    clientName: "Pauline",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import ratingImg from "../../assets/images/icon/rating.png"
import { Pagination } from 'swiper/modules';

function TestimonialSection() {
  return (
    <section className="px-[50px]">
      <div className="bg-headerBg rounded-[40px] py-[100px]">
        <div className="container">
          {/* section title  */}
          <div className="mb-[10px] text-center">
            <h3 className="text--xl">Verified Customer Reviews</h3>
          </div>
          <div>
            <Swiper
              spaceBetween={12}
              slidesPerView={4}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
                {
                    testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="py-9 px-[30px] rounded-[10px] bg-white mt-5">
                                <p className="text-[24px] font-bold text-menuLinkColor leading-[36px] mb-6 text-center">{item.message}</p>
                                <img className="w-[115px] h-[20px] mx-auto" src={ratingImg} alt="ratingImg" />
                                <div className="flex items-center justify-center gap-[10px] mt-6">
                                    <img className="w-[48px] h-[48px] rounded-full object-cover" src={item.imgUrl} alt={item.clientName} />
                                    <p className="text-[24px] font-medium">{item.clientName}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
              
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
