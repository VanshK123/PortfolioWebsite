import React from "react";
import Resume from "./Resume.pdf";

function ResumePage() {
  return (
    <div style={{ minHeight: "100%", overflow: "hidden" }}>
      <iframe
        title="Resume"
        width="100%"
        height="100%"
        src={Resume}
        type="application/pdf"
      >
        {/* Fallback content or message if PDF cannot be displayed */}
        <p>
          It appears your browser doesn't support embedded PDFs. You can
          download the PDF <a href='https://drive.google.com/file/d/1SlUhxmfhruoV3m_er-yaJHf8GNc6foZh/view'>here</a>.
        </p>
      </iframe>
    </div>
  );
}

export default ResumePage;
