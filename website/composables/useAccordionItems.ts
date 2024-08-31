// @unocss-include
export const useAccordionItems = () => {
  const items = [{
    label: 'Default Open',
    icon: 'i-mingcute-information-line',
    defaultOpen: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
  }, {
    label: 'Disabled',
    icon: 'i-mingcute-forbid-circle-line',
    disabled: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
  }, {
    label: 'Without icon',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
  }, {
    label: 'Slots',
    icon: 'i-mingcute-code-line',
    slot: 'custom-slot',
  }, {
    label: 'Lorem ipsum',
    icon: 'i-mingcute-layout-10-line',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
  }, {
    label: 'Lorem ipsum',
    icon: 'i-mingcute-badminton-line',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
  }]

  const itemsDemo = [
    { label: 'multiple', content: 'Multiple elements opened at same time' },
    { label: 'default-open', content: 'Open all items by default' },
    { label: 'open-icon="i-mingcute-add-line"', content: 'Change default open icon or use null' },
    { label: 'open-icon="i-mingcute-minimize-line"', content: 'Change default close icon or use null' },
  ]

  const breadcrumbLinks = [
    { label: 'Home', to: '/', icon: 'i-mingcute:sun-fog-line' },
    { label: 'No-link' },
    { label: 'No-link icon', icon: 'i-mingcute-look-right-line' },
    { label: 'Link', to: '/about' },
    { label: 'Active', to: '/', icon: 'i-mingcute-wine-line' },
  ]

  return {
    items,
    itemsDemo,
    breadcrumbLinks,
  }
}
