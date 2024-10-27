// src/firebase/firebaseStorageService.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Function to upload book file and save metadata
export async function uploadBook(bookData, file) {
  try {
    // Create a reference in storage (e.g., "books/bookName.pdf")
    const storageRef = ref(storage, `books/${file.name}`);

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Add metadata to Firestore
    const docRef = await addDoc(collection(db, "books"), {
      ...bookData,
      fileUrl: downloadURL, // Store the file URL from Storage
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error uploading book: ", error);
    throw error;
  }
}
