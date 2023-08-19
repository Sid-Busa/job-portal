import React from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";

import Button from 'components/Button'
import Logo from 'assets/images/netflix.png';

const Card = ({ job, handleEdit, handleDelete }) => {
  return <div className="flex bg-transparent border border-[#E6E6E6] text-[#212121] rounded-lg py-4 px-6 gap-x-2 relative">
    <div>
      <img src={Logo} alt='logo' />
    </div>
    <div>
      <p className='text-2xl' >{job?.['job-title']}</p>
      <p className='text-base'>{job?.['company-name']} - {job?.['industry']}</p>
      <p className='text-base mb-6 text-[#7A7A7A]'>{job?.['location']} ({job?.['remote-type']})</p>
      <p className='text-base mb-2'>Full-Time (9.00 am - 5.00 pm IST)</p>
      <p className='text-base mb-2'>Experience ({job?.['minimum-experience']} - {job?.['maximun-experience']} years)</p>
      <p className='text-base mb-2'>INR (₹) {job?.['minimum-salary']} - {job?.['maximun-salary']} / Month</p>
      <p className='text-base mb-6'>{job?.['total-employee']} employees</p>
      <Button type={job?.['apply-type'] === 'External Apply' ? 'outline' : 'fill'} title={job?.['apply-type']} />
    </div>
    <div className="flex absolute top-0 right-0 m-2 space-x-2 text-primary text-2xl gap-2">
      <AiOutlineEdit className="cursor-pointer" onClick={() => handleEdit(job)} />
      <AiOutlineClose className="cursor-pointer" onClick={() => handleDelete(job.id)} />
    </div>
  </div>;
};

export default Card;
