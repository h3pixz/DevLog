import Header from "../components/Header";
import Field from "../components/Field";
import { useState } from "react";
import entries from "../locales/entries.json";
import Avatar from "../components/Avatar";

type FieldState = { value: string; touched: boolean };

function TagBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    learned: "#1A3028",
    fixed: "#2D1E2D",
    shipped: "#1E2D45",
  };
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 500,
        color: "#666",
        backgroundColor: colors[type] ?? "#1A1A1A",
        borderRadius: 4,
        padding: "2px 6px",
        textTransform: "capitalize",
      }}
    >
      {type}
    </span>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState<FieldState>({ value: "", touched: false });
  const [password, setPassword] = useState<FieldState>({
    value: "",
    touched: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const errors = {
    email: !email.value.trim()
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
        ? "Enter a valid email"
        : "",
    password: !password.value
      ? "Password is required"
      : password.value.length < 8
        ? "At least 8 characters"
        : "",
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail((s) => ({ ...s, touched: true }));
    setPassword((s) => ({ ...s, touched: true }));
    if (errors.email || errors.password) return;
  }

  return (
    <>
      <Header mode="no-acc" />
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        <div
          style={{
            flex: "0 0 440px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 40px",
            borderRight: "1px solid #161616",
          }}
        >
          <div style={{ width: "100%", maxWidth: 360 }}>
            <div style={{ marginBottom: 28 }}>
              <h1
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#F0F0F0",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  marginBottom: 6,
                }}
              >
                Welcome back.
              </h1>
              <p style={{ fontSize: 13, color: "#555555" }}>
                Sign in to your devlog account.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">
                <Field
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email.value}
                  onChange={(v) => setEmail({ value: v, touched: false })}
                  onBlur={() => setEmail((s) => ({ ...s, touched: true }))}
                  error={email.touched ? errors.email : ""}
                />

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 500,
                      color:
                        password.touched && errors.password
                          ? "#7A4A4A"
                          : "#666666",
                      marginBottom: 6,
                      letterSpacing: "0.01em",
                    }}
                  >
                    Password
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      value={password.value}
                      onChange={(e) =>
                        setPassword({ value: e.target.value, touched: false })
                      }
                      onBlur={() =>
                        setPassword((s) => ({ ...s, touched: true }))
                      }
                      style={{
                        width: "100%",
                        backgroundColor: "#161616",
                        border: `1px solid ${
                          password.touched && errors.password
                            ? "#5A2A2A"
                            : "#232323"
                        }`,
                        borderRadius: 8,
                        padding: "10px 40px 10px 14px",
                        fontSize: 14,
                        color: "#F0F0F0",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                        boxSizing: "border-box",
                        caretColor: "#F0F0F0",
                        transition: "border-color 0.12s",
                      }}
                      className="placeholder:text-[#383838] focus:border-[#3A3A3A]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#444444",
                        padding: 2,
                        display: "flex",
                      }}
                      className="hover:text-[#888] transition-colors"
                    >
                      {showPassword ? (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {password.touched && errors.password && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "#7A4A4A",
                        marginTop: 5,
                      }}
                    >
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="flex items-center justify-end"
                style={{ marginTop: 12, marginBottom: 20 }}
              >
                <button
                  type="button"
                  style={{
                    fontSize: 12,
                    color: "#444444",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  className="hover:text-[#888] transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#F0F0F0",
                  color: "#0F0F0F",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "11px 0",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.12s",
                  letterSpacing: "-0.01em",
                }}
                className="hover:bg-[#DEDEDE]"
              >
                Sign in
              </button>

              <div
                className="flex items-center gap-3"
                style={{ margin: "24px 0" }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "#1A1A1A",
                  }}
                />
                <span style={{ fontSize: 12, color: "#2E2E2E" }}>or</span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "#1A1A1A",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                {[
                  {
                    label: "Continue with GitHub",
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Continue with Google",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                          fill="#4A8A6A"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#4A7AA5"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#7A5FA5"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#A08A48"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "1px solid #222222",
                      borderRadius: 8,
                      padding: "10px 0",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#888888",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 9,
                      transition: "border-color 0.12s, color 0.12s",
                    }}
                    className="hover:border-[#333] hover:text-[#C8C8C8]"
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", maxWidth: 480 }}>
            <p
              style={{
                fontSize: 11,
                color: "#2E2E2E",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              From the community
            </p>

            <blockquote style={{ marginBottom: 32 }}>
              <p
                style={{
                  fontSize: 17,
                  color: "#888888",
                  lineHeight: 1.65,
                  fontWeight: 400,
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;Logging publicly changed how I think about learning. I
                used to keep notes in Notion where nobody could see them. Now I
                write like someone&apos;s watching — it makes me go
                deeper.&rdquo;
              </p>
              <footer className="flex items-center gap-2.5">
                <Avatar initials="TE" color="#1A3028" size={24} />
                <span style={{ fontSize: 13, color: "#444444" }}>
                  Tom Eriksson
                </span>
                <span style={{ fontSize: 13, color: "#2E2E2E" }}>·</span>
                <span style={{ fontSize: 13, color: "#333333" }}>
                  @tomerik
                </span>
              </footer>
            </blockquote>

            <div className="flex flex-col gap-2">
              {[entries[0], entries[1], entries[2]].map((e) => (
                <div
                  key={e.id}
                  style={{
                    backgroundColor: "#111111",
                    border: "1px solid #1C1C1C",
                    borderRadius: 10,
                    padding: "12px 16px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Avatar
                      initials={e.author.initials}
                      color={e.author.color}
                      size={20}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#555555",
                      }}
                    >
                      {e.author.name}
                    </span>
                    <TagBadge type={e.tag} />
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#3A3A3A",
                      lineHeight: 1.5,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {e.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-8" style={{ marginTop: 36 }}>
              {[
                { value: "2.4k", label: "developers" },
                { value: "18k", label: "logs posted" },
                { value: "94%", label: "daily active" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#3A3A3A",
                      letterSpacing: "-0.04em",
                      lineHeight: 1.1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#2A2A2A", marginTop: 3 }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
