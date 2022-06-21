import React, { useState, useEffect } from 'react';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import { useParams } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

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

    // eslint-disable-next-line
  }, [name]);

  const categoryProducts = async () => {
    try {
      setLoading(true);
      const dataJson = await fetch(`${getApiBaseUrl()}/api/category/${name}`);

      const productsCategory = await dataJson.json();
      setProducts(productsCategory);
      setLoading(false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      setLoading(false);
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
