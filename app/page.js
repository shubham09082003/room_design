import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Header from "./_component/Header";
import HomeDiv from "./_component/HomeDiv";

export default function Home() {
  return (
    <div  className='bg-gray-100 w-full h-screen'>
      <Header/>
      <HomeDiv /> 
    </div>
  )
}
  