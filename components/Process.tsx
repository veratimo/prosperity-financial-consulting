import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Process = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-700">Our Process</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                At Prosperity Financial Consulting
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                 we believe in a structured yet flexible approach to financial planning. Our process is designed to provide you with a comprehensive and personalized financial strategy that adapts to your changing needs and goals. Here’s how we ensure your financial success:
                </p>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Initial Consultation</AccordionTrigger>
                    <AccordionContent>
                    We begin with a comprehensive review of your financial situation and goals. This initial meeting allows us to understand your current financial status, future aspirations, and any concerns you may have. We gather detailed information about your income, expenses, investments, liabilities, and other financial factors to create a complete picture of your financial health.                    
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Customized Planning</AccordionTrigger>
                    <AccordionContent>
                    Based on the insights gained during our initial consultation, our team of financial experts crafts a personalized financial plan tailored to your specific needs and objectives. This plan includes detailed strategies for investment, retirement, tax optimization, and risk management. We ensure that the plan is practical, achievable, and aligned with your long-term vision.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Implementation</AccordionTrigger>
                    <AccordionContent>
                    Once you approve your customized plan, we move to the implementation phase. Our team handles the execution of your financial strategy, coordinating with investment managers, tax advisors, and other relevant professionals. We ensure that every aspect of the plan is put into action seamlessly and efficiently, making adjustments as necessary to respond to any immediate financial needs or changes in the market.                    
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Ongoing Support</AccordionTrigger>
                    <AccordionContent>
                    Financial planning is not a one-time event; it is an ongoing process. We provide continuous support and conduct regular reviews to ensure your financial plan remains aligned with your goals. This includes monitoring your investment performance, adjusting strategies in response to market changes, and revisiting your financial goals as your life circumstances evolve. Our commitment to proactive and responsive service means we are always available to address any questions or concerns you may have.                    
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default Process


