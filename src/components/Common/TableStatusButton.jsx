/* eslint-disable react/prop-types */
const TableStatusButton = ({ title }) => {
    const buttonClass = `
      rounded-2xl px-3 font-medium  capitalize
      ${title === 'completed' ? 'bg-[#198754] text-white' : ''}
      ${title === 'pending' ? 'bg-[#0DCAF0] text-black' : ''}
    `;

    return <button className={buttonClass.trim()}>{title}</button>;
  };

  export default TableStatusButton;

