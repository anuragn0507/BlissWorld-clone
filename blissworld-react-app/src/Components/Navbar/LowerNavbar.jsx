//Navbar
import React from 'react'
import { Box, Stack, useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


export default function LowerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const btnRef1 = React.useRef()

  return (
    <Box alignItems='center' background='lightblue'>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='lightblue'>
          BEST SELLERS
        </MenuButton>
        <MenuList width={1100}>
          <h3>BEST SELLERS BY CATEGORY</h3>
          <MenuItem>Body & Hair Care</MenuItem>
          <MenuItem>Skincare</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='lightblue'>
          SKINCARE
        </MenuButton>
        <Box display='flex'>
        <MenuList width={100}>
          <h3>BY CATEGORY</h3>
          <MenuItem>Best Sellers</MenuItem>
          <MenuItem>Mini Bliss</MenuItem>
          <h3>BY CATEGORY</h3>
          <MenuItem>Best Sellers</MenuItem>
          <MenuItem>Mini Bliss</MenuItem>
        </MenuList>
        </Box>
      </Menu>
    
    </Box>
  )
}

