import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./App.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "unordered" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="editor">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="editor-input"
              modules={modules}
            />
          </div>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
