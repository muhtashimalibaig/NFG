import ProductCard from "../components/ProductCard";
import product1 from "../../public/ChatGPT Image Oct 26, 2025, 12_32_52 AM.png";
import product2 from "../../public/ChatGPT Image Oct 26, 2025, 12_32_44 AM.png";
import product3 from "../../public/ONE.png";
export default function Products() {
  const data = [
    {
      title: "Cozy Light Blue Hoodie",
      description:
        "Stay warm and stylish with this soft, light blue hoodie made from premium cotton. Perfect for casual outings or lounging at home.",
      price: 2350,
      image: product1,
    },
    {
      title: "Sleek Black Leather Jacket",
      description:
        "Elevate your style with this black leather jacket featuring quilted padding for a modern and edgy look. Ideal for evenings and outings.",
      price: 2450,
      image: product2,
    },
    {
      title: "Khaki Cargo Pants",
      description:
        "Versatile khaki cargo pants with multiple pockets, designed for comfort and everyday wear. Perfect for casual and adventure-ready outfits.",
      price: 2800,
      image: product3,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4'>
      <h1 className='text-4xl font-bold text-center text-primary mb-10'>
        Our Products
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {data.map((product, index) => (
          <ProductCard
            key={index}
            id={index}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.image}
          />
        ))}
      </div>
    </div>
  );
}
