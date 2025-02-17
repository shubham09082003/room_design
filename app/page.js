import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Header from "./_component/Header";
import HomeDiv from "./_component/HomeDiv";
import Work from "./_component/Work";
import Stats from "./_component/stats";
import Footer from "./_component/Footer";
export default function Home() {
  return (
    <div  className='bg-gradient-to-b from-[#434343] to-black w-full h-screen overflow-auto'>
      <Header/>
      <HomeDiv/>
      <Work/>
      <Stats/>
      <Footer/>
    </div>
  )
}
  