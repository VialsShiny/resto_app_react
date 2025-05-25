import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loader from '../components/loader';
import CategoryButton from '../components/categoryButton';
import GetProductsCard from '../components/productCard';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Resto App | Menu';

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

  let selectedCategory = categories.find(category => category.id === categorySelect);

  if (!selectedCategory && categorySelect === 0) {
    selectedCategory = {
      products: categories.flatMap(category => category.products)
    };
  }

  return (
    <>
      <div className="w-full flex flex-col items-center py-6 px-12 pt-16 gap-y-2 font-bold tracking-wide text-center">
        <strong className="text-[#F54748] mb-0">Our Selection</strong>
        <h2 className="lg:max-w-3/4 text-4xl">A Menu That Will Always Capture Your Heart</h2>
      </div>
      <div className="category-container w-full px-12 lg:px-24 py-8 flex lg:grid flex-wrap lg:grid-cols-4 gap-8" id="category-container">
        {loading ? (
          <div className="min-h-56 col-span-4 flex justify-center items-center">
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
      <div className="menu-container w-full min-h-96 py-8 px-12 flex lg:grid flex-wrap lg:grid-cols-4 justify-center gap-8" id="menu-container">
        {loading ? (
          <Loader className='loader-infinite' />
        ) : selectedCategory && (
          <GetProductsCard products={selectedCategory.products} />
        )}
      </div>
    </>
  );
}

export default Menu;