import {
  DashboardNotification,
  DashboardNotificationIndicatorSvg,
} from '@/components/SvgContainer/SvgContainer';
import { useRef, useState } from 'react';
import DashboardNotificationsContainer from './DashboardNotificationsContainer';
import user from "@/assets/images/user.png"
const DashboardHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const showNotificationsRef = useRef(null);

  useState(() => {
    const handleClickOutside = (e) => {
      if (
        showNotificationsRef.current &&
        !showNotificationsRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="py-8 px-10 min-h-[88px] max-h-[88px] w-full flex items-center justify-between">
      {/* user information */}
      <div className="flex items-center gap-5">
        <div className="size-12 ">
          <img
            className="w-full h-full object-cover rounded-full"
            src={user}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Welcome back, Hawkins</h3>
          <p className="text-[#404A60] text-sm">
            Happy to see you again on your dashboard.
          </p>
        </div>
      </div>

      {/* Notification */}
      <div
        ref={showNotificationsRef}
        className="relative"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <div className="cursor-pointer p-4 rounded-full bg-[#5D69F40D] relative">
          {/* dot */}
          <div className="absolute top-[14px] right-[14px]">
            <DashboardNotificationIndicatorSvg />
          </div>
          <DashboardNotification />
        </div>

        <DashboardNotificationsContainer
          showNotifications={showNotifications}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
