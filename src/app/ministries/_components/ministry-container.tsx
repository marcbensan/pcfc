export default function MinistryContainer({
  icon,
  ministry,
  description,
}: Ministry): JSX.Element {
  return (
    <div className="flex max-w-52 flex-col items-center justify-center space-y-4 text-center">
      <div className="h-16 w-16">{icon}</div>
      <p className="font-barlow text-2xl font-bold">{ministry}</p>
      <p>{description}</p>
    </div>
  );
}
