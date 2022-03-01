import React, { useEffect, useState } from "react"
import  Editor  from "./editor.jsx";
import './App.css';

function App() {
  const [html,setHtml]=useState('')
  const [css,setCss]=useState('')
  const [javascript,setJavascript]=useState('')
  const [srcDoc,setSrcDoc]=useState('')
  useEffect(() => {
     const timeout=setTimeout(()=>{
        setSrcDoc(`
          <html>
            <body>
              ${html}
            </body>
            <style>
              ${css}
            </style>
            <script>
              ${javascript}
            </script>
          </html>
          `)
     },250)
     return()=>clearTimeout(timeout)
  },[html,css,javascript])
 
  
  return (
    <div>
      <div className=' pane top-pane'>
      <Editor language="xml" 
      displayName="HTML" 
      value={html} 
      onChange={setHtml}/>
      <Editor language="css" 
      displayName="CSS" 
      value={css} 
      onChange={setCss}/>
      <Editor language="javascript" 
      displayName="JavaScript" 
      value={javascript} 
      onChange={setJavascript}/>

      </div>
      <div className="bottom-pane">
        <iframe
         srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          /*{it prevent cookies etc from running}*/
          frameBorder='0'
          width="100%"
          height="100%"
         />
      </div>
    </div>
  );
}

export default App;
