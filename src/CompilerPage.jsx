// CompilerPage.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CompilerPage.css';

const cCode = `int main() {
    int x;
    float y;
    float z;

    x = 2;
    y = 3.5;

    z = x + y;
    print(z); 

    return 0;
}
`;

const CompilerPage = () => {
  return (
    <div className='container'>
      <div className='contents'>
        <div className='aligner'>  
          <h1>Compiler</h1>
          <div className='innerContent'>
            <div>Enter C code in the input field and see the generated assembly from my compiler in the output field</div>
            <div>Some sample code to test on the left:</div>
          </div>
        </div>
      </div>
      <div className='compiler'>
      <pre style={{width: "30%", marginLeft:'1.5rem'}}>
          <SyntaxHighlighter language="c" style={darcula}>
            {cCode}
          </SyntaxHighlighter>
        </pre>
        <iframe
          title="Compiler Page"
          src="/Compiler/Reference Implementation Web Portal · ECE 468_573_595.html"
          style={{ width: '100%', height: '70vh', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default CompilerPage;
