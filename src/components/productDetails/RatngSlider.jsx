const RatingSlider = () => {
  const rating = [
    { star: 5, starCounterRange: 79.2, ratingCount: 5 },
    { star: 4, starCounterRange: 29.2, ratingCount: 2 },
    { star: 3, starCounterRange: 59.2, ratingCount: 3 },
    { star: 2, starCounterRange: 9.2, ratingCount: 1 },
    { star: 1, starCounterRange: 0, ratingCount: 0 },
  ];
  return (
    <>
      {rating &&
        rating.map((item, index) => (
          <div className="flex items-center gap-4 my-2" key={index}>
            <div className="flex items-center gap-1">
              <span>{item.star}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <svg
              className="rc-progress-line h-3 rounded-xl"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1.8"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path stroke-green-400"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                strokeWidth="1.8"
                fillOpacity="0"
                style={{
                  strokeDasharray: `${item.starCounterRange}px, 100px`,
                  strokeDashoffset: "0px",
                  transition:
                    "strokeDashoffset 0.3s ease 0s, strokeDasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
            <span>{item.ratingCount}</span>
          </div>
        ))}
    </>
  );
};

export default RatingSlider;
