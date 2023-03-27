import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useDisclosure
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import { MdHome } from "react-icons/md";

export default function Sidebar({children}) {
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
    </Box>
  );
}
