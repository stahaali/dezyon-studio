import { AboutCtaBanner } from "@/components/About/AboutCtaBanner/AboutCtaBanner";
import { BookPublishingAuthors } from "@/components/BookPublishing/BookPublishingAuthors";
import { BookPublishingFaq } from "@/components/BookPublishing/BookPublishingFaq";
import { BookPublishingGenres } from "@/components/BookPublishing/BookPublishingGenres";
import { BookPublishingHero } from "@/components/BookPublishing/BookPublishingHero";
import { BookPublishingIntro } from "@/components/BookPublishing/BookPublishingIntro";
import { BookPublishingPlatforms } from "@/components/BookPublishing/BookPublishingPlatforms";
import { BookPublishingProcess } from "@/components/BookPublishing/BookPublishingProcess";
import { BookPublishingWritingCta } from "@/components/BookPublishing/BookPublishingWritingCta";
import { BookPublishingServices } from "@/components/BookPublishing/BookPublishingServices";
import { BookPublishingStandOut } from "@/components/BookPublishing/BookPublishingStandOut";
import { BookPublishingStats } from "@/components/BookPublishing/BookPublishingStats";
import { BookPublishingSupport } from "@/components/BookPublishing/BookPublishingSupport";
import pageStyles from "@/app/book-publishing/page.module.css";

export function BookPublishingContent() {
  return (
    <div className={pageStyles.page}>
      <BookPublishingHero />
      <BookPublishingIntro />
      <BookPublishingServices />
      <BookPublishingStandOut />
      <BookPublishingProcess />
      <BookPublishingWritingCta />
      <BookPublishingPlatforms />
      <BookPublishingSupport />
      <BookPublishingStats />
      <BookPublishingGenres />
      <BookPublishingAuthors />
      <BookPublishingFaq />
      <AboutCtaBanner />
    </div>
  );
}
