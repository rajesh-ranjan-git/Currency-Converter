# Currency-Converter

Welcome to Currency-Converter! This is a Vanilla JavaScript app that lets you check live exchange rates between currencies from almost every country in the world.

## Live URL : https://currency-converter-vanillajs.netlify.app

```bash
https://currency-converter-vanillajs.netlify.app
```

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Author](#author)

## Project Overview

Currency-Converter is a client-side currency conversion tool. Users pick a "from" and "to" currency from dropdowns populated with every supported country/currency code, enter an amount, and get the converted value using live exchange rate data along with the corresponding country flags.

## Features

- **Live Exchange Rates:** Fetches current currency exchange rates from a public currency-rate API.
- **Full Currency List:** Dropdowns populated with currency codes for almost every country.
- **Flag Indicators:** Displays the flag of the selected currency's country via the FlagsAPI.
- **Default Selection:** Defaults to USD → INR on load, editable to any supported pair.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **External APIs:** [currency-api](https://github.com/fawazahmed0/exchange-api) (exchange rates), [FlagsAPI](https://flagsapi.com/) (country flags)

## Folder Structure

```bash
Currency-Converter/
├── index.html   # Main page markup
├── style.css    # Page styling
├── app.js       # Conversion logic and DOM interactions
├── codes.js     # Currency code → country code mapping
└── rates.js     # Static/fallback exchange rate data
```

## Installation Guide

### Prerequisites

- A modern web browser with internet access (for live exchange rate/flag requests)
- (Optional) A local static server such as VS Code's "Live Server" extension

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/Currency-Converter.git
   cd Currency-Converter
   ```

2. Open `index.html` directly in your browser, or serve the folder with a local static server:

   ```bash
   npx serve .
   ```

## Usage Instructions

1. Select a currency to convert **from** and a currency to convert **to**.
2. Enter an amount (defaults to 1 if left empty).
3. Click the convert button to see the converted amount and the corresponding flags.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
