import './App.css';

export default function App() {
  const handleReturn = () => {
    window.location.href = "/"; // Redirect to the main page
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      <div className="absolute top-4 left-4">
        <button
          onClick={handleReturn}
          className="px-4 py-2 bg-gray-800 text-green-700 rounded-xl shadow-lg hover:bg-black transition"
        >
          Return to Main Page
        </button>
      </div>
    </div>
  );
}