import DisplayProducts from "./components/DisplayProducts";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full bg-gray-300">
      <Navbar />
      <h2 className="text-lg font-[500] sm:px-10 sm:py-4 p-2 bg-gray-50 sm:bg-transparent">Latest Deals</h2>
      <DisplayProducts />
    </main>
  );
}
