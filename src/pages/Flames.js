import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase.utils";

const Flames = () => {
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    const flameRef = firestore.collection("flames");
    flameRef.onSnapshot((flames) => {
      setFlames(flames.docs.map((flame) => flame.data()));
    });
  }, []);

  return (
      <>
        {flames.length > 0 ? 
          (<div className='allFlames'>
               {flames.map(flame=> (flame.flame))}
          </div>) 
          : 
          (<div className='loading-flames'>
              Loading...
          </div>)
          }
      </>
  )
};

export default Flames;
