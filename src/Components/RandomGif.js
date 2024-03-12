// import {React, useEffect, useState} from 'react';
// import axios from 'axios';
import Spinners from "./Spinners";
import useGif from "../hooks/useGif";

// const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const RandomGif = () => {
  //     const [gif, setGif]=useState('');
  //     const[loading, setLoading] = useState('false');

  // async function fetchData(){
  //     setLoading(true);
  //     const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data}=await axios.get(url);
  //     const imagesource=data.data.images.downsized_large.url;
  //     setGif(imagesource);
  //     setLoading(false);

  // }
  // useEffect(()=>{
  //     fetchData()
  // },[]);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center gap-y-5 w-1/2 bg-green-500 rounded-lg border border-black">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinners /> : <img src={gif} width="450" />}

      <button
        className="w-10/12 bg-white opacity-80 rounded-md py-2 mb-[20px]"
        onClick={() => fetchData()}
      >
        {" "}
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
