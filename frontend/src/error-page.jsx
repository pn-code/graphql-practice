import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <main className="w-full h-[calc(100vh-300px)] flex justify-center items-center flex-col gap-2">
        <h1 className="text-3xl font-semibold">Oops!</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </>
  );
}
