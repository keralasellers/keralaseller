import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "₹99/month",
      features: ["Up to 10 products", "1 Online shop link", "No commission, full control"],
      colorClass: "text-green-500",
    },
    {
      name: "Pro",
      price: "₹299/month",
      features: ["Up to 50 products", "Advanced analytics", "Basic support"],
      colorClass: "text-blue-500",
    },
    {
      name: "Unlimited",
      price: "₹499/month",
      features: ["Unlimited products", "Premium features", "Priority support"],
      colorClass: "text-purple-500",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple & Affordable Plans</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the perfect plan for your business needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${plan.colorClass}`}>{plan.name}</CardTitle>
                <CardDescription className="text-4xl font-bold mt-2">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
