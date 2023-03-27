import { useState } from "react";
import ChannelLink from "@/components/ChannelLink";
import { Arrow } from "@/components/Icons";
import { ServerData } from "@/data";

export type ChannelListProps = {
  server: ServerData;
};

function ChannelList({ server }: ChannelListProps) {
  let [closedCategories, setClosedCategories] = useState<Array<number>>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId],
    );
  }

  return (
    <div className="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300 scrollbar-hide">
      {server.categories.map((category) => (
        <div key={category.id}>
          {category.label && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="font-title flex w-full items-center px-0.5 text-xs uppercase tracking-wide hover:text-gray-100"
            >
              <Arrow
                className={`${
                  closedCategories.includes(category.id) ? "-rotate-90" : ""
                } mr-0.5 h-3 w-3 transition duration-200`}
              />
              {category.label}
            </button>
          )}

          <div className="mt-[5px] space-y-0.5">
            {category.channels
              .filter((channel) => {
                let categoryIsOpen = !closedCategories.includes(category.id);

                return categoryIsOpen || channel.unread;
              })
              .map((channel) => (
                <ChannelLink serverId={server.id} channel={channel} key={channel.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChannelList;
