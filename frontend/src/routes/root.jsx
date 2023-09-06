import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <main className="flex flex-col min-h-[calc(101vh)] w-full bg-gray-300">
      <Navbar />
      <Outlet/>
    </main>
  );
}
