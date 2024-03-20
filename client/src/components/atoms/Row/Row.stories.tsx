// Storybook story file for Row component

import type { Meta, StoryObj } from '@storybook/react'
import Row from './Row'

const meta: Meta<typeof Row> = {
  title: 'Atoms/Row',
  component: Row,
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

type Story = StoryObj<typeof Row>

export const Default: Story = {
  render: (args) => (
    <Row color={args.title}>
    </Row>
  ),
  args: {
    children: 'Content',
    color: 'Color',
  },
}
