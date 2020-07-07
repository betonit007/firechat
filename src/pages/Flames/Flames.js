import React, { useState, useEffect, useRef } from "react";
import { firestore } from "../../firebase/firebase.utils";
import Input from "../../components/input/Input";
import Flame from '../../components/flame/Flame'


import './flames.css'

const Flames = ({authState}) => {
  
  const [flames, setFlames] = useState([]);
  const bottomDiv = useRef(null)

  const scrollToBottom = () => {
    bottomDiv.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const flameRef = firestore.collection("flames").orderBy("createdAt");
    flameRef.onSnapshot((flames) => {
      setFlames(flames.docs.map((flame) => flame.data()));
    });
  }, []);

  useEffect(() => { //scroll to bottom of message div
    if (bottomDiv.current) {
      scrollToBottom()
    }
  }, [flames])
  
  return (
    
    <div className="flames-body">
      {flames.length > 0 && authState.currentUser ? (
        <div className="allFlames">
          {flames.map((flame, i) => <Flame key={i} flame={flame} authState={authState}/>)}
          <div ref={bottomDiv} />
        </div>
      ) : (
        <div className="loading-flames">No flames yet...</div>
      )}
      {authState.currentUser && <Input authState={authState}/>}
    </div>
  );
};

export default Flames;
