# fwdr

The self-proclaimed world's most simple e-mail forwarder for everyone.

## Usage

```js
fetch("https://api.fwdr.dev", {
  method: "POST",
  body: {
    to: "sample@fwdr.dev",
    subject: "From FWDR",
    body: "This was sent from FWDR",
  },
});
```
