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
      <div className="mx-24 py-44">
        <p className="whitespace-nowrap text-center font-monaSans text-xl font-bold text-white md:text-8xl">
          OUR VALUES
        </p>
        <Accordion type="single" collapsible className="w-full text-white">
          {values.map((value) => (
            <div key={value.title}>
              <AccordionItem value={value.title}>
                <AccordionTrigger className="font-bold">
                  {value.title}
                </AccordionTrigger>
                <AccordionContent>{value.description}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
