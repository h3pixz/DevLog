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
          </form>
        </div>
      </div>
    </>
  );
}
