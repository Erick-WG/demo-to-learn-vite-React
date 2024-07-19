import React from 'react';


function LogoLinks({obj}){
  return (
      obj.map((LogoItem)=>{
        return (
          <>
            <a href={LogoItem.link} target="_blank">
              <img src={LogoItem.img} className={LogoItem.className} alt={LogoItem.alt} />
            </a>
          </>
        )
      })
  )
};





export default LogoLinks;