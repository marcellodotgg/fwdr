# fwdr
The self-proclaimed world's most simple e-mail forwarder for developers.

## Usage
```js
fetch('https://api.fwdr.dev', { method: 'POST', body: {
    recipient: "sample@fwdr.dev",
    from: "myself@fwdr.dev",
    subject: "From FWDR", 
    body: "This was sent from FWDR",
} })
```

