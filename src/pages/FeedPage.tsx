import entries from "../locales/entries.json";
import { Bookmark, Rss, Settings, User, Flame } from "lucide-react";
import useNavigation from "../utils/navigation"

export default function FeedPage() {
  const navLinks = [
    { icon: Rss, label: "Feed", active: false, onClick: undefined },
    { icon: User, label: "Profile", active: false, onclick: undefined },
    { icon: Bookmark, label: "Bookmarks", active: false, onClick: undefined },
    { icon: Settings, label: "Settings", active: false, onClick: undefined },
  ];

  const { goTo } = useNavigation();

  return (
    <div>
      <div className="max-w-1080 mx-auto grid grid-cols-[500px_1fr_500px] min-h-screen">
        <aside className="justify-self-end"
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
            onClick={() => goTo('/')}
          >
            devlog
          </button>

          <div className="flex items-center gap-3">
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: entries[0].author.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                flexShrink: 0,
              }}
              className="cursor-pointer"
            >
              {entries[0].author.initials}
            </div>

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
                className={
                  `flex items-center gap-2 cursor-pointer p-2 text-sm rounded-sm transition-colors duration-100
                  ${active
                    ? "bg-[#1C1C1C] text-[#F0F0F0] font-medium"
                    : "bg-transparent text-[#555555] font-normal hover:bg-[#1C1C1C] hover:text-[#F0F0F0]"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </nav>

          <div style={{ marginTop: "auto", paddingTop: 32, borderTop: "1px solid #1A1A1A", marginLeft: 0 }}>
            <div className="flex items-center gap-2 justify-center" style={{ padding: "0 10px" }}>
              <Flame size={18} style={{ color: "#A08A48" }} />
              <span className="text-xs text-[#555555]">28 day streak</span>
            </div>
          </div>
        </aside>

        <main className="border-r-1 border-[#161616] p-6">
            <h2 className="text-base">Feed</h2>
        </main>
      </div>
    </div>
  );
}
