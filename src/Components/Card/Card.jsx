import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, category,category_bg,card_bg,text_category_color } = card || {};
  const cardBg = {
    backgroundColor : card_bg
  }

  const cardCategory = {
    backgroundColor : category_bg,
    color : text_category_color
  }

  const textColor = {
    color : text_category_color
  }
  return (
    <div>
      <Link to={`/cards/${id}`}>
      <div style={cardBg}
      className="relative h-96 m-5 rounded-xl shadow-md">
        <div className="bg-transparent shadow-none">
          <img
            className="w-full"
            src={image}
            alt="Clean water for children"
          />

        </div>
        <div className="p-6 mt-3">
            <h3 style={cardCategory} className="w-[100px] text-center py-2 rounded-lg font-semibold">{category}</h3>
          <h4 style={textColor} className="font-sans text-2xl font-semibold">
            {title}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
