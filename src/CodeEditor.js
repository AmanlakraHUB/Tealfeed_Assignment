import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";

const initialCode = `
#include <iostream>
using namespace std;

int main() {
    int n;
    long factorial = 1.0;

    cout << "Enter a positive integer: ";
    cin >> n;

    if (n < 0)
        cout << "Error! Factorial of a negative number doesn't exist.";
    else {
        for(int i = 1; i <= n; ++i) {
            factorial *= i;
        }
        cout << "Factorial of " << n << " = " << factorial;    
    }

    return 0;
}
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
