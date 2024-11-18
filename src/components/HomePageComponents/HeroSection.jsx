import DoctorImg from "../../assets/images/hero-doctor.png"
import CommonBtn from "../Common/CommonBtn";
import ArrowIconBlack from "../../assets/images/icon/arrow-up-black.svg"
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="px-[47px] pt-20">
      <div className="bg-primary rounded-[40px]">
        <div className="container">
          <h1 className="text-[320px] font-bold text-white text-center">Pharmacy</h1>
          <div className="flex items-end justify-between mt-[-200px]">
            <p className="w-[510px] text-[24px] text-white pb-[85px]">Operational bottlenecks, frequent billing errors, and mismanaged schedules can lead to revenue loss and frustrated patients.</p>
            <img className="" src={DoctorImg} alt="DoctorImg" />
            <Link to={'/'} className="pb-[85px]">
                <CommonBtn text="Book an appointment" arrowIcon={ArrowIconBlack} height="60px" width="60px" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
