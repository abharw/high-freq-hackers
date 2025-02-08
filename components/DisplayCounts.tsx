"use client";

import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "@/lib/firebase";

const db = getFirestore(firebaseApp);
import { doc, onSnapshot } from "firebase/firestore";

const docRef = doc(db, "counters", "EhS06NbP2BMdgJxu1Sni");

export default function DisplayCounts() {
  const [counts, setCounts] = useState({
    cardboard: 0,
    glass: 0,
    metal: 0,
    paper: 0,
    plastic: 0,
    trash: 0,
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setCounts(docSnap.data());
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Live Counts</h2>
      <ul>
        {Object.entries(counts).map(([key, value]) => (
          <li key={key} className="text-lg">
            {key}: <span className="font-bold">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
