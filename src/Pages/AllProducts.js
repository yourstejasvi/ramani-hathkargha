import React, { useEffect , useState} from 'react';
import { displayAllProducts } from '../config/firebase.jsx';

import Navigation from "../components/navigation.jsx";
import Filter from "../components/filter.jsx";

import Pic1 from "../Assets/weaving-work-banarasi-silk-traditional-saree-in-purple-276381.jpg";
import Pic2 from "../Assets/woman-5829242_1280.jpg";
import Pic3 from "../Assets/s-l1200.jpg";

import Card from '../components/card.jsx';

const AllProducts = () => {


    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     displayAllProducts().then((products)=> setProducts(products.docs));

    // },[]);

    const products = [
      {
        id:1,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic1,
      },
      {
        id:2,
        productName:"Pashmina blue Saree",
        productPrice:3000,
        desc:"Lorem ipsum, loremipsum, loremipsum,loremipsum",
        size:"Free-Size",
        src:Pic2,
      },
      {
        id:3,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic3,
      },
      {
        id:4,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic1,
      },
      {
        id:5,
        productName:"Pashmina blue Saree",
        productPrice:3000,
        desc:"Lorem ipsum, loremipsum, loremipsum,loremipsum",
        size:"Free-Size",
        src:Pic2,
      },
      {
        id:6,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic3,
      },
      {
        id:7,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic1,
      },
      {
        id:8,
        productName:"Pashmina blue Saree",
        productPrice:3000,
        desc:"Lorem ipsum, loremipsum, loremipsum,loremipsum",
        size:"Free-Size",
        src:Pic2,
      },
      {
        id:9,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic3,
      },
      {
        id:10,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic1,
      },
      {
        id:11,
        productName:"Pashmina blue Saree",
        productPrice:3000,
        desc:"Lorem ipsum, loremipsum, loremipsum,loremipsum",
        size:"Free-Size",
        src:Pic2,
      },
      {
        id:12,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic3,
      },
      {
        id:13,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic1,
      },
      {
        id:14,
        productName:"Pashmina blue Saree",
        productPrice:3000,
        desc:"Lorem ipsum, loremipsum, loremipsum,loremipsum",
        size:"Free-Size",
        src:Pic2,
      },
      {
        id:15,
        productName:"Banaras Hathkargha Saree",
        productPrice:100,
        desc:"Lorem ipsum huh handcrafted, block printed, beautiful lorem ipsum saree, accentuating the looks",
        size:"Free-Size",
        src:Pic3,
      },
    ]

  return (
        <>
            <Navigation />
             <div className='grid grid-cols-3 gap-24 ml-[130px] mt-[120px]'>
                  {products.map(product => (
                    <Card key={product.id} {...product} />
                  ))}
            </div>
        
        </>

          

  );
};
        
        



export default AllProducts