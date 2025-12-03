import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Input, { InputWrapper } from './index'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const NormalInput: Story = {
  render: () => (
    <div class="w-80">
      <InputWrapper fullWidth>
        <Input placeholder="Your Name" />
      </InputWrapper>
    </div>
  ),
}

export const SearchInput: Story = {
  render: () => (
    <div class="w-80">
      <InputWrapper fullWidth>
        <Input placeholder="Search..." />
        <svg
          class="w-5 h-5 mr-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </InputWrapper>
    </div>
  ),
}
