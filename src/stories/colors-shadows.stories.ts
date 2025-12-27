import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundation/Colors & Shadows',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

// ---------- Single tokens ----------
const brandTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-ama-purple"></div>
      <div>AMAPurple | #46166B</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-magenta-500"></div>
      <div>Magenta500 | #BC2989</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-divider-line"></div>
      <div>DividerLine | #E4E3E6</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-light-grey"></div>
      <div>LightGrey | #F6F6F8</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-white border"></div>
      <div>White | #FFFFFF</div>
    </div>
  </div>
</div>
`;

export const BrandAndSingles: Story = {
  render: () => ({ template: brandTemplate }),
  parameters: { docs: { source: { code: brandTemplate.trim(), language: 'html' } } },
};

const colorsTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-8">

    <!-- Backgrounds -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">Backgrounds</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-white border"></div>
        <div>BackgroundWhite | #FFFFFF</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-light-grey"></div>
        <div>BackgroundGreyPurple | #F6F6F8</div>
      </div>
    </div>

    <!-- Strokes & Rule Lines -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">Strokes & Rule Lines</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-divider-line"></div>
        <div>DividerLineGrey | #E4E3E6</div>
      </div>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">CTAs</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-purple-500"></div>
        <div>Purple500 | #7229D1</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-blue-500"></div>
        <div>Blue500 | #027DBC</div>
      </div>
    </div>

    <!-- Text -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">Text</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-purple-950"></div>
        <div>TextPrimary (Purple950) | #0B0415</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-grey-500"></div>
        <div>TextSecondary (Grey500) | #56525C</div>
      </div>
    </div>

    <!-- Data Viz -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">Data Viz</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-purple-800"></div>
        <div>Purple800 | #2E1054</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-blue-400"></div>
        <div>Blue400 | #3597C9</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-purple-400"></div>
        <div>Purple400 | #8E54DA</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-seafoam-500"></div>
        <div>Seafoam500 | #0FDCBE</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-magenta-500"></div>
        <div>Magenta500 | #BC2989</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-orange-400"></div>
        <div>Orange400 | #F1A233</div>
      </div>
    </div>

    <!-- Alerts -->
    <div class="flex flex-col gap-3">
      <div class="font-semibold">Alerts</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-red-500"></div>
        <div>Red500 | #E90C26</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-green-500"></div>
        <div>Green500 | #4D8406</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[20px] w-[20px] bg-orange-500"></div>
        <div>Orange500 | #ED8B00</div>
      </div>
    </div>

  </div>
</div>
`;

export const AllColors: Story = {
  render: () => ({ template: colorsTemplate }),
  parameters: {
    docs: {
      source: {
        code: colorsTemplate.trim(),
        language: 'html',
      },
    },
  },
};

const shadowsTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-6">
      <div class="font-semibold">Shadow Elevation</div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[120px] w-[120px] bg-white shadow-01"></div>
        <div>Shadow 1 | 0 2px 8px 0 rgba(23, 8, 42, 0.04)</div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <div class="h-[120px] w-[120px] bg-white shadow-02"></div>
        <div>Shadow 2 | 0 4px 16px 0 rgba(23, 8, 42, 0.12)</div>
      </div>
    </div>
  </div>
</div>
`;

export const Shadows: Story = {
  render: () => ({ template: shadowsTemplate }),
  parameters: {
    docs: {
      source: {
        code: shadowsTemplate.trim(),
        language: 'html',
      },
    },
  },
};

// ---------- Purple ----------
const purpleTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-50"></div>
      <div>Purple50 | #F1EAFA</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-100"></div>
      <div>Purple100 | #E3D4F6</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-200"></div>
      <div>Purple200 | #C7A9ED</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-300"></div>
      <div>Purple300 | #AA7FE3</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-400"></div>
      <div>Purple400 | #8E54DA</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-500"></div>
      <div>Purple500 | #7229D1</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-600"></div>
      <div>Purple600 | #5B21A7</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-700"></div>
      <div>Purple700 | #44197D</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-800"></div>
      <div>Purple800 | #2E1054</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-900"></div>
      <div>Purple900 | #17082A</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-purple-950"></div>
      <div>Purple950 | #0B0415</div>
    </div>
  </div>
</div>
`;

export const Purple: Story = {
  render: () => ({ template: purpleTemplate }),
  parameters: { docs: { source: { code: purpleTemplate.trim(), language: 'html' } } },
};

// ---------- Blue ----------
const blueTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-50"></div>
      <div>Blue50 | #E6F2F8</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-100"></div>
      <div>Blue100 | #CCE5F2</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-200"></div>
      <div>Blue200 | #9ACBE4</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-300"></div>
      <div>Blue300 | #9ACBE4</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-400"></div>
      <div>Blue400 | #3597C9</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-500"></div>
      <div>Blue500 | #027DBC</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-600"></div>
      <div>Blue600 | #026496</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-700"></div>
      <div>Blue700 | #014871</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-800"></div>
      <div>Blue800 | #01324B</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-900"></div>
      <div>Blue900 | #001926</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-blue-950"></div>
      <div>Blue950 | #000D13</div>
    </div>
  </div>
