# Reddit Raw Image Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tampermonkey Supported](https://img.shields.io/badge/Tampermonkey-Supported-blue.svg)](https://www.tampermonkey.net/)
[![Violentmonkey Supported](https://img.shields.io/badge/Violentmonkey-Supported-purple.svg)](https://violentmonkey.github.io/)

A lightweight Userscript for Tampermonkey / Violentmonkey that automatically bypasses Reddit's annoying `www.reddit.com/media?url=...` wrapper pages and displays pure, unbloated raw images in a native dark-mode viewer.

---

## The Problem

When you click an `i.redd.it` direct image link, Reddit automatically forces an HTTP redirect to a web wrapper page (`www.reddit.com/media?url=...`). This page loads heavy scripts, ads, Reddit branding, and app prompts instead of simply displaying the raw image file.

Because Reddit requires cryptographically signed tokens for direct `preview.redd.it` endpoints and enforces server-side headers, traditional URL extension tricks no longer work.

---

## Installation

### Prerequisites
Make sure you have a userscript manager installed in your browser:
- [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari, Opera)
- [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

### One-Click Install
Click the button below to automatically prompt your userscript manager to install the script:

[**Click here to install script**](https://cdn.jsdelivr.net/gh/hv33y/reddit-raw-image-viewer@master/script.user.js)

---

## How It Works

1. **URL Matching:** The script matches any request sent to `https://www.reddit.com/media*`.
2. **Parameter Extraction:** It reads the `url=` parameter containing the direct `i.redd.it` image link.
3. **Execution Freeze:** `window.stop()` halts further page loading and external script execution.
4. **DOM Replacement:** Replaces the entire DOM with a minimal HTML string containing only the direct `<img>` element and clean CSS styles.

---

## License

This project is licensed under the [MIT License](LICENSE).
