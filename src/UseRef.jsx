//useRef can  Caching Expensive Computation
//API Data, FIle Compressor is Expensive Computation
import { useRef } from "react";

const UseRef = () => {
  let APIData = useRef(null);
  let myPTag = useRef();

  const fetchData = async () => {
    //reference হিসেবে APIData এর মধ্যে নিচের API এবং ২ নং এর কনভার্টেড ডাটা কে রেখে দিলাম যাতে পরে কল করে দিতে পারি
    //reference হিসেবে APIData এর মধ্যে রেখে দেওয়াকেই বলে Cash, so এখানে রাখলে Data টা কে re render করতে হবেনা। ক্যাশ করে রাখবে যাতে re render ব্যতিত পরে পাওয়া যায়
    const response = await fetch("https://dummyjson.com/products"); //১
    APIData.current = await response.json(); //২
  };
  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };

  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default UseRef;
