export default function Home() {
  return (
    <div className="flex h-96 gap-4 p-4">
      <div className="w-3/5 flex flex-col space-y-4">
        <textarea className="w-full h-full p-2 border rounded" placeholder="Enter text here..." />
        <button className="bg-blue-500 text-white p-2 rounded">Detect</button>
      </div>
      <div className="w-2/5 bg-gray-100 p-4 rounded">
        <p>Result placeholder...</p>
      </div>
    </div>
  );
}
