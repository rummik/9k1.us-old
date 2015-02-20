 9k1.us [![Donations][]][gratipay]
========
Personal LMGTFY/pastebin/IP finder.  It includes a ZSH plugin for pasting
things (which requires an API key/secret), and also gives out QR code
email addresses, and links back to my site.  Kind of functions as a
placeholder for my domains with no content on them as well.

Pages:

- https://9k1.us
- https://9k1.us/ip
- https://9k1.us/head
- https://9k1.us/search
- https://9k1.us/random
- https://9k1.us/fortune

[Donations]: http://img.shields.io/gratipay/rummik.svg
[gratipay]: https://gratipay.com/rummik/


## 9k1 ZSH plugin
Install with [Antigen](https://github.com/zsh-users/antigen) in your `.zshrc`:
```
antigen bundle rummik/9k1.us
```

```
> 9k1 -h
Usage:
  9k1 [options] <file|text>
    myapp | 9k1

    Options:
      -h,--help  Print this help
```

### Configuration
- Copy `config.sample.json` to `config.json`, and edit
- Copy `9k1rc.sample` to `~/.9k1rc`, and edit -- be sure to se the `api_key`
  value to be the same across both
