import React, { useState } from "react";
import { uploadBook } from "../firebase/firebaseStorageService";

const UploadBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const bookData = { title, author, description };
      await uploadBook(bookData, file);
      alert("Book uploaded successfully!");
    } catch (error) {
      console.error("Upload failed: ", error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload Book</button>
    </form>
  );
};

export default UploadBookForm;
