import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Just Chill Benefits"
      >
       Unwind, Explore, and Recharge: Your Space for Relaxation and Inspiration.
       More contents on the way.
      </SectionTitle>
    </Container>
  );
}
