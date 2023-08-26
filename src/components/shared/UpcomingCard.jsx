import React from 'react';

const UpcomingClassCard = ({ className, time, venue, links }) => {

  const locationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );

  const clockIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const linkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 flex justify-between">
      <div>
      <h3 className="text-xl font-semibold mb-2">{className}</h3>
      <div className="flex items-center mb-2">
        {clockIcon}
        <span className="text-red-600">{time}</span>
      </div>
      <div className="flex items-center mb-2">
        {locationIcon}
        <span className="text-red-600">{venue}</span>
      </div>

      </div>
      
      <div className="flex items-center space-x-2">
        {linkIcon}
        {links.map((link, index) => (
          <a key={index} href={link.url} className="text-red-600">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClassCard;
