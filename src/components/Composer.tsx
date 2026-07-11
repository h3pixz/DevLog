import Avatar from "./Avatar";
import { useState } from "react";

type TagType = "learned" | "fixed" | "shipped" | "reading";

export default function Composer() {
  const [text, setText] = useState("");
  const [tag, setTag] = useState<TagType>("learned");
  const ALL_TAGS: TagType[] = ["learned", "fixed", "shipped", "reading"];

  const TAG = {
    learned: {
      bg: "rgba(74,155,114,0.10)",
      text: "#4D8A6A",
      border: "rgba(74,155,114,0.20)",
    },
    fixed: {
      bg: "rgba(74,127,165,0.10)",
      text: "#4A7AA5",
      border: "rgba(74,127,165,0.20)",
    },
    shipped: {
      bg: "rgba(122,95,165,0.10)",
      text: "#7A5FA5",
      border: "rgba(122,95,165,0.20)",
    },
    reading: {
      bg: "rgba(165,139,74,0.10)",
      text: "#A08A48",
      border: "rgba(165,139,74,0.20)",
    },
  } satisfies Record<TagType, { bg: string; text: string; border: string }>;

  return (
    <>
      <div className="bg-[#161616] border border-[#232323] rounded-xl p-4">
        <div className="flex gap-3">
          <Avatar initials="MW" color="#1E2D45" size={36} />
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What did you learn, fix, or ship today?"
              rows={3}
              style={{
                width: "100%",
                background: "none",
                outline: "none",
                color: "#F0F0F0",
                fontSize: 15,
                lineHeight: "1.6",
                resize: "none",
                fontFamily: "Inter, sans-serif",
                caretColor: "#F0F0F0",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="placeholder:text-[#383838] border-b-1"
            />

            <div className="flex items-center justify-between flex-wrap">
              <div className="flex gap-1.5">
                {ALL_TAGS.map((t) => {
                  const cfg = TAG[t];
                  const active = tag === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      style={{
                        backgroundColor: active ? cfg.bg : "transparent",
                        color: active ? cfg.text : "#555555",
                        fontSize: 11,
                        fontWeight: 500,
                        padding: "3px 9px",
                        borderRadius: 4,
                        border: active
                          ? `1px solid ${cfg.border}`
                          : "1px solid #232323",
                        cursor: "pointer",
                        transition: "all 0.12s",
                      }}
                      className={
                        !active
                          ? "hover:border-[#2E2E2E] hover:text-[#888]"
                          : ""
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              <button
                style={{
                  backgroundColor: text.trim() ? "#F0F0F0" : "#1C1C1C",
                  color: text.trim() ? "#0F0F0F" : "#3A3A3A",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 18px",
                  borderRadius: 6,
                  border: "none",
                  cursor: text.trim() ? "pointer" : "default",
                  transition: "all 0.12s",
                }}
                className={text.trim() ? "hover:bg-[#E0E0E0]" : ""}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
