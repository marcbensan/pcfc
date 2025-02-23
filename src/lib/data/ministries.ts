import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardIcon,
  FaceSmileIcon,
  HandRaisedIcon,
  LinkIcon,
  LockClosedIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export const Ministries: Ministry[] = [
  {
    icon: MusicalNoteIcon,
    ministry: "Worship",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: UserGroupIcon,
    ministry: "Youth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },

  {
    icon: UsersIcon,
    ministry: "Couples",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: VideoCameraIcon,
    ministry: "Production",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: ClipboardIcon,
    ministry: "Guest Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: LinkIcon,
    ministry: "Connect Group",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: FaceSmileIcon,
    ministry: "Kids",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: HandRaisedIcon,
    ministry: "Praise Moves",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: ChatBubbleLeftEllipsisIcon,
    ministry: "Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
  {
    icon: LockClosedIcon,
    ministry: "Security",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est eius enim, facere fuga inventore. Magni omnis animi cum quod placeat totam modi quasi obcaecati. Provident aperiam nesciunt a cupiditate!",
  },
];

type Ministry = {
  icon: React.ComponentType;
  ministry: string;
  description: string;
};
