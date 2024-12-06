import { Button } from "@/components/button-catalyst";

export default function About(): JSX.Element {
  return (
    <>
      <div className="h-screen bg-ttuPattern bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col space-y-8 p-8">
          <p className="font-orbitron w-3/4 max-w-[800px] text-[50px] font-bold text-white md:text-[70px]">
            Praise Christian Family Church
          </p>
          <div>
            <Button outline className="cursor-pointer !p-3">
              Watch Online
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
