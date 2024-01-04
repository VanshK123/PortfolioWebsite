import React from "react";
import Resume from "./Resume.pdf";

function ResumePage() {
  return (
    <div style={{ minHeight: "100%", overflow: "hidden" }}>
      <object
        width="100%"
        height="100%"
        data={Resume}
        type="application/pdf"
      >
        {/* Fallback content or message if PDF cannot be displayed */}
        <p>
          It appears your browser doesn't support embedded PDFs. You can
          download the PDF <a href={Resume}>here</a>.
        </p>
      </object>
    </div>
  );
}

export default ResumePage;
