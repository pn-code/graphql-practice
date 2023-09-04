import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <main className="flex flex-col h-screen w-full bg-gray-300">
      <Navbar />
      <Outlet/>
    </main>
  );
}
