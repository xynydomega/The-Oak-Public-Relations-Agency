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
    <main className="space-y-24 lg:space-y-32">
      {/* Screen 1: The Opening */}
      <Section>
        <Hero />
      </Section>
      {/* Screen 2: The Foundation */}
      <Section>
        <Foundation />
      </Section>
      {/* Screen 3: The Disciplines */}
      <Section>
        <Disciplines />
      </Section>
      {/* Screen 4: The Impact */}
      <Section>
        <Impact />
      </Section>
      {/* Screen 5: Our Process */}
      <Section>
        <Process />
      </Section>
      {/* Screen 6: Thought Leadership */}
      <Section>
        <Insights />
      </Section>
      {/* Screen 7: The Invitation */}
      <Section>
        <Invitation />
      </Section>
    </main>
  );
};
