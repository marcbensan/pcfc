const imgLink =
  "https://conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png";

export const teamMembers: TeamMember[] = [
  {
    img: imgLink,
    name: "Mark Dolor",
    position: "Senior Lead Pastor",
  },
  {
    img: imgLink,
    name: "Ritches Dolor",
    position: "Connect Group Leader",
  },
  {
    img: imgLink,
    name: "Nemie Dolor",
    position: "Senior Pastor and Technical Leader",
  },
  {
    img: imgLink,
    name: "Gina Dolor",
    position: "Ex-Lead Pastor",
  },
  {
    img: imgLink,
    name: "Gerry Kalaw",
    position: "Pastor",
  },
  {
    img: imgLink,
    name: "Rose Carandang",
    position: "Pastor",
  },
  {
    img: imgLink,
    name: "EJ Bensan",
    position: "Worship Ministry Director",
  },
  {
    img: imgLink,
    name: "Angela Bensan",
    position: "Communications Director",
  },
  {
    img: imgLink,
    name: "Venna Domingsil",
    position: "Productions Director",
  },
  {
    img: imgLink,
    name: "Mark Namnama",
    position: "Youth Director",
  },
  {
    img: imgLink,
    name: "Jasmine Gines",
    position: "Project Manager",
  },
  {
    img: imgLink,
    name: "Lhiz Resma",
    position: "Guest Experience Director",
  },
];

interface TeamMember {
  img: string;
  name: string;
  position: string;
}
