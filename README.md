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
- **Component structure**: Just have two directories for components, `pages` and `components`. `pages` directory contains page level components that handle states and also binding with the backend, and `components` directory contains reusable components with domain sub-directories such as `user` and `post` (without focus on the granularity unlike Atomic Design, just grouping components under the same domain).
- **Custom hooks**: Components should import custom hooks from separate files, so the component files become compact and simple, and hooks become reusable and testable

## Tools and libraries

Tools and libraries that helps with our jobs. The list should change as better alternatives are found.

- **Build tool**: `vite`
- **Http client/cache**: `react-query`
- **State management across pages**: `zustand`
- **State management for the page**: react's `useState`
- **Form management**: `react-hook-form`
- **API document/mock server**: `stoplight`
- **API client generation**: `orval`

API document/client generation should ideally be in a separate repository, which can also generate backend code to be imported from backend repositories in their languages.

## TODO

- Routing
- CSS
- Lint
- Test

## How to set up Stoplight Studio
1. Download the desktop app from their [repository](https://github.com/stoplightio/studio/releases)
1. Select `Open Existing Folder` and select this repository folder on your local
1. The yaml file in the repository gets reflected in Stoplight Studio
1. You can update the API and also run the mock server in Stoplight Studio
1. You can publish the API document on [stoplight.io](stoplight.io) or self-host the document