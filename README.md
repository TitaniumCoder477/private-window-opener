# Private Window Opener

A simple Chrome browser extension that adds a context menu option to open the current page in a new private (incognito) window.

## Features

- Right-click on any page and select "Open as Private..." to open it in incognito mode.
- Also available via the extension's action button (toolbar icon).
- Lightweight and easy to use.
- Built with Manifest V3.

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the folder containing the extension files.
5. The extension should now appear in your toolbar.

## Usage

- Right-click anywhere on a webpage.
- Select **"Open as Private..."** from the context menu.
- The current page will open in a new private browsing window.

## Files

- `manifest.json`: Extension configuration.
- `background.js`: Service worker handling the context menu and window creation.
- `icon.png`: Extension icon.
- `logo.png`: Additional logo (if used).

## Permissions

- `contextMenus`: For creating right-click menu.
- `tabs`: To access current tab URL.
- `windows`: To create new incognito windows.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements!