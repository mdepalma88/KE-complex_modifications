// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Real Prog Dvorak Keyboard based on ThePrimeagen',
        rules: [
          {
            description: 'Remap keys to use Dvorak keyboard layout with symbols adjustments from ThePrimeagen (every keyboard)',
            manipulators: [
              {
                from: {
                  key_code: 'grave_accent_and_tilde',
                },
                to: [{ key_code: '4', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'grave_accent_and_tilde',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'grave_accent_and_tilde',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  key_code: '1',
                },
                to: [{ key_code: 'equal_sign', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '1',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '1' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '1',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '1' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '2',
                },
                to: [{ key_code: 'open_bracket' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '2',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '2' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '2',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '2' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '3',
                },
                to: [{ key_code: 'open_bracket', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '3',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '3' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '3',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '3' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '4',
                },
                to: [{ key_code: '9', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '4',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '4' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '4',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '4' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '5',
                },
                to: [{ key_code: '7', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '5',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '5' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '5',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '5' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '6',
                },
                to: [{ key_code: 'equal_sign' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '6',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '6' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '6',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '6' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '7',
                },
                to: [{ key_code: '0', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '7',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '7' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '7',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '7' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '8',
                },
                to: [{ key_code: 'close_bracket', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '8',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '8' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '8',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '8' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '9',
                },
                to: [{ key_code: 'close_bracket' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '9',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '9' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '9',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '9' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '0',
                },
                to: [{ key_code: '8', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '0',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '0' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: '0',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '0' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'hyphen',
                },
                to: [{ key_code: '1', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'hyphen',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '5', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'hyphen',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '5', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'equal_sign',
                },
                to: [{ key_code: 'backslash', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'equal_sign',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: 'grave_accent_and_tilde' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'equal_sign',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: 'grave_accent_and_tilde' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'q',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'semicolon' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'w',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'comma' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'e',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'period' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'r',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'p' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 't',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'y' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'y',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'f' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'u',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'g' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'i',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'c' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'o',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'r' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'p',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'l' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'open_bracket',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'slash' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'close_bracket',
                },
                to: [{ key_code: '2', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '6', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '6', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'backslash',
                },
                to: [{ key_code: 'backslash' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'backslash',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '3', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'backslash',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '3', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'a',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'a' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 's',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'o' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'd',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'e' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'f',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'u' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'g',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'i' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'h',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'd' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'j',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'h' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'k',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 't' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'l',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'n' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'semicolon',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 's' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'quote',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'hyphen' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'z',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'quote' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'x',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'q' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'c',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'j' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'v',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'k' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'b',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'x' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'n',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'b' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'm',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'm' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'comma',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'w' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'period',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'v' }],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'slash',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'z' }],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Remap keys to use Dvorak keyboard layout with symbols adjustments from ThePrimeagen (Apple Keyboards only, In case you have programmable keyboard based on QWERTY)',
            manipulators: [
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'grave_accent_and_tilde',
                },
                to: [{ key_code: '4', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'grave_accent_and_tilde',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'grave_accent_and_tilde',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '1',
                },
                to: [{ key_code: 'equal_sign', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '1',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '1' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '1',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '1' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '2',
                },
                to: [{ key_code: 'open_bracket' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '2',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '2' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '2',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '2' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '3',
                },
                to: [{ key_code: 'open_bracket', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '3',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '3' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '3',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '3' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '4',
                },
                to: [{ key_code: '9', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '4',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '4' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '4',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '4' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '5',
                },
                to: [{ key_code: '7', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '5',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '5' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '5',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '5' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '6',
                },
                to: [{ key_code: 'equal_sign' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '6',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '6' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '6',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '6' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '7',
                },
                to: [{ key_code: '0', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '7',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '7' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '7',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '7' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '8',
                },
                to: [{ key_code: 'close_bracket', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '8',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '8' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '8',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '8' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '9',
                },
                to: [{ key_code: 'close_bracket' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '9',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '9' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '9',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '9' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '0',
                },
                to: [{ key_code: '8', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '0',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '0' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: '0',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '0' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'hyphen',
                },
                to: [{ key_code: '1', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'hyphen',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '5', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'hyphen',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '5', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'equal_sign',
                },
                to: [{ key_code: 'backslash', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'equal_sign',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: 'grave_accent_and_tilde' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'equal_sign',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: 'grave_accent_and_tilde' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'q',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'semicolon' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'w',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'comma' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'e',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'period' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'r',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'p' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 't',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'y' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'y',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'f' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'u',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'g' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'i',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'c' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'o',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'r' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'p',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'l' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'open_bracket',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'slash' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'close_bracket',
                },
                to: [{ key_code: '2', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '6', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '6', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'backslash',
                },
                to: [{ key_code: 'backslash' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'backslash',
                  modifiers: {
                    mandatory: ['left_shift'],
                  },
                },
                to: [{ key_code: '3', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'backslash',
                  modifiers: {
                    mandatory: ['right_shift'],
                  },
                },
                to: [{ key_code: '3', modifiers: ['left_shift'] }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'a',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'a' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 's',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'o' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'd',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'e' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'f',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'u' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'g',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'i' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'h',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'd' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'j',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'h' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'k',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 't' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'l',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'n' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'semicolon',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 's' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'quote',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'hyphen' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'z',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'quote' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'x',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'q' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'c',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'j' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'v',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'k' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'b',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'x' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'n',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'b' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'm',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'm' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'comma',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'w' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'period',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'v' }],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'slash',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'z' }],
                type: 'basic',
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
