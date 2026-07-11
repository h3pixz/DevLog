import entries from "../locales/entries.json";
import { Bookmark, Rss, Settings, User, Flame } from "lucide-react";
import useNavigation from "../utils/navigation";
import Composer from "../components/Composer";
import Avatar from "../components/Avatar";
import { Hash } from "lucide-react";

type TagType = "learned" | "fixed" | "shipped" | "reading";

export default function FeedPage() {
  const navLinks = [
    { icon: Rss, label: "Feed", active: false, onClick: undefined },
    { icon: User, label: "Profile", active: false, onclick: undefined },
    { icon: Bookmark, label: "Bookmarks", active: false, onClick: undefined },
    { icon: Settings, label: "Settings", active: false, onClick: undefined },
  ];

  const trending: { tag: TagType; count: number }[] = [
    { tag: "learned", count: 284 },
    { tag: "shipped", count: 196 },
    { tag: "fixed", count: 143 },
    { tag: "reading", count: 87 },
  ];

  const { goTo } = useNavigation();

  return (
    <div>
      <div className="max-w-1080 mx-auto grid grid-cols-[425px_1fr_425px] min-h-screen">
        <aside
          className="justify-self-end"
          style={{
            borderRight: "1px solid #161616",
            padding: "24px",
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <button
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#F0F0F0",
              letterSpacing: "-0.03em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginBottom: 28,
              display: "block",
            }}
            onClick={() => goTo("/")}
          >
            devlog
          </button>

          <div className="flex items-center gap-3">
            <Avatar initials="MW" color="#1E2D45" size={38} />

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#F0F0F0",
                  lineHeight: 1.3,
                }}
              >
                {entries[0].author.name}
              </div>
              <div style={{ fontSize: 12, color: "#444444", marginTop: 1 }}>
                {entries[0].author.handle}
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-0.5 mt-6">
            {navLinks.map(({ icon: Icon, label, active, onClick }) => (
              <button
                key={label}
                onClick={onClick}
                className={`flex items-center gap-2 cursor-pointer p-2 text-sm rounded-sm transition-colors duration-100
                  ${
                    active
                      ? "bg-[#1C1C1C] text-[#F0F0F0] font-medium"
                      : "bg-transparent text-[#555555] font-normal hover:bg-[#1C1C1C] hover:text-[#F0F0F0]"
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>

          <div
            style={{
              marginTop: "auto",
              paddingTop: 32,
              borderTop: "1px solid #1A1A1A",
              marginLeft: 0,
            }}
          >
            <div
              className="flex items-center gap-2 justify-center"
              style={{ padding: "0 10px" }}
            >
              <Flame size={18} style={{ color: "#A08A48" }} />
              <span className="text-xs text-[#555555]">28 day streak</span>
            </div>
          </div>
        </aside>

        <main className="border-r-1 border-[#161616] p-6">
          <h2 className="text-base mb-2">Feed</h2>
          <Composer />
        </main>

        <aside style={{ padding: "24px" }} className="max-w-75">
          <span className="text-xs mb-2 text-[#2e2e2e] uppercase font-medium tracking-[0.09em]">
            Trending tags
          </span>

          <div className="flex flex-col gap-2 mt-2 mb-8">
            {trending.map(({ tag, count }) => (
              <div
                key={tag}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Hash size={11} style={{ color: "#333333" }} />
                  <span
                    style={{ fontSize: 13, color: "#666666", fontWeight: 400 }}
                    className="group-hover:text-[#C8C8C8] transition-colors"
                  >
                    {tag}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "#333333" }}>{count}</span>
              </div>
            ))}
          </div>

          <span className="text-xs text-[#2e2e2e] uppercase font-medium tracking-[0.09em]">
            Who to follow
          </span>

          <div className="flex flex-col gap-3 mt-2">
            {entries.map((s) => (
              <div
                key={s.author.handle}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Avatar
                    initials={s.author.initials}
                    color={s.author.color}
                    size={28}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#C8C8C8",
                        lineHeight: 1.25,
                      }}
                    >
                      {s.author.name}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#444444", marginTop: 1 }}
                    >
                      {s.author.handle}
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#C8C8C8",
                    backgroundColor: "transparent",
                    border: "1px solid #2A2A2A",
                    borderRadius: 5,
                    padding: "3px 10px",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  className="hover:border-[#404040] transition-colors"
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
