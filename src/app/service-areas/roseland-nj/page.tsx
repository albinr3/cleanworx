import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("roseland-nj");

export default function Page() {
  return <CityServicePage slug="roseland-nj" />;
}
