import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaLock, FaTag } from 'react-icons/fa';

const InfoSec = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-4xl text-red-600" aria-label="Free Shipping Icon" />,
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost.',
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600" aria-label="24/7 Support Icon" />,
      title: 'Support 24/7',
      description: 'We are here to assist you anytime.',
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-red-600" aria-label="Money Back Guarantee Icon" />,
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied.',
    },
    {
      icon: <FaLock className="text-4xl text-red-600" aria-label="Payment Secure Icon" />,
      title: 'Payment Secure',
      description: 'Your payment information is safe with us.',
    },
    {
      icon: <FaTag className="text-4xl text-red-600" aria-label="Discount Icon" />,
      title: 'Best Discounts',
      description: 'Enjoy the best prices on our products.',
    },
  ];

  return (
    <div className='bg-white py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        {infoItems.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center p-6 border rounded-lg shadow-lg
              transform transition-transform duration-300 hover:scale-105 cursor-pointer'
            role='button'
            tabIndex={0}
          >
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold text-gray-800'>{item.title}</h3>
            <p className='mt-2 text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSec;
