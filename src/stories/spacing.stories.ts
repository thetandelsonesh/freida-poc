import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundation/Spacing',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

const spacingGuidelines = `
<div class="freida-v2">
  <div class="flex flex-col gap-1">
    <div class="font-mono">--spacing-0: 0px;</div>
    <div class="font-mono">--spacing-1: 2px;</div>
    <div class="font-mono">--spacing-2: 4px;</div>
    <div class="font-mono">--spacing-3: 6px;</div>
    <div class="font-mono">--spacing-4: 8px;</div>
    <div class="font-mono">--spacing-5: 12px;</div>
    <div class="font-mono">--spacing-6: 16px;</div>
    <div class="font-mono">--spacing-7: 20px;</div>
    <div class="font-mono">--spacing-8: 24px;</div>
    <div class="font-mono">--spacing-9: 32px;</div>
    <div class="font-mono">--spacing-10: 40px;</div>
    <div class="font-mono">--spacing-11: 48px;</div>
    <div class="font-mono">--spacing-12: 64px;</div>
    <div class="font-mono">--spacing-13: 80px;</div>
    <div class="font-mono">--spacing-14: 120px;</div>
  </div>
  <!-- Common Usage Guidance -->
  <div class="flex flex-col gap-2 mt-4">
    <div class="font-semibold">Guidelines</div>
    <ul class="list-disc ml-6 text-text-secondary">
      <li>Use spacing tokens instead of hardcoded px</li>
      <li>Prefer gap for layout spacing</li>
      <li>Use padding for internal spacing</li>
      <li>Use margin only when separation is required</li>
    </ul>
  </div>
</div>
`

export const SpacingGuide: Story = {
  render: () => ({ template: spacingGuidelines }),
  parameters: {
    docs: {
      source: {
        code: spacingGuidelines.trim(),
        language: 'html',
      },
    },
  },
};

const spacingTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-10">

    <!-- Margin -->
    <div class="flex flex-col gap-4">
      <div class="font-semibold">Margin</div>

      <div class="flex flex-col gap-2">
        <div class="bg-grey-100 p-2">
          <div class="bg-purple-200 m-2 p-2">m-2 (4px)</div>
        </div>
        <div class="bg-grey-100 p-2">
          <div class="bg-purple-200 m-4 p-2">m-4 (8px)</div>
        </div>
        <div class="bg-grey-100 p-2">
          <div class="bg-purple-200 m-6 p-2">m-6 (16px)</div>
        </div>
      </div>
    </div>

    <!-- Padding -->
    <div class="flex flex-col gap-4">
      <div class="font-semibold">Padding</div>

      <div class="flex flex-row gap-4">
        <div class="bg-blue-200 p-2">p-2</div>
        <div class="bg-blue-200 p-4">p-4</div>
        <div class="bg-blue-200 p-6">p-6</div>
        <div class="bg-blue-200 p-8">p-8</div>
      </div>
    </div>

    <!-- Gap -->
    <div class="flex flex-col gap-4">
      <div class="font-semibold">Gap</div>

      <div class="flex gap-2 bg-grey-100 p-2">
        <div class="bg-seafoam-300 p-2">gap-2</div>
        <div class="bg-seafoam-300 p-2">gap-2</div>
        <div class="bg-seafoam-300 p-2">gap-2</div>
      </div>

      <div class="flex gap-6 bg-grey-100 p-2">
        <div class="bg-seafoam-400 p-2">gap-6</div>
        <div class="bg-seafoam-400 p-2">gap-6</div>
        <div class="bg-seafoam-400 p-2">gap-6</div>
      </div>
    </div>

    <!-- Width / Height -->
    <div class="flex flex-col gap-4">
      <div class="font-semibold">Width & Height</div>

      <div class="flex gap-4 items-end">
        <div class="bg-orange-300 w-8 h-8"></div>
        <div class="bg-orange-400 w-12 h-12"></div>
        <div class="bg-orange-500 w-16 h-16"></div>
        <div class="bg-orange-600 w-20 h-20"></div>
      </div>

      <div class="text-text-secondary">
        Uses spacing scale for width/height (w-*, h-*)
      </div>
    </div>

    <!-- Position Offsets -->
    <div class="flex flex-col gap-4">
      <div class="font-semibold">Position Offsets</div>

      <div class="relative bg-grey-100 h-24">
        <div class="absolute top-2 left-2 bg-red-400 p-2">
          top-2 left-2
        </div>
        <div class="absolute bottom-4 right-4 bg-red-600 p-2 text-white">
          bottom-4 right-4
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const Spacing: Story = {
  render: () => ({ template: spacingTemplate }),
  parameters: {
    docs: {
      source: {
        code: spacingTemplate.trim(),
        language: 'html',
      },
    },
  },
};