import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useState, useEffect } from "react";
import { $getRoot } from "lexical";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

const MyEditorComponent = ({ body, isText }: any) => {
  const [editor] = useLexicalComposerContext();
  const [mainBody, setMainBody] = useState<string>("");

  useEffect(() => {
    if (body && isText) {
      editor.update(() => {
        try {
          // Parsing editor state from the body
          const parsedEditorState = editor.parseEditorState(body);

          // Read the root node's text content
          const editorStateTextString = parsedEditorState.read(() => $getRoot().getTextContent());

          setMainBody(editorStateTextString);
        } catch (e) {
          setMainBody(body);
        }
      });
    }
  }, [body, isText, editor]);

  return (
    <div className="text-dark dark:text-grayLight font-medium text-xs line-clamp-3 max-h-[4.8rem] text-ellipsis overflow-hidden">
      {mainBody}
    </div>
  );
};

const ReadEditor = ({ body, isText }: any) => {
  const initialConfig = {
    namespace: "MyEditor",
    theme: {},
    onError: (error: any) => console.error(error),
    editorState: isText ? null : body,
    editable: false,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {isText && body ? (
        <MyEditorComponent body={body} isText={isText} />
      ) : (
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className="editor">
                <ContentEditable
                  className="editor-input"
                  placeholder={<div className="editor-placeholder">{"placeholder"}</div>}
                  aria-placeholder={"placeholder"}
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      )}
    </LexicalComposer>
  );
};

export default ReadEditor;
