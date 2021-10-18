import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./style.css";
import { useMasterContext } from "../../MasterContext";
import ReactMarkdown from "react-markdown";

const MarkDown = () => {
  const { darkMode } = useMasterContext();
  const [markDown, setMarkDown] = useState(`# Write Here`);
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 10, display: `flex`, flexWrap: `wrap` }}>
        <textarea
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          className={`markDown_textArea ${
            !darkMode && `markDown_textArea_lightMode`
          }`}
        ></textarea>
        <div className="markDown">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </Box>
    </Container>
  );
};

export default MarkDown;
