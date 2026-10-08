import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("bridgewater-nj");

export default function Page() {
  return <CityServicePage slug="bridgewater-nj" />;
}
