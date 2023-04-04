import React, { useEffect, useState } from "react";
import '../pages/PageCss/Shop.css'
import DarkMode from '../components/DarkMode';
import updateitems from "./Database";


const Shop = () => {
  const [Clothes, setClothes] = useState("");
  const [Title, setTitle] = useState("");
  var list = [];

  const fetchUp = async () => {
    const items = Object.values(updateitems);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      list.push(
        <div key={i} className="item">
          <img src={item.image} className="Image" height="70%" alt="Clothes" />
          <div className="Desc1">{item.title}</div>
          <br />
          <div className="Desc2">${item.price}</div>
        </div>
      );
    }
    setClothes(list);
    setTitle();
  }

  //Get diffrent catagories from the catagory
  const fetchCat = async () => {
    if (document.getElementById('select').value !== 'all') {
      var cat = document.getElementById('select').value;
      const items = Object.values(updateitems);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.category === cat) {
          list.push(
            <div key={i + 1} className="item">
              <img key={i + 2} src={item.image} className="Image" height="70%" alt="Clothes" />
              <div key={i + 3} className="Desc1">{item.title}</div>
              <div key={i + 4} className="Desc2">${item.price}</div>
            </div>
          )
        }
      }
      setClothes(list)
      setTitle(document.getElementById('select').value);
    }
    else {
      fetchUp();

    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchUp();

  }, []);
  return (
    <div className="text">
      <div className="h1"><h1 className="h1h1">{Title}</h1></div>
      <select id="select" onChange={() => fetchCat()}>
        <option value="all" selected>All Products</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value='jewelery'>Jewelery</option>
        <option value='other'>Other</option>
      </select>

      <div id="content">
        {Clothes}
      </div>

    </div>

  );
};
export default Shop;