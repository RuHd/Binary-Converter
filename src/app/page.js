'use client'

import Image from "next/image";
import "./page.css";
import arrows from "../assets/Arrows.png";
import { useEffect, useState } from "react";
import { convertToBinary, convertToDecimal } from "./utils/functions";
import Dropnumber from "./components/Dropnumber";



export default function Home() {
  const [insertValue, setinsertValue] = useState(0)
  const [appWidth, setappWidth] = useState(0)
  const [result, setresult] = useState("")

  let quantity = appWidth <= 830 ? 50 : 200 // Establish the quantity of numbers to be dropped based on the screen size for better performance

  let arr = Array.from({ length: quantity }, (_, i) => i + 1);

  useEffect(() => {
    const handleSize = () => {
      setappWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleSize)
  
    return () => {
      window.removeEventListener("resize", handleSize)
    }
  }, [])
  
  console.log(appWidth)
  return (
    <div className={"page"}>
      {
        arr.map((item, index) => {
          return (
            <Dropnumber key={index}/>
          )
        })
      }
      
        <main>
          <h1>
            <span>Binary</span> 
            <Image src={arrows} alt="arrows" className="arrows"/>
            <span>Decimal Converter</span>
          </h1>
          <form>
            <label>
              <input placeholder="Type Here...." onChange={(e) => setinsertValue(e.target.value)} defaultValue={null} type="number"/>
            </label>
            <label>
              <input placeholder="Result Goes Here" readOnly value={result}/>
            </label>
            <section className="btns-section">
                <button type="button" onClick={() => convertToBinary(insertValue, setresult)}>to Binary</button>
                <button type="button" onClick={() => convertToDecimal(insertValue, setresult)}>to Decimal</button>
            </section>
          </form>
        </main>
        <footer>
          <p>Made By Ruan Mesquita </p>
        </footer>
    </div>
  );
}
