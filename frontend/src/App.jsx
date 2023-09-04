import DisplayProducts from "./components/DisplayProducts";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full bg-gray-100">
      <Navbar />
      <DisplayProducts />
    </main>
  );
}
