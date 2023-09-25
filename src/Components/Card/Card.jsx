import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, category,category_bg,card_bg } = card || {};
  return (
    <div>
      <Link to={`/cards/${id}`}>
      <div 
      className="relative h-96 flex gap-5 flex-col rounded-xl bg-clip-border shadow-md">
        <div className=" m-0  rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src={image}
            alt="Clean water for children"
          />

        </div>
        <div className="p-6">
            <h3>{category}</h3>
          <h4 className="font-sans text-2xl font-semibold">
            {title}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
