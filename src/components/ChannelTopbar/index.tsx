import * as Icons from "@/components/Icons";

export type ChannelTopbarProps = {
  channel?: {
    label?: string;
    description?: string;
  };
};

function ChannelTopbar({ channel }: ChannelTopbarProps) {
  return (
    <div className="flex h-12 items-center px-2 shadow-sm">
      <div className="flex items-center">
        <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
        <span className="font-title mr-2 whitespace-nowrap text-white">{channel?.label}</span>
      </div>

      {channel?.description && (
        <>
          <div className="mx-2 hidden h-6 w-px bg-white/[.06] md:block"></div>
          <div className="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">{channel?.description}</div>
        </>
      )}

      {/* Mobile buttons */}
      <div className="ml-auto flex items-center md:hidden">
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.People className="mx-2 h-6 w-6" />
        </button>
      </div>

      {/* Desktop buttons */}
      <div className="ml-auto hidden items-center md:flex">
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Bell className="mx-2 h-6 w-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Pin className="mx-2 h-6 w-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.People className="mx-2 h-6 w-6" />
        </button>
        <div className="relative mx-2">
          <input
            type="text"
            placeholder="Search"
            className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder:text-gray-400"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Icons.Spyglass className="mr-1.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Inbox className="mx-2 h-6 w-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.QuestionCircle className="mx-2 h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default ChannelTopbar;
