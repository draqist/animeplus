import Image from "next/image";

export type MessageWithUserProps = {
  message: {
    text: string;
    avatarUrl: string;
    user: string;
    date: string;
  };
};

function MessageWithUser({ message }: MessageWithUserProps) {
  return (
    <div className="hover:bg-gray-950/[.07] mt-[17px] flex py-0.5 pr-16 pl-4 leading-[22px]">
      <div className="relative mt-0.5 mr-4 h-10 w-10 min-w-fit overflow-hidden rounded-full">
        <Image
          placeholder="blur"
          layout="fixed"
          className="mt-0.5 mr-4 h-10 w-10 rounded-full"
          height={40}
          width={40}
          src={message.avatarUrl}
          alt={message.user}
          blurDataURL={message.avatarUrl}
        />
      </div>
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">{message.user}</span>
          <span className="text-xs font-medium text-gray-400">{message.date}</span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  );
}

export default MessageWithUser;
