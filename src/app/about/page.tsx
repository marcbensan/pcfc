import Foursquare from "./_components/foursquare";
import LeadPastor from "./_components/lead-pastor";
import MeetTheTeam from "./_components/meet-the-team";
import Mission from "./_components/mission";
import Values from "./_components/values";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <section id="mission">
        <Mission />
      </section>
      <section id="values">
        <Values />
      </section>
      <section id="foursquare">
        <Foursquare />
      </section>
      <section id="lead-pastor">
        <LeadPastor />
      </section>
      <section id="meet-the-team">
        <MeetTheTeam />
      </section>
    </>
  );
}
