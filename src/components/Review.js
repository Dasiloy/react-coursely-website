import React, {
  useState,
} from "react";
import ItemsCarousel from "react-items-carousel";
import ReviewData from "../data/ReviewData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;

  return (
    <div style={{ padding: `0 ${chevronWidth}px 0 20px` }}>
      <ItemsCarousel
        infiniteLoop={false}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={9}
        leftChevron={
          <button className='review-btn'>{"<"}</button>
        }
        rightChevron={
          <button className='review-btn'>{">"}</button>
        }
        outsideChevron={true}
        chevronWidth={40}
        showSlither={true}>
        {ReviewData.map((item) => {
          const { id, desc, img, name, job } = item;
          return (
            <div key={id} className='review-card'>
              <h2 className='heading'>{name}</h2>
              <h5 className='heading'>{job}</h5>
              <p className='heading'>  
                <FaQuoteLeft className='quote-left' />
                {desc}
                <FaQuoteRight className='quote-right' />
              </p>
              <img
                src={img}
                alt={name}
                className='review-image'></img>
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
};


export default Review;
