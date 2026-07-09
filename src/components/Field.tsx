import { useState } from "react";

export default function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  hint,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasError = !!error;
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          color: hasError ? "#7A4A4A" : "#666666",
          marginBottom: 6,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          onBlur();
        }}
        style={{
          width: "100%",
          backgroundColor: "#161616",
          border: `1px solid ${hasError ? "#5A2A2A" : focused ? "#3A3A3A" : "#232323"}`,
          borderRadius: 8,
          padding: "10px 14px",
          fontSize: 14,
          color: "#F0F0F0",
          outline: "none",
          fontFamily: "Inter, sans-serif",
          transition: "border-color 0.12s",
          boxSizing: "border-box",
          caretColor: "#F0F0F0",
        }}
        className="placeholder:text-[#383838]"
      />
      {(error || hint) && (
        <p
          style={{
            fontSize: 12,
            color: hasError ? "#7A4A4A" : "#444444",
            marginTop: 5,
          }}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
