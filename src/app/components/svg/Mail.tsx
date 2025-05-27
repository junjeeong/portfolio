"use client";

const Mail = (props: React.SVGProps<SVGSVGElement>) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("wn8624@gmail.com");
      alert("메일 주소가 복사되었습니다.");
    } catch {
      alert("메일 주소 복사에 실패했습니다.");
    }
  };

  return (
    <button onClick={handleCopy}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
        {...props}
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    </button>
  );
};

export default Mail;
