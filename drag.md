```js
//拖拽功能
  function pullUl(){
        var par = document.getElementById('todoList'),
            temp = '';
        par.addEventListener('dragstart',function(event){
            event = event || arguments.callee.caller.arguments[0];
            if(event.target.tagName=='LI'){
                temp = event.target;
            }else if(event.target.tagName=='SPAN'){
                temp = event.target.parentNode;
            }
            event.dataTransfer.setData('text/plain',null)
        })
        par.addEventListener('dragover',function(event){
             event = event || arguments.callee.caller.arguments[0];
            event.preventDefault();
            event.stopPropagation();
        })
         par.addEventListener('drop',function(event){
            event = event || arguments.callee.caller.arguments[0];
            if(event.target.tagName=='LI' && temp.parentNode==event.target.parentNode){
                 var curHtml = event.target.innerHTML;
                event.target.innerHTML = temp.innerHTML;
                temp.innerHTML = curHtml;
            }else if(event.target.tagName=='SPAN'&& temp.parentNode==event.target.parentNode.parentNode){
               var curHtml = event.target.parentNode.innerHTML;
                event.target.parentNode.innerHTML = temp.innerHTML;
                temp.innerHTML = curHtml;
            }

        })
    }
  
```
