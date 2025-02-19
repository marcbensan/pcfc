import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { values } from "@/lib/data/values";

export default function Values(): JSX.Element {
  return (
    <section className="diagonal-section relative z-[1] bg-primarypcfc">
      <div className="mx-4 space-y-16 py-44 md:mx-24">
        <p className="text-center font-monaSans text-7xl font-bold text-white md:text-8xl">
          OUR VALUES
        </p>
        <div className="flex justify-center">
          <Accordion type="single" collapsible className="w-[75%]">
            {values.map((value) => (
              <div key={value.title}>
                <AccordionItem value={value.title}>
                  <AccordionTrigger className="py-8 font-barlow text-xl font-bold text-white md:text-2xl">
                    {value.title}
                  </AccordionTrigger>
                  <AccordionContent className="font-barlow text-lg text-white md:mt-4 md:text-xl">
                    {value.description}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
