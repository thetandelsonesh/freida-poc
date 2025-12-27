import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundation/Fonts & Typography',
  tags: ['autodocs'],

};
export default meta;

type Story = StoryObj;

const fontsTemplate = `
  <div class="freida-v2">
    <div class="mb-5">
      <div class="font-myriad text-2xl">Font Myriad </div>
      <div class="font-myriad font-bold text-2xl">Font Myriad Bold</div>
      <div class="font-myriad font-medium text-2xl">Font Myriad Medium(SemiBold)</div>
      <div class="font-myriad font-light text-2xl">Font Myriad Light</div>
    </div>

    <div class="mb-5">
      <div class="font-kepler font-medium text-2xl">Font Kepler Medium(SemiBold)</div>
      <div class="font-kepler font-light text-2xl">Font Kepler Light</div>
    </div>
  </div>
`

const heroDisplayTemplate = `
    <div class="freida-v2">
      <div class="mb-5">
        <h1 class="hero-display">Hero Display</h1>
      </div>
      <div class="mb-5">
        <h2 class="hero-display-2">Hero 2 Display</h2>
      </div>
    </div>
`;

const headingTemplate = `
  <div class="freida-v2">
    <div class="mb-5">
      <h1 class="h1">H1 — The quick brown fox jumps over the lazy dog</h1>
    </div>

    <div class="mb-5">
      <h2 class="h2">H2 — The quick brown fox jumps over the lazy dog</h2>
    </div>

    <div class="mb-5">
      <h3 class="h3">H3 — The quick brown fox jumps over the lazy dog</h3>
    </div>

    <div class="mb-5">
      <h4 class="h4">H4 — The quick brown fox jumps over the lazy dog</h4>
    </div>

    <div class="mb-5">
      <h5 class="h5">H5 — The quick brown fox jumps over the lazy dog</h5>
    </div>

    <div class="mb-5">
      <h6 class="h6">H6 — The quick brown fox jumps over the lazy dog</h6>
    </div>
  </div>
`

const bodyTextTemplate = `
  <div class="freida-v2">
    <div class="mb-5">
      <p class="text-large">
        Text Large — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="mb-5">
      <p class="text-base">
        Text Base — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="mb-5">
      <p class="text-small">
        Text Small — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="mb-5">
      <p class="text-tiny">
        Text XS — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
`

const uiTextTemplate = `
  <div class="freida-v2">
    <div class="mb-5">
      <div class="text-button">Text Button — Button label</div>
    </div>

    <div class="mb-5">
      <div class="text-pill">Text Pill — Pill label</div>
    </div>

    <div class="mb-5">
      <div class="text-breadcrumb">
        Breadcrumb — Home / Library / Data
      </div>
    </div>
  </div>
`

export const Fonts: Story = {
  render: () => ({
    template: fontsTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: fontsTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const HeroDisplay: Story = {
  render: () => ({
    template: heroDisplayTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: heroDisplayTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const Headings: Story = {
  render: () => ({
    template: headingTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: headingTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const BodyText: Story = {
  render: () => ({
    template: bodyTextTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: bodyTextTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const UIText: Story = {
  render: () => ({
    template: uiTextTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: uiTextTemplate.trim(),
        language: 'html',
      },
    },
  },
}
