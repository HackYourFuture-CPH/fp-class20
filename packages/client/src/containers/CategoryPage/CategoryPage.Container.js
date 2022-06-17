import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer.component';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';

// eslint-disable-next-line import/no-cycle
import Navigation from '../../components/Navigation/Navigation.component';

import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

// eslint-disable-next-line import/no-cycle
// import { ApiName } from '../../components/BottomNavBar/BottomNavBar.component';

const textObj = {
  sidebar: 'Simply Spices / All Spices',
  main: 'All Spices',
};

const CategoryPage = () => {
  const [breadCrumbs, setBreadcrumbs] = useState(textObj);
  const [products, setProducts] = useState([]);
  const [sortProduct, setSortProduct] = useState('');

  // const query = useContext(ApiName);
  // const api = `http://localhost:5000/api/category/fruit`;

  useEffect(() => {
    categoryProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortProduct, products]);

  const categoryProducts = async () => {
    try {
      // const dataJson = await fetch(api);
      const dataJson = await fetch(
        `http://localhost:5000/api/category${sortProduct}`,
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
    <div className="favorite-item" key={product.name}>
      <ProductCard product={products} variant="small" />
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
      <SortBy textObj={breadCrumbs} setProducts={setProducts} />
      <div className="category-page-main-container">
        <div className="category-middle-main">{productItem}</div>
      </div>
      <Footer className="text-big" />
    </>
  );
};

export default CategoryPage;
