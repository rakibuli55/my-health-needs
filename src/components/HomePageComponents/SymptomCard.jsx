import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function SymptomCard({ item }) {
  return (
    <div
      className="bg-no-repeat pt-[47px] pb-[40px] px-8 rounded-[20px] bg-[100%_100%] min-h-[412px] flex flex-col"
      style={{ backgroundImage: `url(${item.imgUrl})` }}
    >
      <h3 className="flex grow text-[30px] font-bold leading-normal">
        {item.title}
      </h3>
      <div>
        <Link to={"/"} className="flex items-center gap-[10px] book-btn text-white">
          <p>Book now</p>
          <div>
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SymptomCard;
