import { APP_STYLES } from "@/lib/styles/app-shared";

export default function MinistryContainer({
  icon,
  ministry,
  description,
}: Ministry): JSX.Element {
  return (
    <div className="flex max-w-52 flex-col items-center justify-center space-y-4 text-center">
      <div className="h-16 w-16">{icon}</div>
      <p className={APP_STYLES.sectionHeading}>{ministry}</p>
      <p>{description}</p>
    </div>
  );
}
