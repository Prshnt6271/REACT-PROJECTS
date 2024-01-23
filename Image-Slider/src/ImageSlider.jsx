import { useState } from "react";

const data=[
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://st2.depositphotos.com/1141099/6198/i/450/depositphotos_61983329-stock-photo-historic-charminar.jpg",
  "https://t4.ftcdn.net/jpg/00/47/49/01/360_F_47490128_JLClMTbZyVdxl3OW2m8H4vJHW7hDZ8Jj.jpg"
];

const ImageSlider=()=>{
    const[activeImageIndex,setActiveImageIndex]=useState(0);

    const handlePreviousClick =()=>{
        if(activeImageIndex==0) setActiveImageIndex(data.length-1)
        else
        setActiveImageIndex(activeImageIndex-1);
    }

    const handleNextClick =()=>{
        setActiveImageIndex((activeImageIndex+1) % data.length);
    }
    return(
      <>
      
      <h1 className="font-bold bg-black text-white flex justify-center text-2xl ... container mx-auto p-4 ">IMAGE SLIDER</h1>
        <div className="flex flex-col items-center">
      <button className="absolute left-0 font-bold p-1 m-5 rounded-full flex items-center gap-4 text-white bg-black hover:bg-sky-700 ml-60 mt-60"
onClick={handlePreviousClick}>Previous</button>

      {data.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`wallpaper-${index}`}
          style={{ display: index === activeImageIndex ? "block" : "none" }}
          className="w-[900px] p-14"
        />
      ))}

      <button className="absolute right-0 font-bold p-1 m-5 rounded-full flex items-center gap-4 text-white bg-black hover:bg-sky-700 mr-60 mt-60"
      onClick={handleNextClick}>Next</button>
    </div>
    </>
  
  );
};

export default ImageSlider;

