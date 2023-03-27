import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import { AiOutlinePlus } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdHome } from "react-icons/md";

export default function Layout({children}) {
  const sidebar = useDisclosure();

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
      _dark={{bg: "brand.500"}}
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
        {/* <NavItem icon={FaRss}>Articles</NavItem>
        <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <NavItem icon={HiCode}>Integrations</NavItem>
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem> */}
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
          <InputGroup  w="96" display={{ base: "none", md: "flex" }}>
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
          <Flex as="button" w="60px" h="60px" borderRadius="50%" bgColor="white" color="black" pos="absolute" bottom="40" right="40px" justifyContent="center" alignItems={"center"}>
            <AiOutlinePlus fontSize={"24px"}/>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
