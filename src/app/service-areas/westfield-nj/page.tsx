import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("westfield-nj");

export default function Page() {
  return <CityServicePage slug="westfield-nj" />;
}
