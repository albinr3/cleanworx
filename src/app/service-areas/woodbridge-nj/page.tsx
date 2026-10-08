import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("woodbridge-nj");

export default function Page() {
  return <CityServicePage slug="woodbridge-nj" />;
}
