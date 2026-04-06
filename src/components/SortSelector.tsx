import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by reveleance</MenuButton>
            <MenuList>
                <MenuItem>222</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector