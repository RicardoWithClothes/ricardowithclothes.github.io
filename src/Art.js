import { useState, useEffect } from "react";

export default function Art() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Dynamically load images from the collage folder
    const imagePaths = [
      "/collage/1.png",
      "/collage/2.png",
    ];
    setImages(imagePaths);
  }, []);
  const handleReturn = () => {
    window.location.href = "/"; // Redirect to the main page
  };
  return (

    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/UI/night sky.png')" }}
    >
      {/* Return button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={handleReturn}
          className="px-4 py-2 bg-gray-800 text-green-700 rounded-xl shadow-lg hover:bg-black transition"
        >
          Return to Main Page
        </button>
      </div>
      {/* Bottom left image */}
      <img
        src="/UI/building left.png"
        alt="Build Left"
        className="absolute bottom-0 left-0 w-96 h-auto"
      />

      {/* Bottom right image */}
      <img
        src="/UI/building right.png"
        alt="Build Right"
        className="absolute bottom-0 right-0 w-96 h-auto"
      />
      {/* Bottom middle city */}
      <img
        src="/UI/city.png"
        alt="City"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-auto"
      />
      
      {/* Center content */}
      <div className="flex flex-col justify-center items-center h-full text-white text-2xl">
        <p>My Art Collage</p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Collage ${index + 1}`}
              className="w-90 h-90 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}