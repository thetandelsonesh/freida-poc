import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundation/Layout & Grid',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;


const containerTemplate = `
    <div class="freida-v2 bg-gray-200">
      <div class="layout-container bg-blue-50">
        <div class="bg-red-50 p-5"> This is inside a container</div>
      </div>
      <div class="p-5"> This is outside a container</div>
    </div>
`;

const gridTemplate = `
    <div class="freida-v2">
      <div class="layout-container">
        <div class="layout-row">
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">1</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">2</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">3</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">4</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">5</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">6</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">7</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">8</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">9</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">10</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">11</div>
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="bg-gray-300 mb-2">12</div>
          </div>
        </div>
      </div>
    </div>
`;


const gridExampleTemplate = `
    <div class="freida-v2">
      <div class="layout-row">
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">3</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">4</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">5</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">6</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">7</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">8</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">9</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">10</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">11</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">12</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">3</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">4</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">5</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">6</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">3</div>
        </div>
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">4</div>
        </div>
      </div>

      <div class="layout-row">
        <div class="col-span-4">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-4">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
        <div class="col-span-4">
          <div class="bg-gray-300 mb-2">3</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-6">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-6">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-12">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-11">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-10">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-9">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-4">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-8">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-5">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-7">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-6">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-6">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-7">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-5">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-8">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-4">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-9">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-3">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-10">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-2">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
      <div class="layout-row">
        <div class="col-span-11">
          <div class="bg-gray-300 mb-2">1</div>
        </div>
        <div class="col-span-1">
          <div class="bg-gray-300 mb-2">2</div>
        </div>
      </div>
    </div>
`;

export const Container: Story = {
  render: () => ({
    template: containerTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: containerTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const GridWithContainer: Story = {
  render: () => ({
    template: gridTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: gridTemplate.trim(),
        language: 'html',
      },
    },
  },
}

export const GridExamples: Story = {
  render: () => ({
    template: gridExampleTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: gridExampleTemplate.trim(),
        language: 'html',
      },
    },
  },
}
