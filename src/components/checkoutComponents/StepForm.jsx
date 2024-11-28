import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function StepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSumbit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* step indicator  */}
      <div data-aos="zoom-up" data-aos-duration="1000" className="relative  z-[1] w-[790px] mx-auto">
        <ul  className="step-indicators flex items-center justify-between">
          <li data-aos="zoom-up" data-aos-duration="2000">
            <p className="icon">1</p>
            <span>Delivery</span>
          </li>
          <li data-aos="zoom-up" data-aos-duration="2000">
            <p className="icon">2</p>
            <span>Review and pay</span>
          </li>
          <li data-aos="zoom-up" data-aos-duration="2000">
            <p className="icon">3</p>
            <span>Receipt</span>
          </li>
        </ul>
        <p className="progress-line absolute top-10 left-1/2 translate-x-[-50%] w-[95%] border-[2px] border-dashed bg-indicatorsColor z-[-1]"></p>
      </div>
      {/* form  */}
      <form className="checkout-stepform" onSubmit={handleSubmit(onSumbit)}>
        {/* step 1  */}
        <div className="step-one">
          {/* step title */}
          <div className="w-[882px] mx-auto text-center my-[100px]">
            <h3 data-aos="zoom-up" data-aos-duration="2000" className="text--xl mb-[60px]">
              Where should we deliver your order?
            </h3>
            <p data-aos="zoom-up" data-aos-duration="2000" className="text-[24px] text-[rgba(0,0,0,0.60)]">
              We ensure all packages are shipped in discreet, plain packaging
              with no mention of MyHealthNeedsLondon, guaranteeing your privacy.
            </p>
            <p data-aos="zoom-up" data-aos-duration="2000" className="text-[24px] text-[rgba(0,0,0,0.60)] mt-[30px]">
              In the next step, you can select your preferred delivery method.
              For now, please provide your delivery address to proceed.
            </p>
          </div>
          {/* name & email  */}
          <div data-aos="zoom-in" data-aos-duration="2000" className="grid grid-cols-2 gap-10">
            {/* name  */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[60px]">
              <div>
                <label data-aos="zoom-in" data-aos-duration="2000" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="write your name"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors?.name && <p>{errors.name}</p>}
            </div>
            {/* email  */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[60px]">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="write your email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors?.email && <p>{errors.email}</p>}
            </div>
          </div>
          {/* billing address  */}
          <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[60px]">
            <div>
              <label htmlFor="email">Billing address</label>
              <textarea
                name="billingAddress"
                {...register("billingAddress", {
                  required: "Billing Address is required",
                })}
                placeholder="Address"
              ></textarea>
            </div>
            {errors?.billingAddress && <p>{errors.billingAddress}</p>}
            {/* find location  */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-10 w-fit mx-auto cursor-pointer">
              <div className="flex items-center gap-2 text-[20px] font-medium text-white bg-primary rounded-[10px] py-4 px-6">
                <p className="text-[24px]">
                  <CiLocationOn />
                </p>
                Find my address
              </div>
            </div>
          </div>
          {/* contact, city & post code  */}
          <div data-aos="zoom-in" data-aos-duration="2000" className="grid grid-cols-3 gap-10">
            {/* contact  */}
            <div className="mt-[60px]">
              <label htmlFor="contact">Contact</label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    country={"us"}
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                  />
                )}
                rules={{ required: "Phone number is required" }}
              />
            </div>
            {/* city  */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[60px]">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  {...register("city", { required: "City is required" })}
                />
              </div>
              {errors?.city && <p>{errors.city}</p>}
            </div>
            {/* post code  */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[60px]">
              <div>
                <label htmlFor="email">Postcode</label>
                <input
                  type="number"
                  name="postcode"
                  placeholder="Postcode"
                  {...register("postcode", {
                    required: "Postcode is required",
                  })}
                />
              </div>
              {errors?.postcode && <p>{errors.postcode}</p>}
            </div>
          </div>
          {/* delivery information  */}
          <div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="text-center w-[882px] mx-auto mt-[172px]">
              <h3 className="text--xl mb-5">Delivery Information</h3>
              <p className="text-[24px] text-primary">
                Due to increased demand, our clinical team may take up to 4
                business days to review your suitability for the treatment and
                approve your prescription. Once approved, your order will be
                shipped using your selected delivery method.
              </p>
              <p className="text-[24px] text-primary mt-[30px]">
                <span className="text-[#FF6607]">Please note:</span> Orders
                approved after 4 PM on Friday will be dispatched on the next
                business day (Monday).
              </p>
            </div>
            {/* Royal Mail Tracked */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="mt-[100px] royalmail-radio-wrap">
              <input
                className="hidden"
                id="royalMail"
                type="checkbox"
                name="royalMail"
              />
              <label
                htmlFor="royalMail"
                className="royalMail-radio relative py-[36px] pr-10 pl-[100px] bg-primaryLight border-[2px] border-primryDark rounded-[10px] cursor-pointer"
              >
                <div data-aos="zoom-in" data-aos-duration="2000" className="w-[800px]">
                  <h4 className="text-[24px] font-semibold text-primryDark mb-[10px]">
                    Royal Mail Tracked™
                  </h4>
                  <p>
                    Estimated delivery: 1–2 working days after prescription
                    approval Signature required upon delivery
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StepForm;
