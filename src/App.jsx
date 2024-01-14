import ReactQuill from "react-quill";
import Quill from 'quill'
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module--fix-imports-error";
import { useState } from "react";
import "./App.css";

//to resize videos 
const Video = Quill.import("formats/video");
class CustomVideo extends Video {
  static create(value) {
    let node = super.create(value);
    // Set attributes here
    node.setAttribute("style", "width:100%; height:60%;");
    return node;
  }
}
CustomVideo.blotName = 'video';
CustomVideo.className = 'ql-video';
CustomVideo.tagName = 'iframe';  // Note: Use IFrame
Quill.register(CustomVideo, true);

//to make default image size

const Image = Quill.import("formats/image");

class CustomImage extends Image {
  static create(value) {
    let node = super.create(value);
    // Set attributes here
    node.setAttribute("width", "370px");
    node.setAttribute("height", "370px");
    return node;
  }
}

CustomImage.blotName = "image";
CustomImage.className = "ql-image";
CustomImage.tagName = "img";

Quill.register(CustomImage, true);
//

Quill.register("modules/imageResize", ImageResize);
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
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
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
