import React, { useState, useEffect } from 'react';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { name } = useParams();
  const textObj = {
    sidebar: `Simply Spices / Spices by plant part / ${name}`,
    main: `${name}`,
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    categoryProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const categoryProducts = async () => {
    try {
      setLoading(true);
      const dataJson = await fetch(
        `http://localhost:5000/api/category/${name}`,
      );

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
    </>
  );
};

export default CategoryPage;
