import CommonBtn from "../Common/CommonBtn";
import ArrowIcon from "../../assets/images/icon/arrow-up-white.svg"
import personalizedImg from "../../assets/images/personalied-healthcare.png";
import { Link } from "react-router-dom";

function PersonalizedSection() {
  return (
    <section className="px-[50px]">
      <div className="py-[73px] bg-headerBg rounded-[40px]">
        <div className="container">
            <div className="flex items-center gap-[162px]">
                <div className="w-[737px]">
                    <h3 className="text--xl">Personalized Healthcare, Just a Click Away</h3>
                    <p className="text-[24px] font-medium text-categoryBtnColor mt-6">Experience healthcare that's designed around your needs. Access safe, approved treatments without the hassle of waiting rooms. Get genuine prescriptions delivered discreetly to your door, so you can focus on what matters most — your health.</p>
                    <Link to={'/'} className="inline-block mt-10">
                        <CommonBtn text="Learn more" arrowIcon={ArrowIcon} width="45px" height="45px" type="gradient" size="small" />
                    </Link>
                </div>
                <div>
                    <img className="w-[626px] h-[585px]" src={personalizedImg} alt="personalizedImg " />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalizedSection;
