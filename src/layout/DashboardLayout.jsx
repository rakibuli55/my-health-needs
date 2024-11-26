import {
  DashboardHomeSvg,
  DashboardLogoutSvg,
  DashboardOrderSvg,
  DashboardPaymentSvg,
  LogoSvg,
} from '@/components/SvgContainer/SvgContainer';
import { Link } from 'react-router-dom';
import { DashboardUserSvg } from './../components/SvgContainer/SvgContainer';
import UserDashboardSidebar from '@/components/Dashboard/Sidebar/UserDashboardSidebar';
import DashboardHeader from '@/components/Dashboard/Header/DashboardHeader';

const DashboardLayout = () => {
  const userDashboardNavLinks = [
    {
      title: 'Homepage',
      path: '/dashboard',
      icon: DashboardHomeSvg,
    },
    {
      title: 'Order History',
      path: '/dashboard/user-order-history',
      icon: DashboardOrderSvg,
    },
    {
      title: 'My Payments',
      path: '/dashboard/user-payments',
      icon: DashboardPaymentSvg,
    },
    {
      title: 'My Profile',
      path: '/dashboard/user-profile',
      icon: DashboardUserSvg,
    },
  ];

  return (
    <div className="min-h-screen max-h-screen flex overflow-hidden font-nunito">
      {/* sidebar */}
      <div className="min-h-screen max-h-screen w-[350px] p-8">
        {/* logo */}
        <div className="w-full flex items-center justify-center">
          <Link to="/dashboard">
            <LogoSvg />
          </Link>
        </div>

        {/* dash */}
        <div className="w-full border-dashed border-t border-[#5D69F4]/30 my-6" />

        {/* dashboard navLinks */}
        <UserDashboardSidebar userDashboardNavLinks={userDashboardNavLinks} />

        {/* logout */}
        <div className="mt-4 w-full flex gap-3 items-center px-6 py-3 rounded-2xl  group duration-500 transition hover:bg-activeColor cursor-pointer">
          <DashboardLogoutSvg />
          <span
            className={`text-lg group-hover:text-white transition duration-500 text-textColor`}
          >
            Logout
          </span>
        </div>
      </div>

      {/* dashboard */}
      <div className="w-[calc(100%-350px)] min-h-screen max-h-screen">
        {/* dashboard header */}
        <DashboardHeader />

        {/* dashboard contents */}
        <div className="min-h-[calc(100%-88px)] max-h-[calc(100%-88px)] overflow-y-auto bg-[#F7F7FE]"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
