# AutoWrap
AutoWrap is an open source javascript module to handle text wrap. It support both chinese and english.

## example

```
    import AutoWrap from 'autowrap'
    var autoWrap = new AutoWrap();
    var text = "AutoWrap is an open source javascript module to handle text wrap. 中文也是支持的: 床前明月光，疑是地上霜，举头望明月，低头思故乡。long word wrap is also supported: abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz12345678901234567890";
    console.log(autoWrap.wrap(text,200,"14px Arial").join("\n"))
```

output

```
AutoWrap is an open source
javascript module to handle
text wrap. 中文也是支持的:
床前明月光，疑是地上霜，
举头望明月，低头思故乡。
long word wrap is also
supported: abcdefghijklmnop
qrstuvwxyz1234567890abcd
efghijklmnopqrstuvwxyz1234
5678901234567890
```
If you change the call to

```
    console.log(autoWrap.wrap(text,50).join("\n"))
```

It will output

```
AutoWrap is an open source javascript module to
handle text wrap. 中文也是支持的: 床前明月光，疑是
地上霜，举头望明月，低头思故乡。long word wrap is
also supported: abcdefghijklmnopqrstuvwxyz12345678
90abcdefghijklmnopqrstuvwxyz12345678901234567890
```

the difference between autoWrap.wrap(text,200,"14px Arial") and autoWrap.wrap(text,50) is that if you provide the font autowrap will use the font to calucate the width of text. if not autowrap will only calucate the word for 1 length for en char and 2 length for chinese char and other unicode char which char code is bigger than 255.