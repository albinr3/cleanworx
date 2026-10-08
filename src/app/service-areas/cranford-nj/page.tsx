import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("cranford-nj");

export default function Page() {
  return <CityServicePage slug="cranford-nj" />;
}
