import { Button } from "@/components/button-catalyst";

export default function Foursquare() {
  return (
    <div className="my-44 flex flex-col items-center justify-center space-y-16">
      <p className="font-barlow text-8xl font-bold">WHAT IS FOURSQUARE?</p>
      <Button
        href="https://www.foursquare.org/about/beliefs/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-w-[200px] max-w-[300px] flex-grow cursor-pointer !rounded-full !p-4"
      >
        <p className="font-barlow">WHAT WE BELIEVE</p>
      </Button>
    </div>
  );
}
