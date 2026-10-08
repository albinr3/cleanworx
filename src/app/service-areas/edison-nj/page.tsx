import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("edison-nj");

export default function Page() {
  return <CityServicePage slug="edison-nj" />;
}
