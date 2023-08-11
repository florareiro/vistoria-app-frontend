import React, { useState } from "react";

const ImageUpload = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    onImageSelected(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Upload Preview" />
      )}
    </div>
  );
};

export default ImageUpload;
