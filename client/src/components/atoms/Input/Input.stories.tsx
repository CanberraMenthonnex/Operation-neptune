// Storybook story file for Input component

import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
    },
    before: {
      control: {
        type: 'text',
      },
    },
    after: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => (
    <Input id={args.id} before={args.before} after={args.after}/>
  ),
  args: {
    id: 1,
    before: 'Content',
    after: 'Content'
  },
}
