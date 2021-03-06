# UUID Generator

This extension generates Universal Unique Identifier (UUID) values and will either insert them into the current active editor, or place them on the clipboard.

One useful case for this extension is to create UUIDs for configuring new profiles for [Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/).

## Features

This extension supports creating a new version 4 UUID and then either adding it to the current location in the active editor, or placing it on the clipboard.

The _Insert new UUID_ function is available from the editor context menu, or as a keyboard binding. By default, the keyboard binding is `Alt+Shift+U`.

The other way to run the commands is from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac), typing `UUID` and selecting the desired function.
* Copy new UUID to the clipboard
* Insert new UUID
* Insert a new 'nil' UUID (where all the digits are 0)

Through [configuration settings](#settings), it is possible to wrap the created UUID with braces or quotes when it is created, for example:
* `b26e67ee-0a43-4c3f-8aea-a1179427faf7`
* `'b26e67ee-0a43-4c3f-8aea-a1179427faf7'`
* `"b26e67ee-0a43-4c3f-8aea-a1179427faf7"`
* `{b26e67ee-0a43-4c3f-8aea-a1179427faf7}`
* `[b26e67ee-0a43-4c3f-8aea-a1179427faf7]`
* `(b26e67ee-0a43-4c3f-8aea-a1179427faf7)`

This extension works as expected when inserting a new UUID into the active text editor. It will insert the UUID at the location of the caret in the current active editor, replace any existing text selection if there is one, and generate multiple UUIDs and insert them all when a [multi-cursor selection](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_multi-cursor-selection) is active.

### UUID type
The generated UUIDs are type 4, variation 1, which means unique based on random numbers. The extension can also generate a nil UUID, where all the digits are 0.

See the [release notes](#release-notes) for more information.

## Requirements

* Requires VS Code v1.50+. This will be reviewed

## Settings

| Name | Description | Default |
|--|--|--|
| `vscode-uuid-generator.contextMenu.enabled` | Whether the _Insert new UUID_ function is available from the editor context menu | `true` |
| `vscode-uuid-generator.uppercaseDigits` | Whether the hex digits are forced to uppercase (`true`) or lowercase (`false`) | `false` |
| `vscode-uuid-generator.textSelection`   | When the UUID is inserted into the text, this setting controls whether the pasted value is marked as selected (`true`) or whether the selection is cleared (`false`) | `false` |
| `vscode-uuid-generator.decorationStyle` | Whether the generated UUID should be automatically wrapped with quotes or braces. Possible values:<ul><li>`none`</li><li>`surroundSingleQuotes`</li><li>`surroundDoubleQuotes`</li><li> `surroundCurlyBraces`</li><li>`surroundRoundedBraces`</li><li>`surroundSquareBraces`</ul> | `none` |

## Known Limitations and Issues

TBD

## Release Notes

This extension generates UUIDs that are version 4, variation 1 according to the specification [RFC4122 section 4.4](https://tools.ietf.org/html/rfc4122#section-4.4). Version 4 UUIDs are generated with random numbers as generated by VS Code and modified by a portion of the current timestamp to add another random element. This cannot guarantee uniqueness to the same degree as something tied to hardware identifiers such as MAC address, but it is _statistically unlikely_ that any two UUIDs would be identical.

This extension can also be used to produce a 'nil' UUID, one where all the values are zero. See [RFC4122 section 4.1.7](https://tools.ietf.org/html/rfc4122#section-4.1.7)

### References
* [RFC4122 - A Universally Unique IDentifier (UUID) URN Namespace](https://www.ietf.org/rfc/rfc4122.txt)
* [Wikipedia - Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
