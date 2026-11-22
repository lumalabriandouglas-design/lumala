import { createFileRoute } from "@tanstack/react-router";
import { AppDetailPage } from "@/components/app-detail-page";
import { getApp } from "@/data/apps";
import { SITE } from "@/data/site";

const app = getApp("kwaya")!;

export const Route = createFileRoute("/apps/kwaya")({
  component: function KwayaApp() {
    return <AppDetailPage app={app} />;
  },
  head: () => ({
    meta: [{ title: `${app.name} — ${SITE.name}` }, { name: "description", content: app.summary }],
  }),
});
