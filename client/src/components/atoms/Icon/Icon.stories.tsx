// Storybook story file for Icon component

import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'


const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  render: (args) => (
    <Icon name={args.name} size={args.size} color={args.color}/>
  ),
  args: {
    name: 'Content',
    size: 10,
    color: 'Color',
  },
}
