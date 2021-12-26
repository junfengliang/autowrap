
var AutoWrap;

(function(){
    var ctx = null;
    function ctxWidth(text,font){
        if(ctx==null){
            ctx = document.createElement("canvas").getContext("2d");
        }
        ctx.font = font;
        return ctx.measureText(text).width;
    }
    function simpleWidth(text,font){
        let cur =0;            
        let width = 0;
        while(cur<text.length){  
            if(text.charCodeAt(cur++)>255){
                width+=2
            }else{
                width+=1
            }            
        }
        
        return width;
    }

    function autowrap(text,font,maxWidth,widthFunc){
        var arr = text.split("\n");
        var lines = [];
        for (var i = 0; i < arr.length; i++) {
            var line = arr[i];
            var lineWidth = widthFunc(line,font);
            if(lineWidth<=maxWidth){
                lines.push(line);
                continue;
            }
            let cur =0; 
            var tmpLine = "";

            while(cur<line.length){                
                let word = "" + text[cur++];
                if(word[0]!=' ' && word.charCodeAt(0)<256){
                    while(cur < text.length && text[cur]!=' ' && text.charCodeAt(cur)<256) {                        
                        word += text[cur++];
                    }
                }
                var wordWidth = widthFunc(word,font);
                let tempLineWidth = widthFunc(tmpLine,font);

                if(wordWidth>maxWidth){
                    let wordCur =0;
                    let tmpWord = word[wordCur++];
                    while(wordCur<word.length){
                        let tmpWidth = widthFunc(tmpWord + word[wordCur],font);
                        if(tmpWidth+tempLineWidth>maxWidth){
                            lines.push((tmpLine+tmpWord).trim());
                            tmpLine = "";
                            tempLineWidth = 0;
                            tmpWord=word[wordCur];
                        }else{
                            tmpWord += word[wordCur];
                        }
                        wordCur++
                    }
                    tmpLine = tmpWord
                }else{
                    if(wordWidth+tempLineWidth>maxWidth){
                        lines.push(tmpLine.trim())
                        if(word[0]!=' ' || word.length>1){
                            tmpLine = word;
                        }else{
                            tmpLine = "";
                        }                        
                    }else{
                        tmpLine +=word;
                    }
                }
            }
            if(tmpLine.length>0){
                lines.push(tmpLine.trim())
            }
        }
        return lines;
    }
    AutoWrap = function(){
    }
    
    AutoWrap.prototype.wrap = function(text,maxWidth,font){
        if(font==undefined){
            return autowrap(text,"",maxWidth,simpleWidth)
        }
        return autowrap(text,font,maxWidth,ctxWidth)
    }
})()
if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = AutoWrap;
}

