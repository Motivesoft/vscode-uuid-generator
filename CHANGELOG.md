# Change Log

All notable changes to the "vscode-uuid-generator" extension will be documented in this file.

## [1.1.0] - 2026-04-21
Rewrite to eliminate unnecessary dependencies to reduce exposure to vulnerabilities

## [1.0.1] - 2026-02-11
Updated dependencies

## [1.0.0] - 2025-11-19
Updated dependencies

## [0.4.1] - 2022-03-28
Implemented support for VS Code on the web.

## [0.4.0] - 2022-03-26
Updated baseline component dependencies to prepare for VS Code web implementation

## [0.3.0] - 2021-09-16
Declared support for virtual workspaces and untrusted workspaces
Fixed year portion of release dates in this change log.

## [0.2.1] - 2020-11-08
Fixed change log and updated readme for the 0.2 release.

## [0.2.0] - 2020-11-08
### Added
* Editor context menu now includes the _Insert new UUID_ function. This can be controlled through the configuration of the extension.
* Keybinding added. Alt+Shift+U will invoke _Insert new UUID_ into the active editor. This can be remapped in the keyboard shortcuts editor.

## [0.1.1] - 2020-10-18
Minor corrections to documentation and extension setup. No changes to functionality.

## [0.1.0] - 2020-10-17
Some fundamental improvements to the usabilty of the component through configuration settings.
### Added
- Configuration items for UUID formatting - lower/uppercase and whether the UUID value should be surrounded by quotes or braces
- Configuraiton item for whether the UUID value, when inserted into the active editor, should be marked as selected
- Added a function to insert a nil UUID (where all the digits are zero)

## [0.0.1] - 2020-10-16
Initial release to go through the process of preparing and uploading
### Added
- Minimal viable functionality
    - Copy UUID to clipboard
    - Insert UUID into current editor

[1.1.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v1.1.0
[1.0.1]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v1.0.1
[1.0.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v1.0.0
[0.4.1]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.4.1
[0.4.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.4.0
[0.3.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.3.0
[0.2.1]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.2.1
[0.2.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.2.0
[0.1.1]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.1.1
[0.1.0]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.1.0
[0.0.1]: https://github.com/Motivesoft/vscode-uuid-generator/releases/tag/v0.0.1
