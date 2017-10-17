## 给input[type=file]添加小手状
```js
$(".uploadButton").mousemove(function(e) {
        var offL, offR, inpStart
        offL = $(this).offset().left;
        offT = $(this).offset().top;
        aaa= $(this).find("input").width();
        $(this).find("input").css({
            left:e.pageX-aaa-30,
            top:e.pageY-offT-10
        })
    });
```

```html
<div style="padding:100px;">
    <div class="uploadButton">
        <input type="file" />
    </div>
</div>
```

```css
.uploadButton input[type="file"] {
   
    position:absolute;
    top:0px;
    opacity:0;
}

.uploadButton {
    position:relative;
    overflow:hidden;
    height:128px;
    cursor:pointer;
    width:128px;       
    opacity:0.5;
}
.uploadButton:hover {
    opacity:1;   
}
```
