import TableStatusButton from '@/components/Common/TableStatusButton';
import { ViewSvg } from '@/components/SvgContainer/SvgContainer';

import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const TableBody = ({ items, columns, action }) => {
  const navigate = useNavigate();
  return (
    <>
      {items?.map((item, idx) => (
        <tr
          onClick={() => navigate('/dashboard/user/order-details')}
          key={idx}
          className="border-y hover:bg-primary/20 transition duration-300 text-sm md:text-base text-[#052D4C] font-medium cursor-pointer"
        >
          {columns.map((column, colIdx) => (
            <td
              key={colIdx}
              className={`whitespace-nowrap px-4 py-2 ${
                colIdx === 0 ? 'text-[#898989]' : 'text-[#404A60]'
              } md:px-5 md:py-4`}
            >
              {column === 'status' ? (
                <TableStatusButton title={item[column]} />
              ) : column === 'price' ? (
                `$${item[column]}`
              ) : (
                item[column]
              )}
            </td>
          ))}

          <td>
            {action && (
              <div className="cursor-pointer ml-6">
                <ViewSvg />
              </div>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
