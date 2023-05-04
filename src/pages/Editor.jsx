import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="p-2 md:p-10 mt-24 m-2 md:m-10 rounded-3xl bg-white">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent iframeSettings={{ enable: true }}>
        <EditorData />
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
