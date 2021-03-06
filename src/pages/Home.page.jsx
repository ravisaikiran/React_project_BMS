//https://github.com/pavankpdev/book-my-show-shapeai
import axios from "axios";
import React,{useState,useEffect} from "react";
import Slider from "react-slick";
//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Premier from "../components/Premier/Premier.component";
//config
import TempPosters from "../config/TempPosters.config";

//axios




const HomePage=()=>{
   const [popularMovies,setPopularMovies]=useState([]);
   const [topRatedMovies,setTopRatedMovies]=useState([]);
   const [upComingMovies,setUpComingMovies]=useState([]);

   useEffect(()=>{
    const requestPopularMovies=async ()=>{
      const getPopularImages=await axios.get("/movie/popular");
      setPopularMovies(getPopularImages.data.results);
    };
    requestPopularMovies();
  },[]);

   useEffect(()=>{
     const requestTopRatedMovies=async ()=>{
       const getTopRatedMovies=await axios.get("/movie/top_rated");
       setTopRatedMovies(getTopRatedMovies.data.results);
     };
     requestTopRatedMovies();
   },[]);

  useEffect(()=>{
    const requestUpComingMovies=async ()=>{
      const getUpComingMovies=await axios.get("/movie/upcoming");
      setUpComingMovies(getUpComingMovies.data.results);
    };
    requestUpComingMovies();
  },[]);
    return (
    <>
     <div className="flex flex-col gap-10">
     <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>
      <div className="bg-bms-800 py-12">
        <div className="container mx-auto px-4 flex flex-col gap-3">
         <div className="hidden md:flex"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
           alt="Premier" className="w-full h-full"/></div>
          <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases every friday." isDark={true} />
         </div>
       </div>
     </div>
     <div className="container mx-auto px-4 my-8">
       <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
     </div>
     <div className="container mx-auto px-4 my-8">
       <PosterSlider images={upComingMovies} title="Outdoor Events" isDark={false}/>
     </div>
    
    </>
    );
};
export default HomePage;