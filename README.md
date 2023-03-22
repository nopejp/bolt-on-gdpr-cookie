# bolt-on-gdpr-cookie

image

## Description

This is a bolt-on script that provides a simple cookie consent window where the user can specify which cookies to allow.\
User settings are saved in a cookie.

## Features
- Bolt-on
- Support four types of cookie (Strictly Necessary, Performance Cookies, Functional Cookies, Targeting Cookies)
- Supports English and Japanese
- Responsive design

## Dependencies

- jQuery 1.x: >= 1.2.0
- jQuery 2.x: >= 2.0.1
- jQuery 3.x: >= 3.0.0

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!-- jquery -->
    <script src="jquery-3.6.4.min.js"></script>
  </head>
  <body>
    <script src="bolt-on-gdpr-cookie.js"></script>
  </body>
</html>
```

customize

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <!-- jquery -->
    <script src="jquery-3.6.4.min.js"></script>
  </head>
  <body>
    <script>
        var bogc_lang = 'ja';
        var bogc_font_family = 'serif';
        var bogc_privacy_policy_url = 'https://example.com/privacy';
        var bogc_button_color = '#ff0000';
    </script>
    <script src="bolt-on-gdpr-cookie.js"></script>
  </body>
</html>
```

## Props

| Props                   |              Description              |  Type  |   Choice    |           Default |
| ----------------------- | :-----------------------------------: | :----: | :---------: | ----------------: |
| bogc_lang               | Language                              | string | en, ja      | en                |
| bogc_privacy_policy_url | Privacy policy page url               | string | -           |                   |
| bogc_cookie_name        | Cookie name that stores user settings | string | -           | __gdpr_cookie     |
| bogc_cookie_max_age     | Cookie max-age                        | number | -           | 60\*60\*24 \* 400 |
| bogc_font_family        | Font family                           | string | -           | "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif' |
| bogc_button_color       | Button color                          | string | -           | #27acd9           |

If you want to make more detailed setting changes, please edit the source code.

## Stored data

User selections are stored in a cookie as a uri-encoded JSON string.\
If the value is stored, the cookie consent window will not be displayed.\
Please use the data stored in the cookie to perform the necessary processing.

```json
{"strictly":true,"performance":true,"functional":true,"targeting":true}
```

## Minify

https://xem.github.io/terser-online/

## License

This project is licensed under the terms of the [MIT license](https://github.com/nopejp/bolt-on-gdpr-cookie/blob/main/LICENSE).

