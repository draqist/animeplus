import { Check, Chevron, Verified } from "@/components/Icons";

export type ServerHeaderProps = {
  name: string;
};

function ServerHeader({ name }: ServerHeaderProps) {
  return (
    <button className="font-title hover:bg-gray-550/[0.16] flex h-12 items-center px-4 text-[15px] font-semibold text-white shadow-sm transition">
      <div className="relative mr-1 h-4 w-4">
        <Verified className="text-gray-550 absolute h-4 w-4" />
        <Check className="absolute h-4 w-4" />
      </div>
      {name}
      <Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
    </button>
  );
}

export default ServerHeader;
