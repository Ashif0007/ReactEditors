import React from "react";
import "./styles.css";
import "devextreme/dist/css/dx.light.css";
import DraftJsEditor from "./components/DraftEditor";
import MuiEditor from "./components/MuiRteEditor";
import DraftWysiwyg from "./components/DraftWYSIWYGEditor";
import SlateEditor from "./components/SlateEditor";
import TinyMceEditor from "./components/TinyEditor";
import RemirrorEditor from "./components/RemirrorEditor";

export default function App() {
  return (
    <div className="App">
      <h1>Rich text editors proposals</h1>
      <h2>MUI rich text editor</h2>
      <MuiEditor />
      <h2>Draft-js rich text editor</h2>
      <DraftJsEditor />
      <h2>React Draft WYSIWYG text editor</h2>
      <DraftWysiwyg />
      <h2>Remirror text editor</h2>
      <RemirrorEditor />
      <h2>Slate text editor</h2>
      <SlateEditor />
      <h2>TinyMCE text editor</h2>
      <TinyMceEditor />
    </div>
  );
}
