import { Hero } from "../components/Hero";
import { Foundation } from "../components/Foundation";
import { Disciplines } from "../components/Disciplines";
import { Impact } from "../components/Impact";
import { Process } from "../components/Process";
import { Insights } from "../components/Insights";
import { Invitation } from "../components/Invitation";
import { Section } from "../components/Section";

export const Home = () => {
  return (
    <main className="space-y-8 lg:space-y-12">
      {/* Screen 1: The Opening */}
      <Section fullHeight={false}>
        <Hero />
      </Section>
      {/* Screen 2: The Foundation */}
      <Section fullHeight={false}>
        <Foundation />
      </Section>
      {/* Screen 3: The Disciplines */}
      <Section fullHeight={false}>
        <Disciplines />
      </Section>
      {/* Screen 4: The Impact */}
      <Section fullHeight={false}>
        <Impact />
      </Section>
      {/* Screen 5: Our Process */}
      <Section fullHeight={false}>
        <Process />
      </Section>
      {/* Screen 6: Thought Leadership */}
      <Section fullHeight={false}>
        <Insights />
      </Section>
      {/* Screen 7: The Invitation */}
      <Section fullHeight={false}>
        <Invitation />
      </Section>
    </main>
  );
};
