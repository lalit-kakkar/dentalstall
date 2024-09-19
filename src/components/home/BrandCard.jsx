const BrandCard = ({ bgColor, name, image }) => {
  return (
    <div className="flex items-center flex-col justify-center border rounded-2xl py-6 px-3 shadow-md">
      <div className="rounded-full p-3" style={{ background: `${bgColor}` }}>
        <img
          src={image}
          className="w-10 h-10"
          loading="lazy"
          alt="BRAND_IMAGE"
        />
      </div>
      <h2 className="font-medium capitalize">{name}</h2>
    </div>
  );
};

export default BrandCard;
