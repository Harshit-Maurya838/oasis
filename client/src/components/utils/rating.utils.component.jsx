import React from "react";

const StarRating = ({ rating }) => {
  // Round down the rating for fully filled stars
  const filledStars = Math.floor(rating);
  // Get the fractional part of the rating
  const fractionalPart = rating - filledStars;
  // Calculate the number of empty stars
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={`filled-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFD700"
          width="24"
          height="24"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.196-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164L.133 9.214l8.2-1.196z" />
        </svg>
      ))}

      {/* Render fractional star */}
      {fractionalPart > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ position: "relative" }}
        >
          <defs>
            <clipPath id="fraction-clip">
              <rect x="0" y="0" width={24 * fractionalPart} height="24" />
            </clipPath>
          </defs>
          <g>
            {/* Full star clipped to the fractional part */}
            <path
              d="M12 .587l3.668 7.431 8.2 1.196-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164L.133 9.214l8.2-1.196z"
              fill="#FFD700"
              clipPath="url(#fraction-clip)"
            />
            {/* Empty star outline */}
            <path
              d="M12 .587l3.668 7.431 8.2 1.196-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164L.133 9.214l8.2-1.196z"
              fill="none"
              stroke="#ccc"
              strokeWidth="1"
            />
          </g>
        </svg>
      )}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ccc"
          width="24"
          height="24"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.196-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164L.133 9.214l8.2-1.196z" />
        </svg>
      ))}

      {/* Display numeric rating */}
      <span style={{ marginLeft: "8px", fontSize: "16px", color: "grey" }}>{rating} stars</span>
    </div>
  );
};

export default StarRating;
