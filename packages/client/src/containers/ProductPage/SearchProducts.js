// import React, { useContext, useState, useEffect } from 'react';
// import { searchContext } from '../../components/BottomNavBar/Right-bottom-navigation/BottomNavigation.component';
// import getApiBaseUrl from '../../utils/getApiBaseUrl';

// export const SearchProducts = () => {
//   const [fetchResult, setSearchedProducts] = useState([]);
//   const { serchInputValue } = useContext(searchContext);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${getApiBaseUrl()}/api/products?name=${serchInputValue}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('something went wrong');
//         }
//         return response.json();
//       })
//       .then((productTodisplay) => {
//         setSearchedProducts(productTodisplay[0]);
//         setLoading(false);
//       })
//       .catch((err) => setError(err));
//   }, [serchInputValue]);

//   // eslint-disable-next-line no-console
//   console.log(serchInputValue);
// };
