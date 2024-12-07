#!/bin/bash

# Install Visual Studio Code Extension
npm install -g @vscode/vsce

# Install npm dependencies
npm install

# Build TypeScript files
npm run compile

# Login to the VS Code Marketplace
vsce login mattboston

# Build the extension
vsce package

# Publish the extension
vsce publish
