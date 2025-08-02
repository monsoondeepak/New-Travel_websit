import Image from "next/image";
import HomePage from "./Components/Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import CostumHr from "./Components/Bar/CostumHr";
import Destination from "./Components/Pages/Destination";
import NextCostumHr from "./Components/Bar/NextCostumHr";
import ThirdHr from "./Components/Bar/ThirdHr";
import Travel from "./Components/Pages/Travel";
export default function Home() {
  return <>
  
  <Navbar />
  <CostumHr />
  <HomePage />
  <NextCostumHr />
  <Destination />
  <ThirdHr />
  <Travel />
  </>
  
}
