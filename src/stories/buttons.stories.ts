import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

type BtnVariant = 'primary' | 'secondary' | 'text' | 'link';

type StoryArgs = {
  label: string;
  variant: BtnVariant;
  disabled: boolean;
  withIcon: boolean;
  iconName: string;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: false,
    withIcon: true,
    iconName: 'plus-circle',
  },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary', 'text', 'link'] },
    disabled: { control: 'boolean' },
    withIcon: { control: 'boolean' },
    label: { control: 'text' },
    iconName: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template: `
      <button
        matButton="filled"
        class="mx-4 btn-{{variant}}"
        [disabled]="disabled"
      >
        <span>{{ label }}</span>
        <i *ngIf="withIcon" class="ph ph-{{iconName}} ph-icon ph-btn"></i>
      </button>
    `,
  }),
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {};

const template = `
<div class="freida-v2">
  <div class="layout-row">
    <div class="col-span-12 md:col-span-6 mb-10">
      <div class="flex flex-col flex-wrap gap-4">
        <div>PRIMARY</div>
        <div>
          <button matButton="filled" class="btn-primary mx-4">Button</button>
        </div>
        <div>
          <button matButton="filled" class="btn-primary mx-4">
            <span>Button with Icon</span> <i class="ph ph-plus-circle ph-icon ph-btn"></i>
          </button>
          </div>
      </div>
      
    </div>
    <div class="col-span-12 md:col-span-6 mb-10">
      <div class="flex flex-col flex-wrap gap-4">
        <div>SECONDARY</div>
        <div>
          <button matButton="filled" class="btn-secondary mx-4">Button</button>
        </div>
        <div>
          <button matButton="filled" class="btn-secondary mx-4">
            <span>Button with Icon</span> <i class="ph ph-plus-circle ph-icon ph-btn"></i>
          </button>
          </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 mb-10">
      <div class="flex flex-col flex-wrap gap-4">
        <div>TEXT</div>
        <div>
          <button matButton="filled" class="btn-text mx-4">Button</button>
        </div>
        <div>
          <button matButton="filled" class="btn-text mx-4">
            <span>Button with Icon</span> <i class="ph ph-plus-circle ph-icon ph-btn"></i>
          </button>
          </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 mb-10">
      <div class="flex flex-col flex-wrap gap-4">
        <div>LINK</div>
        <div>
          <button matButton="filled" class="btn-link mx-4"><span>Button</span></button>
        </div>
        <div>
          <button matButton="filled" class="btn-link mx-4">
            <span>Button with Icon</span> <i class="ph ph-plus-circle ph-icon ph-btn"></i>
          </button>
          </div>
      </div>
    </div>
  </div>
</div>
`

export const AllVariants: Story = {
  render: () => ({
    template,
  }),
  parameters: {
    docs: {
      source: {
        code: template.trim(),
        language: 'html',
      },
    },
  },
};