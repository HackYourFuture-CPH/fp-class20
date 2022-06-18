import './DeliveryDetails.styles.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DeliveryDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  // eslint-disable-next-line no-shadow
  const fetchUser = (id) => {
    fetch(`http://localhost:5000/api/products/2`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json[0]);
      });
  };

  return (
    <div>
      {/* <div className="contact-header"></div> */}
      <div className="contact-outlayer">
        <h1 className="contact-header-text">Contact and Delivary Details</h1>

        <div className="contact" key={data.id}>
          <div className="contact-items">
            <div>
              <span className="name">name:</span>{' '}
              <span className="result">{data.name}</span>
            </div>
            <div>
              <span className="email">email:</span>
              <span className="result">{data.price}</span>
            </div>
            <div>
              <span className="city">city:</span>
              <span className="result">{data.size}</span>
            </div>
            <div>
              <span className="delivery">delivery adress:</span>
              <span className="result">{data.status}</span>
            </div>
            <div>
              <button type="button" className="edit-btn">
                Edit Details
              </button>
            </div>
          </div>
        </div>
        <div className="extra-btns">
          <div>
            <button type="button" className="review-btn">
              REVIEW ORDER
            </button>
          </div>
          <div>
            <button type="button" className="shopping-btn">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryDetails;
