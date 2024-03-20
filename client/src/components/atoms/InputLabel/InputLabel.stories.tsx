// Storybook story file for InputLabel component

import type { Meta, StoryObj } from '@storybook/react'
import InputLabel from './InputLabel'

const meta: Meta<typeof InputLabel> = {
  title: 'Atoms/InputLabel',
  component: InputLabel,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof InputLabel>

export const Default: Story = {
  render: (args) => (
    <InputLabel color={args.title}>
      {args.children}
    </InputLabel>
  ),
  args: {
    children: 'Content',
    color: 'Color',
  },
}
