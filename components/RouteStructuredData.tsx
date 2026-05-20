import JsonLd from "@/components/JsonLd";
import { routeSchema } from "@/lib/schema";

export default function RouteStructuredData({ path }: { path: string }) {
  const data = routeSchema(path);

  if (!data) return null;

  return <JsonLd data={data} />;
}
