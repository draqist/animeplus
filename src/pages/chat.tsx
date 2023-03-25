/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import ChannelList from "@/components/ChannelList";
import ChannelTopbar from "@/components/ChannelTopbar";
import Message from "@/components/Message";
import ServerHeader from "@/components/ServerHeader";
import { getMessages } from "@/data";

const Chat = () => {
  const data = {
    id: 1,
    label: "Tailwind CSS",
    img: "tailwind.png",
    categories: [
      {
        id: 1,
        label: "",
        channels: [
          {
            id: 1,
            label: "welcome",
            description: "Introduction to the Tailwind CSS framework and community.",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: 2,
            label: "announcements",
            icon: "Speakerphone",
            messages: getMessages(),
          },
        ],
      },
    ],
  };
  let channel = [
    {
      id: 3,
      label: "general",
      description: "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
      unread: true,
      messages: getMessages(),
    },
    {
      id: 4,
      label: "plugins",
      description: "Tailwind CSS plugins.",
      unread: true,
      messages: getMessages(),
    },
    {
      id: 5,
      label: "help",
      description: "Help with Tailwind CSS and build process integration.",
      unread: true,
      messages: getMessages(),
    },
    {
      id: 6,
      label: "internals",
      description: "Development of the Tailwind CSS framework itself.",
      messages: getMessages(),
    },
  ];
  let message = {
    text: "So I am sure this is supper out of support. But I started using the Spotlight template for my personal page. I converted it to TypeScript (mostly) and it runs great locally npm run dev I can access my articles via slug and they show up on the home page and articles/blog page."
  }
  
  return (
    <>
      <div className="hidden w-60 flex-col bg-gray-800 md:flex">
        <ServerHeader name={"CURRENT USER"} />
        <ChannelList server={data} />
      </div>
      <div className="flex min-w-0 flex-1 shrink flex-col bg-gray-700">
        <ChannelTopbar />
        <div className="flex-1 overflow-y-scroll">
          {/* {channel?.messages.map((message, i) => (
            <div key={message.id}>
              {i === 0 || message.user !== channel?.messages[i - 1].user ? (
                <MessageWithUser message={message} />
              ) : (
                <Message message={message} />
                )}
            </div>
          ))} */}
          <Message message={message} />
        </div>
      </div>
      {/* <div className="p:2 flex h-screen flex-1 flex-col justify-between sm:p-6">
        <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute right-0 bottom-0 text-green-500">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt=""
                className="h-10 w-10 rounded-full sm:h-16 sm:w-16"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="mt-1 flex items-center text-2xl">
                <span className="mr-3 text-gray-700">Anderson Vanhron</span>
              </div>
              <span className="text-lg text-gray-600">Junior Developer</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="messages"
          className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto p-3"
        >
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Can be verified on any platform using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-1 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    Your error message says permission denied, npm global installs must be given root privileges.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-2 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    Command was run with root privileges. I'm sure about that.
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    I've update the description so it's more obviously now
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    FYI https://askubuntu.com/a/700266/510172
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Check the line above (it ends with a # so, I'm running it as root )
                    <pre># npm install -g @vue/devtools</pre>
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-1 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-2 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support
                    it :
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-1 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white ">Are you using sudo?</span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    without using sudo
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-2 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    It seems like you are from Mac OS world. There is no /Users/ folder on linux ?
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    I have no issue with any other packages installed with root permission globally.
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-1 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                    yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the
                    problem
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-2 h-6 w-6 rounded-full"
              />
            </div>
          </div>
          <div className="chat-message">
            <div className="flex items-end">
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    I get the same error on Arch Linux (also with sudo)
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
                    I also have this issue, Here is what I was doing until now: #1076
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                    even i am facing
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="order-1 h-6 w-6 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 border-t-2 border-gray-200 px-4 pt-4 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full rounded-md bg-gray-200 py-3 pl-12 text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 hidden items-center sm:flex">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition duration-500 ease-in-out hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-white transition duration-500 ease-in-out hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 h-6 w-6 rotate-90 transform"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Chat;
