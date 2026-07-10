import Header from "../components/Header";
import Field from "../components/Field";
import { useState } from "react";

type FieldState = { value: string; touched: boolean };

export default function RegisterPage() {
  const [name, setName] = useState<FieldState>({ value: "", touched: false });
  const [email, setEmail] = useState<FieldState>({ value: "", touched: false });
  const [password, setPassword] = useState<FieldState>({
    value: "",
    touched: false,
  });

  const [handle, setHandle] = useState<FieldState>({
    value: "",
    touched: false,
  });

  const handleVal = handle.value.startsWith("@")
    ? handle.value.slice(1)
    : handle.value;

  const errors = {
    name: !name.value.trim() ? "Name is required" : "",
    handle: !handleVal.trim()
      ? "Handle is required"
      : !/^[a-z0-9_]{2,20}$/.test(handleVal)
        ? "2–20 chars: letters, numbers, underscores only"
        : "",
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

  const strength = (() => {
    const p = password.value;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthColor = ["", "#7A3A3A", "#A08A48", "#4D8A6A", "#4A7AA5"][
    strength
  ];
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];

  return (
    <>
      <Header mode="minimal" />
      <div
        className="flex justify-center flex-1"
        style={{ padding: "56px 24px 80px" }}
      >
        <div className="w-full max-w-sm flex flex-col gap-6 tracking-[-0.04em] leading-[1.1]">
          <div>
            <h1 className="text-2xl font-semibold text-[#F0F0F0] mb-2">
              Create your account
            </h1>
            <p className="text-m text-[#555555] leading-[1.5]">
              Start logging in public. Build your streak.
            </p>
          </div>

          <form>
            <div className="flex flex-col gap-4">
              <Field
                label="Full name"
                placeholder="Ada Lovelace"
                value={name.value}
                onChange={(v) => setName({ value: v, touched: false })}
                onBlur={() => setName((s) => ({ ...s, touched: true }))}
                error={name.touched ? errors.name : ""}
              />

              <Field
                label="Username"
                placeholder="@adalovelace"
                value={handle.value}
                onChange={(v) => setHandle({ value: v, touched: false })}
                onBlur={() => setHandle((s) => ({ ...s, touched: true }))}
                error={handle.touched ? errors.handle : ""}
                hint={
                  !handle.touched && !errors.handle && handle.value
                    ? `Your profile will be devlog.sh/${handleVal}`
                    : ""
                }
              />

              <Field
                label="Email"
                type="email"
                placeholder="ada@example.com"
                value={email.value}
                onChange={(v) => setEmail({ value: v, touched: false })}
                onBlur={() => setEmail((s) => ({ ...s, touched: true }))}
                error={email.touched ? errors.email : ""}
              />

              <div>
                <Field
                  label="Password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password.value}
                  onChange={(v) => setPassword({ value: v, touched: false })}
                  onBlur={() => setPassword((s) => ({ ...s, touched: true }))}
                  error={password.touched ? errors.password : ""}
                />
                {password.value && (
                  <div
                    className="flex items-center gap-2.5"
                    style={{ marginTop: 8 }}
                  >
                    <div className="flex gap-1" style={{ flex: 1 }}>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: 3,
                            borderRadius: 2,
                            backgroundColor:
                              i <= strength ? strengthColor : "#1E1E1E",
                            transition: "background-color 0.2s",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: strengthColor,
                        fontWeight: 500,
                        minWidth: 36,
                      }}
                    >
                      {strengthLabel}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#3A3A3A",
                lineHeight: 1.6,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              By creating an account you agree to our{" "}
              <span
                style={{ color: "#555555", cursor: "pointer" }}
                className="hover:text-[#888] transition-colors"
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span
                style={{ color: "#555555", cursor: "pointer" }}
                className="hover:text-[#888] transition-colors"
              >
                Privacy Policy
              </span>
              .
            </p>

            <button
              className="cursor-pointer bg-[#f0f0f0] text-[#0f0f0f] w-full text-sm font-medium rounded-lg border-none"
              style={{ padding: "11px 0" }}
            >
              Create account
            </button>

            <div className="flex items-center gap-3" style={{ margin: "24px 0" }}>
              <div style={{ flex: 1, height: 1, backgroundColor: "#1A1A1A" }} />
              <span style={{ fontSize: 12, color: "#2E2E2E" }}>or</span>
              <div style={{ flex: 1, height: 1, backgroundColor: "#1A1A1A" }} />
            </div>

            <div className="flex flex-col gap-2.5">
              {[
                {
                  label: "Continue with GitHub",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "Continue with Google",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path fill="#4A8A6A" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#4A7AA5" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#7A5FA5" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#A08A48" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
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
    </>
  );
}
