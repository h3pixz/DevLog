export default function Avatar({
  initials,
  color,
  size = 32,
}: {
  initials: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: size * 0.36,
          fontWeight: 500,
          color: "#C8D4E4",
          letterSpacing: "-0.01em",
        }}
      >
        {initials}
      </span>
    </div>
  );
}
