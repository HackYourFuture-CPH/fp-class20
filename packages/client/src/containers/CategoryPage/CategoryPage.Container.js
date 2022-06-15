import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer.component';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import Navigation from '../../components/Navigation/Navigation.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

const textObj = {
  sidebar: 'Simply Spices / All Spices',
  main: 'All Spices',
};

export const CategoryPage = () => {
  const [breadCrumbs, setBreadcrumbs] = useState(textObj);
  const [products, setProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState(3);

  useEffect(() => {
    categoryproducts();
  }, []);

  const categoryproducts = async () => {
    try {
      const dataJson = await fetch(
        // `http://localhost:5000/api/category/${sortProduct}`,
        `http://localhost:5000/api/category/3`,
      );
      const productsCategory = await dataJson.json();
      setProducts(productsCategory);

      // eslint-disable-next-line no-console
      console.log(productsCategory);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const productItem = products.map((product) => (
    <div className="favorite-item">
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
      <SortBy textObj={breadCrumbs} />
      <div className="category-page-main-container">
        <div className="category-middle-main">
          {productItem}
          {/* <div className="category-middle-main-container">
            <div className="category-product-card-items">
              <div className="category-product-card-item"> </div>
              <div className="category-product-card-item">2</div>
            </div>
            <div className="category-product-card-items">
              <div className="category-product-card-item">3</div>
              <div className="category-product-card-item">4</div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer className="text-big" />
    </>
  );
};
