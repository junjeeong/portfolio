import type { Metadata } from "next";
import FloatingButtons from "@/app/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  title: "junyeong portfolio",
  description: "FE 개발자 정준영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="flex flex-col items-center">{children}</main>
        {modal}
        <div id="modal-root"></div>
        <FloatingButtons />
      </body>
    </html>
  );
}
