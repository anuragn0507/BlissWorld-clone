//Navbar
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


export default function LowerNavbar() {

  return (
    <Box alignItems='center' background='skyblue' display='flex'>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          BEST SELLERS
        </MenuButton>
        <MenuList width={'auto'}>
          <h3>BEST SELLERS BY CATEGORY</h3>
          <MenuItem>Body & Hair Care</MenuItem>
          <MenuItem>Skincare</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          SKINCARE
        </MenuButton>
        <Box display={'auto'}>
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

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          BODY & HAIR CARE
        </MenuButton>
        <Box display={'auto'}>
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

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          SETS & KITS
        </MenuButton>
        <Box display={'auto'}>
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

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          SHOP ALL
        </MenuButton>
        <Box display={'auto'}>
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

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          GIFT GUIDE
        </MenuButton>
        <Box display={'auto'}>
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

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' background='skyblue' color='white'>
          THIS IS BLISS
        </MenuButton>
        <Box display={'auto'}>
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

