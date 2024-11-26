/* eslint-disable react/prop-types */

import TableHead from './TableHead';
import TableBody from './TableBody';

const DashboardTable = ({ orders }) => {
  const headers = Object.keys(orders[0]);
  return (
    <div className="rounded-lg bg-white  md:rounded-xl lg:rounded-2xl">
      <div className="overflow-x-auto">
        <table className="  w-full font-inter md:mt-10">
          <thead>
            <TableHead titles={headers} />
          </thead>

          <tbody>
            <TableBody columns={headers} items={orders} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
