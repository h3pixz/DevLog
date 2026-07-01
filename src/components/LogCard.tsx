import { FaRegUserCircle } from "react-icons/fa";

export type LogEntry = {
  id: string;
  author: { name: string; handle: string; initials: string; color: string };
  tag: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  bookmarked?: boolean;
};

type Props = {
  entry: LogEntry;
};

export default function LogCard({ entry }: Props) {
  return (
    <article
      style={{
        backgroundColor: "#161616",
        border: "1px solid #232323",
        borderRadius: 12,
        padding: "16px 20px",
        marginBottom: "20px"
      }}
      className="mx-auto max-w-lg"
    >
      <div className="flex items-start gap-3">
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <FaRegUserCircle size={28} />
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-2">
            <button
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#F0F0F0",
                background: "none",
                border: "none",
                padding: 0,
                lineHeight: 1,
              }}
            >
              {entry.author.name}
            </button>
            <span style={{ color: "#444444", fontSize: 14 }}>{entry.author.handle}</span>
            <span style={{ color: "#2E2E2E", fontSize: 14, lineHeight: 1 }}>
              ·
            </span>
            <span style={{ color: "#555555", fontSize: 13 }}>{entry.timestamp}</span>
          </div>

          <p style={{ fontSize: 15, color: "#E0E0E0", lineHeight: "1.65", marginBottom: 14, fontWeight: 400 }}>{entry.content}</p>
        </div>
      </div>
    </article>
  );
}
