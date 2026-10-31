import { CityServicePage, getCityMetadata } from "@/components/autodetail/CityServicePage";

export const metadata = getCityMetadata("bernardsville-nj");

export default function Page() {
  return <CityServicePage slug="bernardsville-nj" />;
}
