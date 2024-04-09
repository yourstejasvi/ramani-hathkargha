// import React from 'react'
// import { TbFilterSearch } from "react-icons/tb";
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// const filter = () => {
//   return (
//     <div>
//         <div className='relative w-1/5 h-[700px] bg-white drop-shadow-md'>
      
//       <div className='p-10 ml-14'>
//         <h1 className='flex flex-row text-2xl tracking-widest font-salsa'>Filters<TbFilterSearch style={{marginTop:'2',marginLeft:'3'}}/></h1>
//       </div>
      
//       <FormGroup>

//           <h1 className='pl-12 -mt-5 text-xl text-black tracking-widest font-salsa'>Brands</h1>

//           {brands.map((object) => (
//             <>
//                   <FormControlLabel key={object.id} control={<Checkbox />} label={object.name} style={{marginLeft:'25px',marginTop:'-4px'}} />
//             </>
//           ))}
          
//       </FormGroup>
//       <FormGroup>

//           <h1 className='pl-12 mt-5 text-xl text-black tracking-widest font-salsa'>Products</h1>

//           {Products.map((object) => (
//             <>
//                   <FormControlLabel key={object.id} control={<Checkbox />} label={object.name} style={{marginLeft:'25px',marginTop:'-4px'}} />
//             </>
//           ))}
          
//       </FormGroup>
//       <h1 className='pl-12 mt-10 text-xl text-black tracking-widest font-salsa'>Price Range</h1>
//       <Box sx={{ width: 150, marginLeft:'50px', marginTop:'20px' }}>
//             <Slider
//               getAriaLabel={() => 'Price range'}
//               value={value}
//               onChange={handleChange}
//               valueLabelDisplay="auto"
//               getAriaValueText={valuetext}
//               sx={{
//                 color:'black', 
//                 '& .MuiSlider-thumb': {
//                   backgroundColor: 'black',
//                 },
//                 '& .MuiSlider-rail': {
//                   backgroundColor: 'black', 
//                 },
//                 '& .MuiSlider-track': {
//                   backgroundColor: 'black', 
//                 },
//               }}
//               min={200}
//               max={5000}
//               step={100}
//             />
//       </Box>
//     </div>

    
//     </div>
//   )
// }

// export default filter