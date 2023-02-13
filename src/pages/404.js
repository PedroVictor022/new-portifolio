import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-full bg-gradient-to-b from-gray-800 to bg-black "
      >
        {/* <div
          className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        >

        </div> */}

        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4"
        >
          <p className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-purple-700 to-purple-900">Opps, você se perdeu!</p>
          <Link href="/" className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900">Volte para a Home</Link>
        </div>

      </div>
    </>
  )
}