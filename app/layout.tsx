/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { getServerSideConfig } from "./config/server";

export const metadata: Metadata = {
  title: "发扬滇风",
  description: "你要不要一起来发扬滇风？",
  appleWebApp: {
    title: "发扬滇风",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverConfig = getServerSideConfig();

  return (
    <html lang="zh-CN">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta name="keywords" content="发扬滇风, AI 聊天,聊天, DeepSeek, 个人 AI 助手, yjychat" />
        <meta name="baidu-site-verification" content="codeva-scoQ51tJDO" />
        export const metadata: Metadata = {
  title: "发扬滇风",
  description: "你要不要一起来发扬滇风？",
  openGraph: {
    title: "发扬滇风",
    description: "你要不要一起来发扬滇风？",
    url: "https://yjychat.uk",
    siteName: "发扬滇风",
    locale: "zh_CN",
    type: "website",
  },
  appleWebApp: {
    title: "发扬滇风",
    statusBarStyle: "default",
  },
};
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        {children}
        {serverConfig?.isVercel && (
          <>
            <SpeedInsights />
          </>
        )}
        {serverConfig?.gtmId && (
          <>
            <GoogleTagManager gtmId={serverConfig.gtmId} />
          </>
        )}
        {serverConfig?.gaId && (
          <>
            <GoogleAnalytics gaId={serverConfig.gaId} />
          </>
        )}
      </body>
    </html>
  );
}
