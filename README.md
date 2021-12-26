# AutoWrap
AutoWrap is an open source javascript module to handle text wrap. It support both chinese and english.

## example

```
    import AutoWrap from 'autowrap'
    var AutoWrap = new AutoWrap();
    var text = "AutoWrap is an open source javascript module to handle text wrap. 中文也是支持的: 床前明月光，疑是地上霜，举头望明月，低头思故乡。long word wrap is also supported: abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz12345678901234567890";
    console.log(AutoWrap.wrap(text,200,"14px Arial").join("\n"))
```

output

```
AutoWrap is an open source
javascript module to handle
text wrap. 中文也是支持的: 床
前明月光，疑是地上霜，举头望
明月，低头思故乡。long word
wrap is also supported: abcdef
ghijklmnopqrstuvwxyz12345678
90abcdefghijklmnopqrstuvwxyz
12345678901234567890
```
If you change the call to

```
    console.log(AutoWrap.wrap(text,50).join("\n"))
```

It will output

```
AutoWrap is an open source javascript module to
handle text wrap. 中文也是支持的: 床前明月光，疑
是地上霜，举头望明月，低头思故乡。long word wrap
is also supported: abcdefghijklmnopqrstuvwxyz1234
567890abcdefghijklmnopqrstuvwxyz123456789012345678
90
```

