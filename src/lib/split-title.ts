export function splitTitle(title: string): { accent: string; light: string } {
  const words = title.trim().split(/\s+/);

  if (words.length <= 1) {
    return { accent: title, light: "" };
  }

  const mid = Math.ceil(words.length / 2);

  return {
    accent: words.slice(0, mid).join(" "),
    light: words.slice(mid).join(" "),
  };
}
