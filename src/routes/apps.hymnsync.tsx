import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/app-detail-page";
import { getApp } from "@/data/apps";
import { SITE } from "@/data/site";

const app = getApp("hymnsync")!;

export const Route = createFileRoute("/apps/hymnsync")({
  component: function HymnSyncApp() {
    return <AppDetailPage app={app} />;
  },
  head: () => ({
    meta: [{ title: `${app.name} — ${SITE.name}` }, { name: "description", content: app.summary }],
  }),
});
