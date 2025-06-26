"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqData } from "@/data/faq";

export default function FaqSection() {
  return (
    <section className="py-16  dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 ">
          Frequently Asked Questions
        </h2>

        <Accordion type="multiple" className="space-y-4">
          {FaqData.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-medium text-gray-800 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

