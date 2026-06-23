export type HomepagePathBreakpoint = "mobile" | "tablet" | "desktop";

export type HomepagePathConfig = {
  viewBox: string;
  d: string;
  strokeWidth: number;
};

export const homepageScrollPaths: Record<
  HomepagePathBreakpoint,
  HomepagePathConfig
> = {
  desktop: {
    viewBox: "0 0 1440 7600",
    strokeWidth: 70,
    d: [
      "M 220 140",
      "C 420 320, 620 90, 860 360",
      "S 1240 620, 1040 980",
      "C 760 1380, 180 1240, 260 1780",
      "S 720 2280, 1120 2520",
      "C 1320 2760, 980 3040, 640 3320",
      "S 160 3720, 420 4120",
      "C 760 4520, 1180 4680, 980 5120",
      "S 520 5600, 760 5980",
      "C 1020 6360, 1260 6680, 900 7040",
      "S 360 7420, 720 7560",
    ].join(" "),
  },
  tablet: {
    viewBox: "0 0 1024 7000",
    strokeWidth: 80,
    d: [
      "M 140 120",
      "C 300 280, 500 80, 680 320",
      "S 920 560, 760 900",
      "C 560 1260, 120 1180, 200 1640",
      "S 560 2140, 860 2380",
      "C 1040 2620, 760 2940, 500 3240",
      "S 120 3660, 340 4060",
      "C 620 4460, 920 4680, 740 5120",
      "S 360 5600, 560 6020",
      "C 760 6440, 960 6760, 680 6960",
    ].join(" "),
  },
  mobile: {
    viewBox: "0 0 390 5600",
    strokeWidth: 58,
    d: [
      "M 72 110",
      "C 150 240, 250 70, 318 300",
      "S 360 520, 280 760",
      "C 180 1040, 56 980, 96 1380",
      "S 220 1860, 320 2080",
      "C 360 2320, 260 2580, 150 2860",
      "S 48 3300, 140 3680",
      "C 250 4060, 340 4380, 240 4760",
      "S 110 5200, 196 5520",
    ].join(" "),
  },
};

export function getHomepagePathBreakpoint(
  width: number,
): HomepagePathBreakpoint {
  if (width < 768) return "mobile";
  if (width < 1200) return "tablet";
  return "desktop";
}
