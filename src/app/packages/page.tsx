import { redirect } from "next/navigation";
import { getPricingCategoryPath } from "@/data/packages";

export default function PackagesPage() {
  redirect(getPricingCategoryPath("logo"));
}
