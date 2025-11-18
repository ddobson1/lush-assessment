# Lush Product App

A React Native app built with Expo that displays products from mock data with navigation between a list view and detail view.

## Features

- **Product List**: Displays all products in a responsive 2-column grid layout using FlatList
- **Category Filtering**: Filter products by category with a horizontal scrollable filter bar. Categories can be toggled (clicking the same category deselects it)
- **Favorites**: Add products to favorites with a heart button on each product card. Filter to show only favorited products
- **Product Details**: View detailed information about each product including description (with HTML formatting), collections, availability and price
- **Navigation**: Navigation between list and detail screens using React Navigation
- **WebView Integration**: HTML descriptions rendered with WebView, with links opening in a separate screen


## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation (Native Stack Navigator)
- React Native WebView

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Expo CLI (installed globally or via npx)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your preferred platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

Or use the specific scripts:
```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
```


## Implementation Notes

- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Component Structure**: Clean separation of concerns with reusable components. Components are co-located within their respective screen folders for better organization
- **Custom Hooks**: 
  - `useProducts`: Manages product data fetching and category filtering
  - `useFavorites`: Manages favorite product state using a Set for efficient lookups
  - `useWebViewHeight`: Handles dynamic WebView height calculation and loading states
- **Helper Functions**: 
  - `formatPrice`: Formats product prices with proper currency symbols and decimal places
  - `webViewHelpers`: Generates HTML content and height measurement scripts for WebView
- **State Management**: Uses React hooks (useState, useMemo) for local state. Favorites are stored in component state (not persisted)
- **Navigation**: Uses product ID for navigation params to avoid serialization issues
- **Responsive Design**: Products are displayed in a responsive grid
- **Performance**: Uses FlatList for efficient rendering of product lists. For larger datasets, pagination could be implemented to further optimize performance
- **Styling**: Clean, modern UI with consistent spacing and typography. For a project of this size, centralized styling (theme/constants) was not implemented, but could be added for larger projects
- **Filter Behavior**: Category filters support toggle behavior - clicking an already selected category deselects it and returns to "All"

## Assumptions

- The app uses local state only (no global state management library)
- HTML content in descriptions is rendered using WebView with proper formatting. Alternatively, a native HTML decoder could be implemented to remove the loading time of spinning up the WebView, but for simplicity the WebView approach was chosen