</div>
`;

export const Blue: Story = {
  render: () => ({ template: blueTemplate }),
  parameters: { docs: { source: { code: blueTemplate.trim(), language: 'html' } } },
};

// ---------- Grey ----------
const greyTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-50"></div>
      <div>Grey50 | #EEEEEF</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-100"></div>
      <div>Grey100 | #DDDCDE</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-200"></div>
      <div>Grey200 | #BBBABE</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-300"></div>
      <div>Grey300 | #9A979D</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-400"></div>
      <div>Grey400 | #78757D</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-500"></div>
      <div>Grey500 | #56525C</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-600"></div>
      <div>Grey600 | #45424A</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-700"></div>
      <div>Grey700 | #343137</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-800"></div>
      <div>Grey800 | #222125</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-900"></div>
      <div>Grey900 | #222125</div>
    </div>

    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-grey-950"></div>
      <div>Grey950 | #090809</div>
    </div>
  </div>
</div>
`;

export const Grey: Story = {
  render: () => ({ template: greyTemplate }),
  parameters: { docs: { source: { code: greyTemplate.trim(), language: 'html' } } },
};

// ---------- Orange ----------
const orangeTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-50"></div>
      <div>Orange50 | #FDF3E5</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-100"></div>
      <div>Orange100 | #FBE8CC</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-200"></div>
      <div>Orange200 | #F8D199</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-300"></div>
      <div>Orange300 | #F4B966</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-400"></div>
      <div>Orange400 | #F1A233</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-500"></div>
      <div>Orange500 | #ED8B00</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-600"></div>
      <div>Orange600 | #BE6F00</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-700"></div>
      <div>Orange700 | #8E5300</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-800"></div>
      <div>Orange800 | #5F3800</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-900"></div>
      <div>Orange900 | #2F1C00</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-orange-950"></div>
      <div>Orange950 | #180E00</div>
    </div>
  </div>
</div>
`;

export const Orange: Story = {
  render: () => ({ template: orangeTemplate }),
  parameters: { docs: { source: { code: orangeTemplate.trim(), language: 'html' } } },
};

// ---------- Green ----------
const greenTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-50"></div>
      <div>Green50 | #EDF3E6</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-100"></div>
      <div>Green100 | #DBE6CD</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-200"></div>
      <div>Green200 | #B8CE9B</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-300"></div>
      <div>Green300 | #94B56A</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-400"></div>
      <div>Green400 | #719D38</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-500"></div>
      <div>Green500 | #4D8406</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-600"></div>
      <div>Green600 | #3E6A05</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-700"></div>
      <div>Green700 | #2E4F04</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-800"></div>
      <div>Green800 | #1F3502</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-900"></div>
      <div>Green900 | #0F1A01</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-green-950"></div>
      <div>Green950 | #080D01</div>
    </div>
  </div>
</div>
`;

export const Green: Story = {
  render: () => ({ template: greenTemplate }),
  parameters: { docs: { source: { code: greenTemplate.trim(), language: 'html' } } },
};

// ---------- Red ----------
const redTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-50"></div>
      <div>Red50 | #FDE7E9</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-100"></div>
      <div>Red100 | #FBCED4</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-200"></div>
      <div>Red200 | #F69EA8</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-300"></div>
      <div>Red300 | #F26D7D</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-400"></div>
      <div>Red400 | #ED3D51</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-500"></div>
      <div>Red500 | #E90C26</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-600"></div>
      <div>Red600 | #BA0A1E</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-700"></div>
      <div>Red700 | #8C0717</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-800"></div>
      <div>Red800 | #5D050F</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-900"></div>
      <div>Red900 | #2F0208</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-red-950"></div>
      <div>Red950 | #170104</div>
    </div>
  </div>
</div>
`;

export const Red: Story = {
  render: () => ({ template: redTemplate }),
  parameters: { docs: { source: { code: redTemplate.trim(), language: 'html' } } },
};

// ---------- Seafoam ----------
const seafoamTemplate = `
<div class="freida-v2 font-mono">
  <div class="flex flex-col gap-3">
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-50"></div>
      <div>Seafoam50 | #E7FBF8</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-100"></div>
      <div>Seafoam100 | #CFF8F2</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-200"></div>
      <div>Seafoam200 | #9FF1E5</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-300"></div>
      <div>Seafoam300 | #6FEAD8</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-400"></div>
      <div>Seafoam400 | #3FE3CB</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-500"></div>
      <div>Seafoam500 | #0FDCBE</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-600"></div>
      <div>Seafoam600 | #0CB098</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-700"></div>
      <div>Seafoam700 | #098472</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-800"></div>
      <div>Seafoam800 | #06584C</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-900"></div>
      <div>Seafoam900 | #032C26</div>
    </div>
    <div class="flex flex-row items-center gap-5">
      <div class="h-[20px] w-[20px] bg-seafoam-950"></div>
      <div>Seafoam950 | #021613</div>
    </div>
  </div>
</div>
`;

export const Seafoam: Story = {
  render: () => ({ template: seafoamTemplate }),
  parameters: { docs: { source: { code: seafoamTemplate.trim(), language: 'html' } } },
};
