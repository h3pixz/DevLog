import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <nav style={{ borderBottom: "1px solid #161616" }}>
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#F0F0F0",
            letterSpacing: "-0.03em",
          }}
        >
          devlog
        </span>

        <div className="flex items-center gap-2">
          <button
            style={{
              fontSize: 13,
              color: "#555555",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 12px",
              borderRadius: 6,
            }}
            className="hover:text-[#E8E8E8] transition-colors"
            onClick={handleNavigate('/signin')}
          >
            Sign in
          </button>
          <button
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#0F0F0F",
              backgroundColor: "#F0F0F0",
              border: "none",
              borderRadius: 6,
              padding: "6px 14px",
              cursor: "pointer",
            }}
            className="hover:bg-[#DEDEDE] transition-colors"
            onClick={handleNavigate('/reg')}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
