import React, { useState, useEffect } from 'react';
// import Footer from '../../components/Footer/Footer.component';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import '../CategoryPageBud/CategoryPageBud.Style.css';

const textObj = {
  sidebar: 'Simply Spices / Spices by plant part / seed',
  main: 'Seed',
};

const CategoryPageSeed = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    categoryProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryProducts = async () => {
    try {
      setLoading(true);
      const dataJson = await fetch(`http://localhost:5000/api/category/seed`);

      const productsCategory = await dataJson.json();
      setProducts(productsCategory);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log(products);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const productItem = products.map((product) => (
    <div className="favorite-item" key={product.name}>
      <ProductCard product={product} variant="small" />
    </div>
  ));
  return (
    <>
      <SortBy textObj={textObj} products={products} setProducts={setProducts} />

      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <div className="category-page-main-container">
          <div className="category-middle-main">{productItem}</div>
        </div>
      )}

      {/* <Footer className="text-big" /> */}
    </>
  );
};

export default CategoryPageSeed;
