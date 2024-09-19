const CategoryCard = ({ image, name }) => {
  return (
    <div className="rounded-2xl flex items-center flex-col gap-2">
      <img
        loading="lazy"
        src={image}
        className="object-cover rounded-2xl"
        alt="CATEGORY_IMAGE"
      />
      <h2 className="font-medium capitalize w-full text-center text-wrap">
        {name}
      </h2>
    </div>
  );
};

export default CategoryCard;
