import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer.component';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import Navigation from '../../components/Navigation/Navigation.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

const textObj = {
  sidebar: 'Simply Spices / All Spices',
  main: 'All Spices',
};

const CategoryPage = () => {
  const [breadCrumbs, setBreadcrumbs] = useState(textObj);
  const [products, setProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState('/product');

  useEffect(() => {
    categoryProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortProduct]);

  const categoryProducts = async () => {
    try {
      const dataJson = await fetch(`http://localhost:5000/api${sortProduct}`);

      const productsCategory = await dataJson.json();
      setProducts(productsCategory);
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
      <Navigation
        className="toggle-button-bottom"
        setSortProduct={setSortProduct}
        sortProduct={sortProduct}
        setBreadcrumbs={setBreadcrumbs}
      />
      <SortBy
        textObj={breadCrumbs}
        products={products}
        setProducts={setProducts}
      />
      <div className="category-page-main-container">
        <div className="category-middle-main">{productItem}</div>
      </div>
      <Footer className="text-big" />
    </>
  );
};

export default CategoryPage;
