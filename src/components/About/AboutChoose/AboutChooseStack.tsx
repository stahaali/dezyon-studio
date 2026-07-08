import type { aboutChoose } from "@/data/about";
import { AboutChooseCard } from "./AboutChooseCard";
import styles from "./AboutChoose.module.css";

type ChooseCard = (typeof aboutChoose.cards)[number];

type AboutChooseStackProps = {
  cards: readonly ChooseCard[];
};

export function AboutChooseStack({ cards }: AboutChooseStackProps) {
  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <AboutChooseCard key={card.id} card={card} />
      ))}
    </div>
  );
}
