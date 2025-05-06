# 📦 pixel-validate

A simple and modular JavaScript validation library for common data checks.

---

## 📥 Installation

```bash
npm i pxvalidate
```



```bash
// Basic Validations
validate.isEmail('test@example.com');              // true
validate.isURL('https://example.com');             // true
validate.isIP('192.168.1.1');                      // true
validate.isStrongPassword('Utki_123');             // true
validate.isEmpty('');                              // true
validate.isLength('hello', { min: 3, max: 10 });   // true
validate.isNumeric('12345');                       // true
validate.isFloat('12.34');                         // true
validate.isInt('123');                             // true
validate.isDecimal('12.5');                        // true
validate.isAscii('hello!');                        // true
validate.isAlpha('abc');                           // true
validate.isAlphanumeric('abc123');                 // true
validate.isBase64('SGVsbG8gd29ybGQ=');             // true
validate.isHexadecimal('a3f');                     // true
validate.isHexColor('#ffcc00');                    // true
validate.isHash('5d41402abc4b2a76b9719d911017c592'); // true
validate.isUUID('550e8400-e29b-41d4-a716-446655440000'); // true

// Format & Structure
validate.isLocale('en-US');                        // true
validate.isPostalCode('10001', 'US');              // true
validate.isMobilePhone('+15551234567', 'US');      // true
validate.isMACAddress('00:1A:2B:3C:4D:5E');         // true
validate.isPort(3000);                             // true

// Date & Time
validate.isDateFormat('2025-05-06');               // true
validate.isAfterDate('2025-05-07', '2025-05-06');  // true
validate.isBeforeDate('2025-05-05', '2025-05-06'); // true
validate.isValidDate('2025-05-06');                // true

// Custom Rules
validate.isDivisibleBy(10, 2);                     // true
validate.isLowerCase('hello');                     // true
validate.isUpperCase('HELLO');                     // true
```
