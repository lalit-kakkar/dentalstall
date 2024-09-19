const About = () => {
  const about = [
    {
      title: "our vision",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, quae perferendis mollitia voluptatibus omnis labore atque, dolores deserunt harum temporibus iste. Cumque amet illum excepturi, suscipit, corrupti delectus eaque minus magnam in dolorem aperiam modi? Cumque, nostrum voluptate. Voluptas hic praesentium aperiam cupiditate eligendi rem. Accusamus possimus modi alias, debitis reiciendis aspernatur voluptatem quos, id architecto aliquid, consectetur in.",
    },
    {
      title: "our mission",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, quae perferendis mollitia voluptatibus omnis labore atque, dolores deserunt harum temporibus iste. Cumque amet illum excepturi, suscipit, corrupti delectus eaque minus magnam in dolorem aperiam modi? Cumque, nostrum voluptate. Voluptas hic praesentium aperiam cupiditate eligendi rem. Accusamus possimus modi alias, debitis reiciendis aspernatur voluptatem quos, id architecto aliquid, consectetur in.",
    },
    {
      title: "history of company",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, quae perferendis mollitia voluptatibus omnis labore atque, dolores deserunt harum temporibus iste. Cumque amet illum excepturi, suscipit, corrupti delectus eaque minus magnam in dolorem aperiam modi? Cumque, nostrum voluptate. Voluptas hic praesentium aperiam cupiditate eligendi rem. Accusamus possimus modi alias, debitis reiciendis aspernatur voluptatem quos, id architecto aliquid, consectetur in.",
    },
    {
      title: "all that we do",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, quae perferendis mollitia voluptatibus omnis labore atque, dolores deserunt harum temporibus iste. Cumque amet illum excepturi, suscipit, corrupti delectus eaque minus magnam in dolorem aperiam modi? Cumque, nostrum voluptate. Voluptas hic praesentium aperiam cupiditate eligendi rem. Accusamus possimus modi alias, debitis reiciendis aspernatur voluptatem quos, id architecto aliquid, consectetur in.",
    },
  ];
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
      <div>
        {about &&
          about.map((content, index) => (
            <div
              className="mb-10 shadow-md shadow-gray-200 rounded-xl"
              key={index}
            >
              <div className="border border bg-lightGray rounded-xl rounded-b-none py-4 px-6">
                <h2 className="capitalize font-semibold">{content.title}</h2>
              </div>
              <div className="border py-4 px-6 rounded-xl rounded-t-none">
                {content.content}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;
