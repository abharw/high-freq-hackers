import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

// Firestore document path
const docRef = doc(db, "counters", "EhS06NbP2BMdgJxu1Sni");

// Function to increment a category count
export async function incrementCount(category: string) {
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentData = docSnap.data();
      const newValue = (currentData[category] || 0) + 1;

      await updateDoc(docRef, { [category]: newValue });
    } else {
      // Initialize document if it doesn't exist
      await setDoc(docRef, {
        cardboard: 0,
        glass: 0,
        metal: 0,
        paper: 0,
        plastic: 0,
        trash: 0,
        [category]: 1, // Increment the selected category
      });
    }
  } catch (error) {
    console.error("Error updating Firestore:", error);
  }
}
