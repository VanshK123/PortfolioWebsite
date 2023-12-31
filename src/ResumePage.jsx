import React from "react";
import Resume from "./Resume.pdf";

function ResumePage() {
  return (
    <div>
      <object width="99.9%" height="600" data={Resume} type="application/pdf"> 
        <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={Resume}>click here to download the PDF file.</a></p>
      </object>
    </div>
  );
}

export default ResumePage;