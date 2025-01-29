"use client";
import { Cursor } from "motion-cursor";
import { CSSProperties, useState } from "react";

export default function AddCursor() {
  const [cursorStyles, setCursorStyles] = useState<CSSProperties>({
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#8034fa",
  });
  const [cursorText, setCursorText] = useState<string>("");

  return <Cursor style={cursorStyles}>{cursorText}</Cursor>;
}
