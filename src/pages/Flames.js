import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase.utils";
import Input from "../components/input/Input";

const Flames = () => {
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    const flameRef = firestore.collection("flames");
    flameRef.onSnapshot((flames) => {
      setFlames(flames.docs.map((flame) => flame.data()));
    });
  }, []);

  return (
    <div className="flames-body">
      {flames.length > 0 ? (
        <div className="allFlames">{flames.map((flame) => flame.flame)}</div>
      ) : (
        <div className="loading-flames">No flames yet...</div>
      )}
      <Input />
    </div>
  );
};

export default Flames;
