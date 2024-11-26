import DashboardTable from '@/components/Dashboard/Table/DashboardTable';
import DashboardTitle from '@/components/Dashboard/User/DashboardTitle';

const UserDashboardPayments = () => {
  const payments = [
    {
      paymentId: '#2323',
      amount: 350,
      date: '22/11/24',
      paymentMethod: 'Credit Card',
    },
    {
      paymentId: '#2324',
      amount: 500,
      date: '23/11/24',
      paymentMethod: 'PayPal',
    },
    {
      paymentId: '#2325',
      amount: 750,
      date: '24/11/24',
      paymentMethod: 'Bank Transfer',
    },
    {
      paymentId: '#2326',
      amount: 120,
      date: '25/11/24',
      paymentMethod: 'Debit Card',
    },
    {
      paymentId: '#2327',
      amount: 300,
      date: '26/11/24',
      paymentMethod: 'Cash',
    },
    {
      paymentId: '#2328',
      amount: 450,
      date: '27/11/24',
      paymentMethod: 'Credit Card',
    },
    {
      paymentId: '#2329',
      amount: 600,
      date: '28/11/24',
      paymentMethod: 'PayPal',
    },
    {
      paymentId: '#2330',
      amount: 220,
      date: '29/11/24',
      paymentMethod: 'Google Pay',
    },
    {
      paymentId: '#2331',
      amount: 800,
      date: '30/11/24',
      paymentMethod: 'Apple Pay',
    },
    {
      paymentId: '#2332',
      amount: 1000,
      date: '01/12/24',
      paymentMethod: 'Bank Transfer',
    },
    {
      paymentId: '#2333',
      amount: 350,
      date: '02/12/24',
      paymentMethod: 'Cash',
    },
  ];

  return (
    <div>
      <div className="mt-12 bg-white rounded-md px-16 py-10">
        <DashboardTitle title="Payment History" />

        <DashboardTable orders={payments} />
      </div>
    </div>
  );
};

export default UserDashboardPayments;
