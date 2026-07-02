import { motion } from "framer-motion";
import LogCard from "./LogCard";
import entries from "../locales/entries.json"

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "88px 24px 64px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 52px)",
            fontWeight: 600,
            color: "#F0F0F0",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            marginBottom: 20,
          }}
        >
          Your public dev journal.
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "#555555",
            lineHeight: 1.65,
            marginBottom: 36,
            fontWeight: 400,
          }}
        >
          Log what you learned. Ship it. Let others see you grow.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            style={{
              backgroundColor: "#F0F0F0",
              color: "#0F0F0F",
              fontSize: 14,
              fontWeight: 500,
              padding: "10px 22px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
            className="hover:bg-[#DEDEDE] transition-colors"
          >
            Start logging
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#C0C0C0",
              fontSize: 14,
              fontWeight: 400,
              padding: "10px 22px",
              borderRadius: 8,
              border: "1px solid #2A2A2A",
              cursor: "pointer",
            }}
            className="hover:border-[#404040] hover:text-[#F0F0F0] transition-colors"
          >
            See an example
          </button>
        </div>
      </motion.div>

      <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            fontSize: 11,
            color: "#2E2E2E",
            textAlign: "center",
            marginBottom: 24,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Recent from the community
        </p>
      </div>

      {entries.map((entry) => (
        <LogCard key={entry.id} entry={entry} />
      ))}
    </>
  );
}
