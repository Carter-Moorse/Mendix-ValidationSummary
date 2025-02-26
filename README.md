<img src="/assets/icon.svg" height="64px" />

# Validation Summary - Mendix Pluggable Widget
Do you have a long form page? 

Are your users struggling to complete forms because of validation errors lost in the page?

With this widget, you can display a summary of validation messages anywhere on the page. Simply provide the list of fields you want to watch and a summary message template; the widget will handle the rest for you!

See [Demo](https://validationsummarywidgetdemo-sandbox.mxapps.io/).

## Features
 - Select fields you want to include in your validation summary
 - Custom summary message with tokens
 - Add a message action (scroll into view, focus) with CSS selector - to make navigating to the error simple

## Usage
> [!Warning]
> Requires Mendix Studio Pro 9.17 or later

 1. Add the widget to your project
 2. Drop the widget into context
 3. Configure the 'List of fields' to listen to:
     - 'Attribute' or 'Reference'
     - Optionally add a click action (scroll into view, focus) to the message
 4. Configure the 'Caption template', which can include tokens:
     - %c - Count of validation messages
     - %s - Append 's' (count NOT EQUAL 1)
     - %l - List of validation messages

## Issues, suggestions and feature requests
Please report any issues to [Mendix-ValidationSummary/issues](https://github.com/Carter-Moorse/Mendix-ValidationSummary/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
