# Maintainable Frontend

## Overview
This project focuses on the maintainability of the frontend code by keeping everything dead simple. In the end we may maintain the frontend app code for many years and being able to make changes easily can be a vital aspect. Write less.

## Tools and libraries

- **Build tool**: `vite`
- **Http client/cache**: `react-query`
- **State management across pages**: `zustand`
- **State management for the page**: react's `useState`
- **Form management**: `react-hook-form`
- **API document/mock server**: `stoplight`
- **API type**: `OpenAPI Generator`

API document and API type generation should ideally be in a separate repository, which should also generate backend types to be imported from backend repositories for their languages.

## How to set up Stoplight Studio
1. Download the desktop app from their [repository](https://github.com/stoplightio/studio/releases)
1. Select `Open Existing Folder` and select this repository folder on your local
1. The yaml file in the repository gets reflected in Stoplight Studio
1. You can update the API and also run the mock server in Stoplight Studio
1. You can publish the API document on [stoplight.io](stoplight.io) or self-host the document