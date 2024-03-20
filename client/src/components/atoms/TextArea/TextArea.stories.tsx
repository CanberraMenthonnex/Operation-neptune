// Storybook story file for InputLabel component

import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
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

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  render: (args) => (
    <TextArea color={args.title}>
      {args.children}
    </TextArea>
  ),
  args: {
    children: 'Content',
    color: 'Color',
  },
}
