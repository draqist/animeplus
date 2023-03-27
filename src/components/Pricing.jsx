import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [{ value: "monthly", label: "Monthly", priceSuffix: "/month" }];
const tiers = [
  {
    name: "Free",
    id: "free",
    href: "#free",
    price: { monthly: "$0", annually: "$0" },
    description: "A basic plan to get you started with chatting with your favorite fictional characters.",
    features: ["Limited to 3 chats", "Limited to 10 messages per chat", "Limited to 75 characters per message"],
    mostPopular: false,
  },
  {
    name: "Starter",
    id: "tier-starter",
    href: "#starter",
    price: { monthly: "$9.99" },
    description: "An affordable plan to enjoy unlimited chatting with your favorite fictional characters.",
    features: [
      "Unlimited chats",
      "Unlimited messages per chat",
      "Limited to 150 characters per message",
      "Limited context from characters (5 previous messages)",
      "No Group Chats",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#premium",
    price: { monthly: "$19.99" },
    description: "The ultimate plan to take your ChatFic experience to the next level.",
    features: [
      "Unlimited chats",
      "Unlimited messages per chat",
      "Limited to 250 characters per message",
      "Increased context from characters (10 previous messages)",
      "Group chats with up to 4 ChatFic characters",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for &nbsp;everyone.&nbsp;
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for your taste.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? "bg-indigo-500" : "", "cursor-pointer rounded-full py-1 px-2.5")
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "bg-white/5 ring-2 ring-indigo-500" : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10",
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 py-1 px-2.5 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
