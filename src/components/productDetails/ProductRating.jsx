import { useState } from "react";
import RatingSlider from "./RatngSlider";
import { Link } from "react-router-dom";
import CommentItem from "./CommentItem";

const ProductRating = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const comments = [
    {
      fullname: "john deo",
      usermessage:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus corrupti temporibus eius nobis vitae?",
      postedDate: "March 15, 2024",
    },
    {
      fullname: "michel smith",
      usermessage:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus corrupti temporibus eius nobis vitae?",
      postedDate: "April 15, 2024",
    },
    {
      fullname: "aurther deo",
      usermessage:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus corrupti temporibus eius nobis vitae?",
      postedDate: "March 20, 2024",
    },
  ];

  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">
            Ratings & Reviwes
          </h2>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              className="stroke-gray-300"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="group-open:animate-fadeIn text-neutral-600 border rounded-2xl rounded-t-none px-6 py-5">
          <div className="flex items-center">
            <div className="flex-1 text-center border-r-2">
              <h2>Total Reviews</h2>
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-3xl text-theme font-semibold">10.0K</h2>
                <div className="flex items-center gap-1 bg-green-light text-sm p-1 rounded-xl text-green-400">
                  <span>21%</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                    <path d="M15 7h6v6" />
                  </svg>
                </div>
              </div>
              <p className="text-sm">Growth on reviews on this year</p>
            </div>
            <div className="flex-1 text-center">
              <h2>Average Ratings</h2>
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-3xl font-semibold">4.3</h2>
                <div className="flex items-center gap-1">
                  {new Array(Math.round(4.5))
                    .fill(undefined)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                </div>
              </div>
              <p className="text-sm">Average Ratings on this year</p>
            </div>
          </div>
          <div className="mb-5">
            <RatingSlider />
          </div>
          <div className="mb-5">
            {isLoggedIn ? (
              <div className="w-full">
                <form>
                  <textarea
                    className="border rounded-xl w-full resize-none p-2"
                    placeholder="write your review here..."
                    rows={4}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-theme text-gray-100 px-3 py-2 rounded-xl mt-2"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            ) : (
              <p className="text-gray-400">
                You must be{" "}
                <Link to={"/"} className="text-gray-500 font-semibold">
                  Logged in
                </Link>{" "}
                to post a review.
              </p>
            )}
          </div>
          <div className="border-t-2 mt-6">
            {comments &&
              comments.map((comment, index) => (
                <CommentItem {...comment} key={index} />
              ))}
          </div>
        </div>
      </details>
    </div>
  );
};

export default ProductRating;
