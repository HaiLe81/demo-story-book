import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import  App  from "../App";
import ColorButton from "../components/ColorButton/ColorButton";

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span> 
  </Button>
);

export const colorButton = () => <ColorButton></ColorButton>

export const app = () => <App/>;