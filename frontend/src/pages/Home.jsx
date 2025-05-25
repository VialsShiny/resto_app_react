import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loader from '../components/loader';
import GetProductsCard from '../components/productCard'
import CategoryButton from '../components/categoryButton';

const logo = 'http://localhost:8000/storage/assets/logo/restoApp.svg';

function ViewMoreArrow() {
  return (
    <div className="w-full flex justify-center">
      <Link className="p-2 hover:translate-x-3 transition-all duration-300" to="/menu">
        <i className="ri-arrow-right-line text-[#F54748] text-6xl font-light"></i>
      </Link>
    </div>
  );
}

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Resto App | Home';

    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/categories/with/products');
        if (!res.ok) throw new Error('Erreur lors du fetch');

        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectedCategory = categories.find(category => category.id === categorySelect);

  return (
    <>
      <section className="relative w-full">
        <div className="h-screen bg-[url('http://localhost:8000/storage/assets/home/title_bg.png')] bg-cover bg-center">
          <div className="h-full w-full bg-black/30 flex flex-col gap-y-3 justify-center items-center px-6 text-center">
            <div className="inline-flex gap-2 items-center bg-[#FDD6D6] bg-opacity-90 rounded-full px-4 py-1 mb-4 text-sm font-semibold text-red-600 hover:-translate-y-1.5 transition-all duration-500">
              Beyond Speed
              <i className="ri-restaurant-2-fill"></i>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
              Ensure Your
              <span className="text-red-600">
                Food
              </span>
              is Delivered with Speed
            </h2>
            <p className="text-white text-xs sm:text-sm mt-3 max-w-xs sm:max-w-md md:max-w-lg leading-snug">
              Our mission is to deliver your appetite with delectable dishes delivered safely and of
              missing a beat
            </p>
            <a href="/menu" className="mt-6 bg-[#F54748] hover:bg-red-600 text-white text-xs sm:text-sm font-semibold rounded-full px-6 py-2 transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 my-24">
        <div className="w-full flex flex-col items-start py-6 px-12 gap-y-2 font-bold tracking-wide">
          <strong className="text-[#F54748] mb-0">Our Offerings</strong>
          <h2 className="lg:max-w-3/4 text-3xl lg:text-4xl">Your Preferred Food Delivery Companion</h2>
        </div>
        <div className="flex flex-wrap justify-evenly gap-6 pt-12">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-xl ring-white ring-1 hover:ring-[#F54748] hover:-translate-y-3 p-6 max-w-xs mx-auto sm:mx-0 transition-all duration-700">
            <img className="w-60 h-60 object-contain mb-4" src="http://localhost:8000/storage/assets/home/delivery_1.png" alt="A delivery guy showing a phone, and he have a box in his hands" />
            <h3 className="font-semibold text-base mb-1 text-center">
              Convenient Ordering
            </h3>
            <p className="text-xs text-gray-500 text-center">
              Ordering food anytime just a few simple steps
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-xl ring-white ring-1 hover:ring-[#F54748] hover:-translate-y-3 p-6 max-w-xs mx-auto sm:mx-0 transition-all duration-700">
            <img className="w-60 h-60 object-contain mb-4" src="http://localhost:8000/storage/assets/home/delivery_2.png" alt="A delivery guy driving a motorcycle" />
            <h3 className="font-semibold text-base mb-1 text-center">
              Quickest Delivery
            </h3>
            <p className="text-xs text-gray-500 text-center">
              Consistently Timely Delivery, Even if Late!
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-xl ring-white ring-1 hover:ring-[#F54748] hover:-translate-y-3 p-6 max-w-xs mx-auto sm:mx-0 transition-all duration-700">
            <img className="w-60 h-60 object-contain mb-4" src="http://localhost:8000/storage/assets/home/delivery_3.png" alt="A delivery guy with a box in his hands and a motorcycle in the back" />
            <h3 className="font-semibold text-base mb-1 text-center">
              Superior Quality
            </h3>
            <p className="text-xs text-gray-500 text-center">
              For us, quality is paramount, not just speed
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 px-12 py-16">
        <div className="category-container w-full lg:px-24 py-8 flex lg:grid flex-wrap lg:grid-cols-4 gap-8" id="category-container">
          {loading ? (
            <div className='flex lg:grid w-full lg:w-auto justify-center lg:justify-end lg:col-span-2'>
              <Loader />
            </div>
          ) : categories.map((category) => {
            return (
              <CategoryButton
                key={category.id}
                category={category}
                categorySelect={categorySelect}
                setCategorySelect={setCategorySelect}
              />
            )
          })
          }
        </div>
        <div className="relative menu-container w-full min-h-96 py-8 lg:px-12 flex lg:grid flex-wrap lg:grid-cols-4 justify-center items-center gap-8" id="menu-container">
          {loading ? (
            <Loader className='loader-infinite' />
          ) : selectedCategory && (
            <>
              <GetProductsCard products={selectedCategory.products.slice(0, 3)} />
              <ViewMoreArrow />
            </>
          )}
        </div>
      </section>
      <section className="mb-20 bg-[#F54748] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20">
          <div className="max-w-md md:max-w-lg">
            <p className="text-xs uppercase font-semibold tracking-widest mb-2 opacity-80">
              Customer Testimonials
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4 max-w-sm">
              What Customers Have to Say About Us
            </h3>
            <p className="text-xs leading-relaxed max-w-sm mb-6 opacity-90">
              “Pizzateria is exceptional, with a wide array of delicious meals and excellent service,
              including remarkably fast delivery. I wholeheartedly recommend Pizzateria to you.”
            </p>
          </div>
          <img src="http://localhost:8000/storage/assets/home/review_pizza_home.png" alt="A Pizza" />
        </div>
      </section>
    </>
  );
};

export default Home;
