import { ministries } from "@/lib/data/ministries";
import MinistryContainer from "./ministry-container";

export default function Ministries() {
  return (
    <div className="space-y-32 py-32 md:mx-24">
      <p className="text-center font-monaSans text-5xl font-bold md:text-8xl">
        OUR MINISTRIES
      </p>
      <div className="grid place-items-center gap-y-32 md:grid-cols-3 md:px-32">
        {ministries.map((ministry) => (
          <MinistryContainer
            key={ministry.ministry}
            icon={<ministry.icon />}
            ministry={ministry.ministry}
            description={ministry.description}
          />
        ))}
      </div>
    </div>
  );
}
