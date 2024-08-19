/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import "./index.css";
import "./theme.css";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { OverflowNode } from "@lexical/overflow";

import ExampleTheme from "./theme";
import { Klass, LexicalNode } from "lexical";
import { PageBreakNode } from "./nodes/PageBreakNode";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { TweetNode } from "./nodes/TweetNode";
import { YouTubeNode } from "./nodes/YouTubeNode";
import { CollapsibleContainerNode } from "./plugins/CollapsiblePlugin/CollapsibleContainerNode";
import { CollapsibleContentNode } from "./plugins/CollapsiblePlugin/CollapsibleContentNode";
import { CollapsibleTitleNode } from "./plugins/CollapsiblePlugin/CollapsibleTitleNode";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { HashtagNode } from "@lexical/hashtag";
import { LayoutContainerNode } from "./nodes/LayoutContainerNode";
import { LayoutItemNode } from "./nodes/LayoutItemNode";
import { TableContext } from "./plugins/TablePlugin";
import { FlashMessageContext } from "./context/FlashMessageContext";
import { EmojiNode } from "./nodes/EmojiNode";
import { useEffect, useState } from "react";
import { CAN_USE_DOM } from "./shared/canUseDOM";

const placeholder = "Enter some rich text...";
const PlaygroundNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  TableNode,
  TableCellNode,
  TableRowNode,
  HashtagNode,
  TweetNode,
  YouTubeNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
  EmojiNode,

  HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  // MarkNode,
  CollapsibleContainerNode,
  CollapsibleContentNode,
  CollapsibleTitleNode,
  PageBreakNode,
  LayoutContainerNode,
  LayoutItemNode,
  AutoLinkNode,
];

export default function EditorWriterApp({ initalData }: { initalData?: any }) {
  const [isSmallWidthViewport, setIsSmallWidthViewport] = useState<boolean>(false);

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia("(max-width: 1025px)").matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener("resize", updateViewPortWidth);

    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  const editorConfig = {
    namespace: "PPN blog",
    nodes: [...PlaygroundNodes],
    // Handling of errors during update
    onError(error: Error) {
      throw error;
    },
    editable: false,
    // The editor theme
    theme: ExampleTheme,
    editorState: initalData,
  };

  return (
    <FlashMessageContext>
      <LexicalComposer initialConfig={editorConfig}>
        <TableContext>
          <div className="editor-container">
            <div className="editor-inner">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable
                    className="editor-input"
                    aria-placeholder={placeholder}
                    placeholder={<div className="editor-placeholder">{placeholder}</div>}
                  />
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
          </div>
        </TableContext>
      </LexicalComposer>
    </FlashMessageContext>
  );
}
