## Mendix - Validation Summary
Display a summary of validation messages - based on selected fields.

## Use case
Do you have a long form page? Are your users struggling to complete forms because of validation errors lost in the page?

With this widget, you can display a summary of validation messages anywhere on the page. Simply provide the list of fields you want to watch, and a custom summary message template, and the widget will handle the rest for you!

## Features
 - Select fields you want to include in you validation summary
 - Customise the summary message with a template
 - When rendering a list of validation messages - add a message action (scroll into view, focus) and a CSS selector to make navigating to the error simple

## Usage
 1. Add the widget to your project
 2. Drop the widget into context
 3. Configure the 'List of fields' to listen to:
     - Can either be 'Attribute' or 'Reference'
     - Can optionally add an action to the particular message (scroll into view, focus)
 4. Configure the 'Caption template', which can include tokens:
     - %c - validation message count
     - %s - append 's' (if count NOT EQUAL 1)
     - %l - unordered list of validation messages

## Demo project
[Validation Summary widget demo](https://validationsummarywidgetdemo-sandbox.mxapps.io/)

## Issues, suggestions and feature requests
Please report any issues to [Mendix-ValidationSummary/issues](https://github.com/Carter-Moorse/Mendix-ValidationSummary/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
