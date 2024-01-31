import React from 'react';
// import Slider from './components/Slider'; 
import Slider2 from './components/Slider2'; 
// import nature4 from './components/images/nature4.png';
// import nature5 from './components/images/nature5.png';
// import nature7 from './components/images/nature7.png';
// import nature8 from './components/images/nature8.png';
// import nature9 from './components/images/nature9.png';

import cloudimg1 from './components/images/cloudimg1.png';
import cloudimg2 from './components/images/cloudimg2.png';
import cloudimg3 from './components/images/cloudimg3.png';
import cloudimg4 from './components/images/cloud4.png';
const App = () => {
  // const images = [
  //    nature4,
  //    nature5,
  //    nature7,
  //    nature8,
  //    nature9
   
  // ];

  const data = [
    {
      title: "WE ARE DATA CENTER FOR EVERYONE",
      altText: "cloud server network",
      description:
        "The backbone of IT infrastructure has always been the data centres whatever the size of organisation is. Get reliability, Security and Latency using Managed Network Services.",
      featuredImage: cloudimg1,
    },
    {
      title: "EMPOWERING GROWTH WITH REAL DATA",
      altText: "cloud server providers",
      description:
        "(Having a unique goal and journey towards growth? No worries, step in towards the  breakthrough technologies to scale rapidly and eventually, grab hold of emerging opportunities). We, the cloud server providers are here to assist you reinvent your business and rewrite your future. So, wait for what? Why just dream!! When you can build it and grow it like no one else.",
      featuredImage: cloudimg2,
    },
    {
      title: "CLOUD DATA STORAGE FOR YOUR BUSINESS",
      altText: "best cloud servers",
      description:
        "Start your journey with the cloud and best cloud servers for your business to grow. Get support for you and your business at every stage.",
      featuredImage: cloudimg3,
    },
    {
      title: "24x7 DEDICATED SERVERS",
      altText: "cloud computing provider",
      description:
        "Who does not want round the clock services? So, we offer 24*7 best cloud servers for the growth of your business. Take a step ahead to grow your business using Abacus cloud server, a trusted cloud computing provider for secure & reliable solutions.Boost success with leading cloud servers!",
      featuredImage: cloudimg4,
    },
  ];
  

  return (
    <div className="app">
      {/* <h1 style={{textAlign:'center'}}>Image Slider</h1> */}
      {/* <Slider images={images} autoplayInterval={3000} /> */}
      <Slider2 data={data} />
    </div>
  );
};

export default App;
