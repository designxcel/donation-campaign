import React from "react";

const Card = ({ card }) => {
  const { id, image, title, category } = card;
  return (
    <div>
      <div class="relative h-96 flex gap-5 flex-col rounded-xl bg-white bg-clip-border shadow-md">
        <div class=" m-0  rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            
            src={image}
            alt="Clean water for children"
          />

        </div>
        <div class="p-6">
            <h3 className="bg-${category_bg}">{category}</h3>
          <h4 class="font-sans text-2xl font-semibold">
            {title}
          </h4>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
