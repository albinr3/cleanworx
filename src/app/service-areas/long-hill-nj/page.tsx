import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("long-hill-nj");

export default function Page() {
  return <CityServicePage slug="long-hill-nj" />;
}
