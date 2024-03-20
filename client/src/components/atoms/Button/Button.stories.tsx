// Storybook story file for Button component

import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => (
    <Button color={args.title}>
      {args.children}
    </Button>
  ),
  args: {
    children: 'Content',
    color: 'Color',
  },
}
