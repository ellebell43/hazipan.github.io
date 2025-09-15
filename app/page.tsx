import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  return (
    <div className="w-[8.5in] h-[11in] bg-white shadow p-4 relative overflow-hidden">
      <div className="absolute w-full h-full">
        <div className="rounded-full absolute h-[6in] w-[6in] bg-pink-300 top-[.5in] left-[4in] z-0" />
        <div className="rounded-full absolute h-[5.5in] w-[5.5in] bg-yellow-300 top-[2in] -left-[3in]" />
        <div className="rounded-full absolute h-[6in] w-[6in] bg-blue-400 top-[2.5in] left-[1in]" />
        <div className="rounded-full absolute h-[3in] w-[3in] bg-green-300 top-[2.75in] left-[5.75in]" />
        <div className="rounded-full absolute h-[1.25in] w-[1.25in] bg-pink-500 top-[1.9in] left-[6.75in]" />
        <div className="rounded-full absolute h-[4in] w-[4in] bg-red-400 top-[.75in] left-[1.25in]" />
        <div className="rounded-full absolute h-[1in] w-[1in] bg-pink-300 top-[1.75in] left-[.75in]" />
        <div className="rounded-full absolute h-[.75in] w-[.75in] bg-green-300 top-[7.5in] left-[.5in]" />
      </div>
      <div className="absolute text-white text-shadow-lg text-2xl h-full w-full flex flex-col justify-center items-center tracking-[.1in] font-bold text-center">
        <p className="m-4">YOU'RE INVITED!</p>
        <p className="mt-4 text-8xl">FLOOR 10</p>
        <p className="mb-4 text-6xl">GARDEN PARTY</p>
        <p className="m-4">SATURDAY, SEP. 21, 5:00PM</p>
      </div>

      <div className="absolute bottom-6 left-6 border-4 rounded">
        <div className="border-1 p-2">
          <Image src="/discord-qr-09-22.png" width={150} height={150} alt="https://discord.gg/jmbmW5RA" />
        </div>
        <p className="font-bold text-center bg-black text-white p-2 text-MD m-0">RSVP ON DISCORD</p>
      </div>
    </div>
  );
}
