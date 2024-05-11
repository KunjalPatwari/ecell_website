import Image from "next/image";
import {Playfair_Display,Lato} from "next/font/google"


const playfair = Playfair_Display({subsets: ["latin"]})
const lato = Lato({weight: ["400"], subsets: ["latin"]})

export default function Home() {
  return (
    <div className="bg-heroImage flex flex-col min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center -mt-20">
        <h1 className={`${playfair.className} mt-24 text-6xl font-bold`}>ENTREPRENEURSHIP CELL</h1>
        <p className={`${playfair.className} text-1xl mt-4`}>PES UNIVERSITY</p>
      </div>
      <div className="flex items-center justify-center mt-16 gap-20">
        <div className="flex flex-col bg-black p-16 items-center rounded-full">
          <Image src="/assets/ideate.png" width={70} height={70} alt="logo" />
          <p className={`${lato.className} text-xl mt-4 text-white`}>IDEATE</p>
        </div>
        <div className="flex flex-col bg-black p-16 items-center rounded-full">
          <Image src="/assets/innovate.png" width={80} height={70} alt="logo" />
          <p className={`${lato.className} text-xl mt-4 text-white`}>INNOVATE</p>
        </div>
        <div className="flex flex-col bg-black p-16 items-center rounded-full">
          <Image src="/assets/collab.png" width={100} height={70} alt="logo" />
          <p className={`${lato.className} text-xl mt-4 text-white`}>COLLABORATE</p>
        </div>
      </div>
    </div>
  );
}
