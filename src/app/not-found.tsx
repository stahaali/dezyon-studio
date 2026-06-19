import type { Metadata } from "next";
import { NotFoundPage } from "@/components/NotFound/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Dezyon Studio",
  description:
    "The page you are looking for could not be found. Return to Dezyon Studio homepage or contact our team.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
