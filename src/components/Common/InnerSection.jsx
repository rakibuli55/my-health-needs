import Breadcrumb from "./Breadcrumb";

function InnerSection({ bgImg, service }) {
  return (
    <section className="px-9 mt-10">
      <div
        className=" bg-no-repeat py-[218px] rounded-[20px] bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h1 className="text-[76px] font-bold leading-normal text-menuLinkColor text-center">
            {service}
          </h1>
          <div className="text-center">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerSection;
