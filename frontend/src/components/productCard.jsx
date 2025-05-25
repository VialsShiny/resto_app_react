import { Link } from "react-router-dom";

const GetProductsCard = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs w-full rounded-2xl overflow-hidden shadow-lg animate__animated animate__fadeIn animate__fast"
        >
          <div className="relative">
            <img
              alt={product.description}
              className="w-full object-cover h-50"
              src={`http://localhost:8000/storage/assets/menu/${product.image}`}
              width="400"
            />
            <button
              aria-label="Favorite"
              className="absolute top-3 right-3 text-red-500 text-xl"
            >
              <i className="ri-heart-3-line hover:ri-heart-3-fill"></i>
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-[#F54748] to-transparent flex justify-center">
              <Link
                to={`/menu/${product.id}`}
                aria-label="Add to cart"
                className="absolute -bottom-5 bg-[#F54748] hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition duration-500"
              >
                <i className="ri-shopping-cart-line"></i>
              </Link>
            </div>
          </div>
          <div className="bg-white pt-12 pb-6 px-6 text-center rounded-b-2xl">
            <h2 className="font-inter font-semibold text-lg text-black mb-1">
              {product.name}
            </h2>
            <p className="text-red-500 font-semibold text-2xl mb-2">
              {product.price}€
            </p>
            <div className="flex justify-center space-x-1 mb-4 text-yellow-400 text-sm">
              <i className="ri-shining-fill"></i>
              <i className="ri-shining-fill"></i>
              <i className="ri-shining-fill"></i>
              <i className="ri-shining-fill"></i>
              <i className="ri-shining-line"></i>
            </div>
            <Link
              to={`/menu/${product.id}`}
              className="bg-red-500 text-white text-sm rounded-full px-8 py-2 hover:bg-red-600 transition duration-500"
            >
              View more...
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default GetProductsCard;
