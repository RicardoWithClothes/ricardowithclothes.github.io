export default function YoutubeButton() {
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with your video link
      target="_blank" // opens in a new tab
      rel="noopener noreferrer"
      className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-200"
    >
      Watch on YouTube
    </a>
  );
}