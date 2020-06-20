import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.utils";
import Input from "../../components/input/Input";
import Flame from '../../components/flame/Flame'


import './flames.css'

const Flames = ({authState}) => {
  
  const [flames, setFlames] = useState([]);
  
  useEffect(() => {
    const flameRef = firestore.collection("flames");
    flameRef.onSnapshot((flames) => {
      setFlames(flames.docs.map((flame) => flame.data()));
    });
  }, []);
  
  return (
    
    <div className="flames-body">
      {flames.length > 0 && authState.currentUser ? (
        <div className="allFlames">{flames.map((flame, i) => <Flame key={i} flame={flame} authState={authState}/>)}</div>
      ) : (
        <div className="loading-flames">No flames yet...</div>
      )}
      {authState.currentUser && <Input authState={authState}/>}
    </div>
  );
};

export default Flames;
