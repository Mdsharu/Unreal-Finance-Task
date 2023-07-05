import React from 'react';
import { Dropdown } from 'rsuite';

const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      <Dropdown.Item>USDC.e</Dropdown.Item>
      <Dropdown.Item>Ethereum</Dropdown.Item>
      <Dropdown.Item>Polygon</Dropdown.Item>
      <Dropdown.Item>Arbitrum</Dropdown.Item>
    </Dropdown>
);

export default CustomDropdown;

