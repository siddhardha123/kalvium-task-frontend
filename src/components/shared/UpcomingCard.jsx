import React from "react";
import { ClockIcon, LocationIcon, LinkIcon } from "../../icons.js";
const UpcomingClassCard = ({ className, time, venue, links }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 flex justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{className}</h3>
        <div className="flex items-center mb-2">
          <ClockIcon/>
          <span className="text-red-600">{time}</span>
        </div>
        <div className="flex items-center mb-2">
          <LocationIcon/>
          <span className="text-red-600">{venue}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <LinkIcon/>
        {links.map((link, id) => (
          <a key={id} href={link.url} className="text-red-600">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClassCard;
