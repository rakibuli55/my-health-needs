import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="px-[50px] text-white mb-10">
      <div className="pt-[70px] pb-[117px] bg-primryDark rounded-[40px]">
        <div className="container">
          <div className="flex items-start justify-between gap-[100px]">
            {/* footer box  */}
            <div className="footer-box">
              <img className="w-[67px] h-[67px]" src={Logo} alt="logo" />
              <p className="w-[444px] mt-6">
                We’ll show you exactly how you can achieve 30% increase in
                revenue and a 99.9% claim rate within 120 days—while focusing
                more on patient care.
              </p>
              {/* footer social  */}
              <ul className="flex items-center gap-8 text-[24px] mt-6">
                <li>
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
              {/* footer contacts  */}
              <ul className="footer-contacts mt-[50px]">
                <li>
                  <TiLocationOutline />
                  23 Main Street, 12345,Pakistan
                </li>
                <li className="mt-7">
                  <MdOutlineEmail />
                  <Link to={"/"}>alihassanux@gmail.com</Link>
                </li>
                <li className="mt-7">
                  <MdOutlinePhone />
                  <Link to={"/"}>1234567890</Link>
                </li>
              </ul>
            </div>
            {/* footer box  */}
            <div className="footer--box links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to={"/"}>Medical Billing</Link>
                </li>
                <li>
                  <Link to={"/"}>Medical Coding</Link>
                </li>
                <li>
                  <Link to={"/"}>Revenue Cycle Management</Link>
                </li>
                <li>
                  <Link to={"/"}>Practice Management</Link>
                </li>
                <li>
                  <Link to={"/"}>Account Receivable</Link>
                </li>
                <li>
                  <Link to={"/"}>Provider Credentialing</Link>
                </li>
                <li>
                  <Link to={"/"}>Medical Virtual Staffing (Remote)</Link>
                </li>
              </ul>
            </div>
            {/* footer box  */}
            <div className="footer--box links">
              <h4>Customer Support</h4>
              <ul>
                <li> 
                  <Link to={"/"}>FAQ’s</Link>
                </li>
                <li>
                  <Link to={"/"}>Knowledge Base</Link>
                </li>
                <li>
                  <Link to={"/"}>Privacy policy</Link>
                </li>
                <li>
                  <Link to={"/"}>Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            {/* footer box  */}
            <div className="footer--box links">
              <h4>Useful Links</h4>
              <ul>
                <li> 
                  <Link to={"/"}>Careers</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact us</Link>
                </li>
                <li>
                  <Link to={"/"}>Unsubscribe</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
