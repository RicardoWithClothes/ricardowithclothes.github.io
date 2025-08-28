import { useState, useEffect } from "react";

export default function Art() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/UI/night sky.png')" }}
    >
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
      <div className="flex justify-center items-center h-full text-white text-2xl">
        <p>My Art Collage will go here</p>
      </div>
    </div>
  );
}