import React, { useEffect, useState } from "react";
import '../pages/PageCss/Shop.css'

const Shop = () => {
  const [Clothes, setClothes] = useState("");
  const [Title, setTitle] = useState("");
  var list = [];

  // This function is grabbing all the data needed from api
  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const json = await response.json();
    json.map((json, i) => {
      return (
        list.push(
          <div key={i + 1} className="item">
            <img key={i + 2} src={json.image} className="Image" height="70%" alt="Clothes" />
            <div key={i + 3} className="Desc1">{json.title}</div>
            <br />
            <div key={i + 4} className="Desc2">${json.price}</div>
          </div>
        )
      )
    })
    setClothes(list)
    setTitle('All Products')
  };


  //Get diffrent catagories from the catagory
  const fetchCat = async () => {
    if (document.getElementById('select').value !== 'all') {
      const jresponse = await fetch(`https://fakestoreapi.com/products/category/${document.getElementById('select').value}`);
      const jjson = await jresponse.json();
      console.log(jjson);
      jjson.map((jjson, i) => {
        return (
          list.push(
            <div key={i + 1} className="item">
              <img key={i + 2} src={jjson.image} className="Image" height="70%" alt="Clothes" />
              <div key={i + 3} className="Desc1">{jjson.title}</div>
              <br />
              <div key={i + 4} className="Desc2">${jjson.price}</div>
            </div>
          )
        )
      })
      setClothes(list)
      setTitle(document.getElementById('select').value);
    }
    else {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text">
      <div className="h1"><h1 className="h1h1">{Title}</h1></div>
      <select id="select" onChange={() => fetchCat()}>
        <option value='jewelery'>Jewelery</option>
        <option value='electronics'>Electronics</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="all" selected>All Products</option>
      </select>

      <div id="content">
        {Clothes}
      </div>

    </div>

  );
};
export default Shop;