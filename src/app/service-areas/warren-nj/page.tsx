import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("warren-nj");

export default function Page() {
  return <CityServicePage slug="warren-nj" />;
}
