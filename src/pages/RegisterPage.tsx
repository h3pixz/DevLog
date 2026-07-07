import Header from "../components/Header";

export default function RegisterPage() {
  return (
    <>
      <Header mode="minimal" />
      <div
        className="flex justify-center flex-1"
        style={{ padding: "56px 24px 80px" }}
      >
        <div className="w-full max-w-sm tracking-[-0.04em] leading-[1.1]">
          <div>
            <h1 className="text-2xl font-semibold text-[#F0F0F0] mb-2">
              Create your account
            </h1>
            <p className="text-m text-[#555555] leading-[1.5]">Start logging in public. Build your streak.</p>
          </div>
        </div>

        <form></form>
      </div>
    </>
  );
}
