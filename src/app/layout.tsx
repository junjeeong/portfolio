import type { Metadata } from "next";
import "./globals.css";
import FloatingButtonContainer from "@/app/container/FloatingButtonContainer";

export const metadata: Metadata = {
  title: "junyeong portfolio",
  description: "FE 개발자 정준영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex items-center flex-col">{children}</div>
        <FloatingButtonContainer />
      </body>
    </html>
  );
}
