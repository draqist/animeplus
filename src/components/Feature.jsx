import {
  ArrowLeftIcon,
  ChatBubbleLeftIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  PencilIcon,
  ServerIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Unlimited Messages",
    description:
      "Send as many messages as you want to your favorite fictional characters, and receive responses in real-time.",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Contextual Conversations",
    description:
      "Get deeper context in your conversations with characters with access to previous messages and group chats with multiple characters.",
    icon: ArrowLeftIcon,
  },
  {
    name: "Secure and Private",
    description:
      "Rest easy knowing that your conversations with fictional characters are completely private and secure.",
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Introducing </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ChatFic</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The only app that lets you chat with your favorite characters from literature, film, and more. Join now
                and step into a world of endless conversation
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="shadow-xl w-[48rem] max-w-none rounded-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
