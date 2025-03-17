import React from 'react'
import { Film } from 'lucide-react';
// import { useEffect, useState } from "react";


const HeaderComp = () => {
    // const [isClient, setIsClient] = useState(false);
    // useEffect(() => {
    //     setIsClient(true); 
    // }, []);
  return (
    <div>
     <Film className='text-purple-950'>
   <p>Movie Z</p>
     </Film>
    </div>
  )
}

export default HeaderComp