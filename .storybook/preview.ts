import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Optional: You can configure a11y settings here
      element: '#root',  // The element to inspect for accessibility issues
      config: {},        // axe-core configuration options
      options: {},       // axe-core run options
      manual: true,     // Set to true to disable automatic accessibility checks
    },
  },
};

export default preview;
