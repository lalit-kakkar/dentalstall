import productImage from "../assets/product.png";
import {
  AddSlider,
  BrandSection,
  CategorySection,
  FAQSection,
  HeroSlider,
  ProductSection,
  TopCategorySection,
} from "../components/home/index";

const products = [
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric amalgam capsules",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric amalgam capsules",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
  {
    productImage: productImage,
    productName: "waldent electric pulp tester",
    rating: 4.5,
    reviewCount: 10,
    amount: 170,
    discountedAmount: 160,
  },
];

const Home = () => {
  return (
    <div className="bg-lightGray">
      <HeroSlider />
      <BrandSection />
      <CategorySection />
      <ProductSection
        sectionTitle={"Best Selling Products"}
        bgColor="bg-white"
        products={products}
      />
      <AddSlider />
      <ProductSection
        sectionTitle={"Endodontics"}
        bgColor="bg-white"
        products={products}
      />
      <AddSlider />
      <TopCategorySection />
      <ProductSection sectionTitle={"Endodontics"} products={products} />
      <FAQSection />
    </div>
  );
};

export default Home;
