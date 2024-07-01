import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";

const initialCode = `
let n = 5; 

function factorial(n) { 
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

console.log(factorial(n));

`;

const CodeEditor = () => {
  const [code, setCode] = useState(initialCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div>
        <textarea
          value={code}
          onChange={handleChange}
          spellCheck="false"
          className="code-input"
        />
      </div>
      <div className="code-output">
        <Highlight theme={themes.shadesOfPurple} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeEditor;
