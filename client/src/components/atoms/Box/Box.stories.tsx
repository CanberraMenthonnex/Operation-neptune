import type { Meta, StoryObj } from '@storybook/react'

import Box from './Box'

const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    action: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Box>

export const Default: Story = {
  render: (args) => (
    <Box title={args.title} action={args.action}>
      {args.children}
    </Box>
  ),
  args: {
    children: 'Content',
    title: 'Title',
    action: 'Action',
  },
}
