import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';
import UserStatCard from '@/components/Dashboard/User/UserStatCard';
import {
  ConsultationSvg,
  DeliverySvg,
  OrderSvg,
} from '@/components/SvgContainer/SvgContainer';

const UserDashboardHome = () => {
  const userStats = [
    {
      title: 'Consultation Completed',
      count: 5,
      svg: <ConsultationSvg />,
    },
    {
      title: 'Order Placed',
      count: 10,
      svg: <OrderSvg />,
    },
    {
      title: 'Delivered orders',
      count: 4,
      svg: <DeliverySvg />,
    },
  ];

  const orders = [
    {
      orderId: '#101',
      name: 'Ibuprofen',
      orderDate: '12/11/24',
      deliveryDate: '18/11/24',
      price: 450,
      status: 'completed',
    },
    {
      orderId: '#102',
      name: 'Paracetamol',
      orderDate: '13/11/24',
      deliveryDate: '20/11/24',
      price: 250,
      status: 'pending',
    },
    {
      orderId: '#103',
      name: 'Amoxicillin',
      orderDate: '10/11/24',
      deliveryDate: '15/11/24',
      price: 550,
      status: 'completed',
    },
    {
      orderId: '#104',
      name: 'Ciprofloxacin',
      orderDate: '09/11/24',
      deliveryDate: '14/11/24',
      price: 300,
      status: 'pending',
    },
    {
      orderId: '#105',
      name: 'Metformin',
      orderDate: '11/11/24',
      deliveryDate: '16/11/24',
      price: 400,
      status: 'completed',
    },
    {
      orderId: '#106',
      name: 'Lisinopril',
      orderDate: '08/11/24',
      deliveryDate: '13/11/24',
      price: 500,
      status: 'pending',
    },
    {
      orderId: '#107',
      name: 'Atorvastatin',
      orderDate: '14/11/24',
      deliveryDate: '19/11/24',
      price: 600,
      status: 'completed',
    },
    {
      orderId: '#108',
      name: 'Amlodipine',
      orderDate: '07/11/24',
      deliveryDate: '12/11/24',
      price: 350,
      status: 'pending',
    },
    {
      orderId: '#109',
      name: 'Losartan',
      orderDate: '15/11/24',
      deliveryDate: '20/11/24',
      price: 450,
      status: 'pending',
    },
    {
      orderId: '#110',
      name: 'Clopidogrel',
      orderDate: '06/11/24',
      deliveryDate: '11/11/24',
      price: 700,
      status: 'completed',
    },
  ];

  ;
  return (
    <div>
      {/* user stats */}
      <div className="grid grid-cols-3 gap-8">
        {userStats?.map((stat) => (
          <UserStatCard key={stat} stat={stat} />
        ))}
      </div>

      {/* order table */}
      <div className="mt-12 bg-white rounded-md px-16 py-10">
        <DashboardTitle title="My Order" />

        <DashboardTable orders={orders} />
      </div>
    </div>
  );
};

export default UserDashboardHome;
