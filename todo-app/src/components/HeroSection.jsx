import LeftPerson from "./LeftPerson";
import CenterContent from "./CenterContent";
import RightPerson from "./RightPerson";

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <LeftPerson />
        <CenterContent onGetStarted={onGetStarted} />
        <RightPerson />
      </div>
    </section>
  );
}
