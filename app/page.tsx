import Footer from "./components/Footer";
import Herosection from "./components/Herosection ";
import { NavigationMenuDemo } from "./components/NavigationMenuDemo";
import Promptsection from "./components/Promptsection";

export default function page() {
  return (
    <>
    <NavigationMenuDemo/>
    <Herosection />
    <Promptsection />
    <Footer />
    </>
  )
}