import React from 'react';
import { useState } from 'react';
import { app, auth, storage, storageRef, db } from "../config/firebase.js";
import { uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Define your different form components here
const DashboardForm = () => {
  return <div>Dashboard </div>;
};

const ProductsForm = () => {
  return <div>Products Form</div>;
};

const ProductDetailsForm = () => {
  return <div>Product Details Form</div>;
};

const AddProducts = () => {

  const categories = ['cottonSar-', 'Sar-silk', 'Sar-linen', 'Kur-aline','Kur-casual', 'Kur-straight', 'Kur-angrakha', 'Kur-kaftaan', 'Kur-floor', 'Jew-necklace', 'Jew-earring', 'Jew-maangtika', 'Jew-noserings', 'Jew-bangles', 'Jew-rings', 'Jew-setpieces', 'Dec-wrought'];

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0.0);
  const [desc, setDesc] = useState('');
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(categories[0]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/jpg','image/jpeg']


  const fileHandler = (e) =>{
    let selectedFile = e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
      setFile(selectedFile);
      setError('');

    }else{
      setFile(null);
      setError('Please select a valid Image type jpg/jpeg')
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;
      case 'storage/unknown':
        break;
    }
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <div className='mt-[10px] bg-white rounded-xl h-[580px] w-[600px] p-4'>
      <h1 className='flex justify-around text-2xl font-semibold tracking-widest text-[#8f1434]'>ADD PRODUCTS</h1>
      <hr/>
      <form autoComplete='off' className='' onSubmit={(e) => addProduct(e, category)}>
            <div className='flex flex-row justify-center mt-6'>

                <label htmlFor='productName' className='text-md'>Product Name</label>
                <br/>
                <input
                type='text'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className='ml-4 rounded-md shadow-md bg-gray-200 p-2' required/>


            </div>

            <div className='flex flex-row justify-center mt-6'>

                <label htmlFor='productPrice'>Product Price</label>
                <br/>
                <input
                type='number'
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className='ml-7 rounded-md shadow-md bg-gray-200 p-2' required/>

            </div>

            <div className='flex flex-row justify-center mt-6'>

                <label htmlFor='desc' className=''>Description</label>
                <br/>
                <input
                type='text'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className='ml-8 rounded-md shadow-md bg-gray-200 p-2 h-[100px] w-[260px]' required/>


            </div>


            <div className='flex flex-row justify-center mt-6'>

                  <label htmlFor='stock' className=''>Stock</label>
                  <br/>
                  <input
                  type='number'
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                    className='ml-7 rounded-md shadow-md bg-gray-200 p-2' required/>

            </div>


            <div className='flex flex-row justify-center mt-6'>

                    <label htmlFor='category' className=''>Category</label>
                  <br/>
                  <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='ml-7 rounded-md shadow-md bg-gray-200 p-2'
                  required>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>



            </div>


            <div className='flex flex-row justify-center mt-6'>

                  <br/>
                  <input type='file' className='ml-7 rounded-md shadow-md bg-gray-200 p-2' onChange={fileHandler} id='file' required/>
                  <br/>

            </div>
            <button className='bg-[#8f1434] p-2 w-16 rounded-md shadow-md text-white font-semibold mt-4 ml-[250px] border-2 border-transparent hover:border-black'>ADD</button>


      </form>
      {error && <span>{error}</span>}
    </div>


      </div>

    </>
  );
};

const Customers = () => {
  return <div>Customers</div>;
};

const Orders = () => {
  return <div>Orders</div>;
};

const OrderDetails = () => {
  return <div>Order Details</div>;
};

const Artisans = () => {
  return <div>Artisans</div>;
};

const Grievances = () => {
  return <div>Grievances</div>;
};

const Feedback = () => {
  return <div>Feedback</div>;
};

const ManageAdmins = () => {
  return <div>Manage Admins</div>;
};

const Logout = () => {
  return <div>Logout</div>;
};


const dashboard_display = (props) => {
    //Function to render different forms based on activeOption
    const renderForm = () => {
        switch (props.slide) {
          case "Dashboard":
            return <DashboardForm />;
          case "Products":
            return <ProductsForm />;
          case "Product Details":
            return <ProductDetailsForm />;
          case "Add Products":
            return <AddProducts />;
          case "Customers":
            return <Customers />;
          case "Orders":
            return <Orders/>;
          case "Order details":
            return <OrderDetails/>;
          case "Artisans":
            return <Artisans/>;
          case "Grievances":
            return <Grievances/>;
          case "Feedback":
            return <Feedback/>;
          case "Manage Admins":
            return <ManageAdmins/>;
          case "Logout":
            return <Logout />;
          default:
            return null;
        }
      };
  return (
    <>
    <div className='bg-gray-100 h-screen w-4/5 ml-[303px]'>

         {renderForm()} {/* Render the appropriate form */}

    </div>
    </>
  )
}





export default dashboard_display
