import TableStatusButton from '@/components/Common/TableStatusButton';
import { ViewSvg } from '@/components/SvgContainer/SvgContainer';

/* eslint-disable react/prop-types */
const TableBody = ({ items, columns, action }) => {
  return (
    <>
      {items?.map((item, idx) => (
        <tr
          key={idx}
          className="border-b text-sm md:text-base text-[#052D4C] font-medium "
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
              <div className='cursor-pointer ml-6'>
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
