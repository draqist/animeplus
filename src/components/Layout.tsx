import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";

export default function Layout({ children }) {
  const sidebar = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("")

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="whiteAlpha.700"
        _hover={{
          bg: "blackAlpha.300",
          color: "white",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#E3E5E8"
      _dark={{ bg: "brand.500" }}
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Logo />
        {/* <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Choc UI
        </Text> */}
      </Flex>
      <Flex direction="column" as="nav" fontSize="sm" color="white" aria-label="Main Navigation">
        <NavItem icon={MdHome}>Home</NavItem>
      </Flex>
    </Box>
  );
  return (
    <Box as="section" bg="white" _dark={{ bg: "#313338" }} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="18"
          bg="white"
          borderBottom="1px solid #26282C"
          boxShadow="lg"
          _dark={{ bg: "#313338" }}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input focusBorderColor="whiteAlpha.400" placeholder="Search for articles..." />
          </InputGroup>

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" px="16px" py="12" bg="#313338" overflow={"scroll"}>
          {/* Add content here, remove div below  */}
          {children}
          <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Ask me anything</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Lorem count={2} /> */}
                Nostrud laboris laboris consequat minim exercitation dolore nisi. Anim mollit commodo fugiat laboris
                tempor id sit quis labore ipsum mollit esse deserunt. Do commodo elit eiusmod nostrud amet incididunt
                laborum ad ex consequat. Non nostrud sit consequat sit minim laborum id ad consequat amet.
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Box w="100%" pos="relative" bottom="0px">
            {/* <Chats/> */}
            <div className="flex justify-between gap-y-4 gap-x-8 bg-inherit p-6 text-white md:flex-row  md:items-center lg:flex-col lg:px-8">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex flex-none items-center gap-x-5">
                <button
                  type="button"
                  className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Send
                </button>
              </div>
            </div>
          </Box>
          {/* <Flex
            as="button"
            w="60px"
            h="60px"
            borderRadius="50%"
            bgColor="white"
            color="black"
            pos="absolute"
            bottom="40"
            right="40px"
            justifyContent="center"
            alignItems={"center"}
            onClick={onOpen}
          >
            <AiOutlinePlus fontSize={"24px"} />
          </Flex> */}
        </Box>
      </Box>
    </Box>
  );
}
