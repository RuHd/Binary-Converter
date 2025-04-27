'use client'

import Image from "next/image";
import "./page.css";
import arrows from '../../public/arrows.png'
import { useState } from "react";
import { convertToBinary, convertToDecimal } from "./utils/functions";
import Dropnumber from "./components/Dropnumber";



export default function Home() {
  const [insertValue, setinsertValue] = useState(0)
  const [result, setresult] = useState("")

  let quantity = 200 // Establish the quantity of numbers to be dropped

  let arr = Array.from({ length: quantity }, (_, i) => i + 1);

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
              <input placeholder="Type Here...." onChange={(e) => setinsertValue(e.target.value)} defaultValue={null}/>
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
