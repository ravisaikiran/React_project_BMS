import React from 'react';
//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';

//components
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../config/TempPosters.config";

import {FaCcVisa,FaApplePay} from "react-icons/fa"
const Movie = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <>
        <MovieHero />
        <div className="containe px-4 my-12 lg:w-2/3 lg:ml-20">
           <div className="flex flex-col items-start gap-3">
           <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
            <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth
            together after the death of Clark Kent. Meanwhile, Darkseid sends
            Steppenwolf to Earth with an army to subjugate humans.
            </p>
           </div>
           <div className="my-4">
               <hr />
           </div>
           <div className="my-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
            <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                    <p className="text-gray-600 ">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded-md">
                <div className="w-14 h-10">
                <FaApplePay className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                    <p className="text-gray-600 ">Get 50% off up to INR 250 by paying with Apple pay* on BookMyShow Stream.</p>
                </div>
              </div>
            </div>
           </div>
           <div className="my-4">
               <hr />
           </div>
          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">Cast & Crew</h2>
            <div className="flex flex-wrap gap-4">
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/eiza-gonz_lez-1264796-05-02-2019-11-55-05.jpg"
                castName="Eiza Gonzalez" role="Mayya Simmons"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/blake-lively-7113-24-10-2016-08-19-24.jpg"
                castName="Blake Lively" role="Ilane Andrews"/>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/demian-bichir-1043508-24-03-2017-17-42-07.jpg"
                castName="Demian Bichir" role="Walter Simmons"/>
            </div>
          </div>
          <div className="my-4">
               <hr />
           </div>
          <div className="my-8">
            <PosterSlider config={settings} images={TempPosters} title="You might also like" isDark={false}/>
         </div>
          <div className="my-4">
            <hr />
           </div>
         <div className="my-8">
            <PosterSlider config={settings} images={TempPosters} title="BMS XCLUSIV" isDark={false}/>
         </div>
        </div>
        </>
    );
};
export default Movie;