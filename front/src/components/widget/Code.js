import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";
const Code = props => {
  return (
    <SyntaxHighlighter language={props.lang} style={docco}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default Code;
