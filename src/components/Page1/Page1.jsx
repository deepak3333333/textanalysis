import React, { useState } from "react";
import './Page1.css'

function Page1() {
  let [text, settext] = useState("");
  function captalizer() {
    let capatalizedtext=text.toUpperCase()
    
    settext(capatalizedtext)
    }
    


    function smallworker(){
        let smallertext=text.toLowerCase()
        settext(smallertext)



    }
    function removeextra(){
        let newT=text.split(/[ ]+/);
        settext(newT.join(" "))

    }
    function cleanyoutext(){
        settext("")
    }
    function copyyourtext(){
        var gh=document.getElementById("myTextarea")
        gh.select()
        navigator.clipboard.writeText(gh.value)
     


    }
    function taking(event){
        settext(event.target.value)

    }
return (
    <div className="area">
      <div className="flex flex-col w-full">
        <label htmlFor="myTextarea" className="text-xl font-medium mb-8">
          <h1 className="text-center text-3xl "> Enter Your Text In The Below Box</h1>
        </label>
        <textarea
          id="myTextarea"
          name="myTextarea"
          value={text}
          onChange={taking}
          className="appearance-none rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 h-40 resize-none"
        />
      </div>
      <button
        onClick={removeextra}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mr-4"
      >
        Remove Extra Spaces
      </button>
      
      <button
        onClick={captalizer}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-8"
      >
        CONVERT TO UPPERCASE
      </button>

      <button
      onClick={smallworker}
        
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-8 ml-3"
      >
       convert to lower case
      </button>
      
      <button
      onClick={cleanyoutext}
        
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-8 ml-3"
      >
        clear Text
      </button>
      <button
      onClick={copyyourtext}
        
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-8 ml-3"
      >
        copy Text
      </button>



      <h1 className="text-3xl text-green-600 ">Minute  To Read:  {text.split(" ").length*0.008-0.008}</h1>
      



      <h1 className="text-3xl text-green-600"> Total Number Of Words :{text.split(" ").length-1}  <br/>Total number of characters:{text.length} </h1>
      <h1 className="text-center text-3xl ">Preview of input</h1>
    <p  className="text-zinc-50 text-3xl bg-black">{text}</p>

    </div>
  );
}

export default Page1;
