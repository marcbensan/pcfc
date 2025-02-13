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
      <div className="mx-24 space-y-16 py-44">
        <p className="whitespace-nowrap text-center font-monaSans text-xl font-bold text-white md:text-8xl">
          OUR VALUES
        </p>
        <div className="flex justify-center">
          <Accordion type="single" collapsible className="w-[75%] text-white">
            {values.map((value) => (
              <div key={value.title}>
                <AccordionItem value={value.title}>
                  <AccordionTrigger className="py-8 text-2xl font-bold">
                    {value.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-xl">
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
