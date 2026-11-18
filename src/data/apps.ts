export type PortfolioApp = {
  slug: "hymnsync" | "kwaya";
  name: string;
  kicker: string;
  summary: string;
  versionName: string;
  versionCode: number;
  packageId: string;
  apkPath: string;
  apkFileName: string;
  icon: string;
  iconAlt: string;
  webUrl?: string;
  playUrl: string;
  /** Set true once the app has a public or testing Play listing. */
  playEnabled: boolean;
  workSlug?: string;
};

export const APPS: PortfolioApp[] = [
  {
    slug: "hymnsync",
    name: "Anglican Hymn Sync",
    kicker: "Hymnal",
    summary:
      "Luganda and English Anglican hymnal for web and Android. Search, setlists, and a proper now-playing deck.",
    versionName: "1.0.0",
    versionCode: 6,
    packageId: "com.lumala.anglicanhymnsync",
    apkPath: "/downloads/hymnsync.apk",
    apkFileName: "hymnsync.apk",
    icon: "/apps/hymnsync-icon.png",
    iconAlt: "Anglican Hymn Sync app icon",
    webUrl: "https://anglicanhymn-sync.vercel.app",
    playUrl: "https://play.google.com/store/apps/details?id=com.lumala.anglicanhymnsync",
    playEnabled: true,
    workSlug: "anglican-hymn-sync",
  },
  {
    slug: "kwaya",
    name: "Kwaya: Anglican Choirs",
    kicker: "Choir player",
    summary:
      "One player for the Anglican choirs of Uganda. Choir profiles, and the hymns they own — on the web and on Android.",
    versionName: "1.0.0",
    versionCode: 5,
    packageId: "com.kwaya.kwaya",
    apkPath: "/downloads/kwaya.apk",
    apkFileName: "kwaya.apk",
    icon: "/apps/kwaya-icon.png",
    iconAlt: "Kwaya: Anglican Choirs app icon",
    webUrl: "https://kwaya.vercel.app",
    playUrl: "https://play.google.com/store/apps/details?id=com.kwaya.kwaya",
    playEnabled: false,
    workSlug: "kwaya",
  },
];

export function getApp(slug: string): PortfolioApp | undefined {
  return APPS.find((app) => app.slug === slug);
}

export function isAndroidUserAgent(ua: string): boolean {
  return /Android/i.test(ua);
}
