import {
  DashboardHomeSvg,
  DashboardOrderSvg,
  DashboardPaymentSvg,
} from '@/components/SvgContainer/SvgContainer';
import { Outlet } from 'react-router-dom';
import { DashboardUserSvg } from './../components/SvgContainer/SvgContainer';
import DashboardHeader from '@/components/Dashboard/Header/DashboardHeader';
import DashboardSidebar from '@/components/Dashboard/Sidebar/DashboardSidebar';
import AosProvider from '@/provider/Aos/AosProvider';

const DashboardLayout = () => {
  const userDashboardNavLinks = [
    {
      title: 'Homepage',
      path: '/dashboard/user-homepage',
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
    <AosProvider>
      <div className="min-h-screen max-h-screen flex overflow-hidden font-nunito">
      {/* sidebar */}
      <DashboardSidebar userDashboardNavLinks={userDashboardNavLinks} />

      {/* dashboard */}
      <div className="w-[calc(100%-350px)] min-h-screen max-h-screen">
        {/* dashboard header */}
        <DashboardHeader />

        {/* dashboard contents */}
        <div className="min-h-[calc(100%-88px)] p-10 max-h-[calc(100%-88px)] overflow-y-auto bg-[#F7F7FE] rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
    </AosProvider>
  );
};

export default DashboardLayout;
