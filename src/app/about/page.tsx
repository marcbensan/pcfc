import Foursquare from "./_components/foursquare";
import LeadPastor from "./_components/lead-pastor";
import MeetTheTeam from "./_components/meet-the-team";
import Mission from "./_components/mission";
import Values from "./_components/values";

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Mission />
      <Values />
      <Foursquare />
      <LeadPastor />
      <MeetTheTeam />
    </>
  );
}
