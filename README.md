# Maintainable Frontend

**Note: This is still work in progress.:rocket:**

## Overview

This project focuses on the maintainability of the frontend code by keeping everything dead simple. In the end we may maintain the frontend app code for many years and being able to make changes easily can be a vital aspect. Write less.

## How to run the sample

```
nvm use // or use another node.js version manager
npm i && npm run dev
```

## Current consideration points

- **Managed libraries**: Let the library to do the job (code generations, caching, state management, etc) as much as as possible
- **Component structure**: Just have two directories for components, `pages` and `components`. `pages` directory contains page level components that handle states and also binding with the backend, and `components` directory contains sub-directories for each domain such as `user/` and `post/` which contain reusable components (without too much focus on the granularity like Atomic Design, and with more focus on grouping components under the same domain).
- **Custom hooks**: Components should import custom hooks from separate files, so the component files become compact and simple, and hooks become reusable and testable
- **Hybrid approach with styling**: Instead of using a UI component library for everything, we could use a zero-runtime CSS in JS library for simple styling, and use feature-specific UI component libraries (from an actively maintained repositories) for complex UI features.

## Tools and libraries

Tools and libraries that helps with our jobs. The list will change as better alternatives are found.

- **Build tool**: `vite`
- **Http client/cache**: `react-query`
- **State management across pages**: `zustand`
- **State management for the page**: react's `useState`
- **Router**: `wouter`
- **Form management**: `react-hook-form`
- **CSS**: `vanilla-extract`
- **API document/mock server**: `stoplight`
- **API client generation**: `orval`
- **Test**: `vitest`
- **Code formatting**: `prettier` on top of `eslint` (`eslint-config-prettier`) with `formatOnSave` using VS Code plugins (`ESLint` and `Prettier`)

API document/client generation should ideally be in a separate repository, which can also generate backend code to be imported from backend repositories in their languages.

## TODO

- Test

## How to set up Stoplight Studio

1. Download the desktop app from their [repository](https://github.com/stoplightio/studio/releases)
1. Select `Open Existing Folder` and select this repository folder on your local
1. The yaml file in the repository gets reflected in Stoplight Studio
1. You can update the API and also run the mock server in Stoplight Studio
1. You can publish the API document on [stoplight.io](stoplight.io) or self-host the document
