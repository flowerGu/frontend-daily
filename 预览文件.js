if(type == 'shipin'){   
            // var newDom = document.createElement("source");
            // newDom.setAttribute("src",'http://sz.cuchuashao.com'+url);
            // document.getElementById("player1").appendChild(newDom)
            var quickType = url.substr(url.lastIndexOf('.')+1,);
            var videoType = '';
            if (quickType == 'mp4') {
                  videoType = 'video/mp4';
                  player.html('<video id="cj-player" poster="" width="950" height="560" controls="controls" preload="none">\
                  <source type="'+videoType+'" src="' + url + '" />\
                  <object width="100%"  height="560" type="application/x-shockwave-flash" data="/ascts/player/video/flashmediaelement.swf">\
                  <param name="movie" value="/ascts/player/video/flashmediaelement.swf" />\
                  <param name="flashvars" value="controls=true&amp;file=' + url + '" />\
                  <img src="" width="640" height="360" alt="Here we are" title="No video playback capabilities" /></object>\
                  </video>');
                  $('audio,video').mediaelementplayer({})
            }else{
                  videoType = 'video/flv'
                  player.html('<video controls style="max-height:100%;max-width:100%;" src="'+url+'"></video>');
            }
                 
           
      }else if(type == 'tupian'){
            player.html('<div style="width:100%;" class="tc"><img style="max-width:100%;max-height:560px;margin:0 auto;" src="'+url+'"/></div>')
      }else if(type == 'pdf'){
            player.append('<div><canvas id="the-canvas"></canvas></div>');
		player.append('<div class="pdfButton" id="pdfButton"><button id="prev" onClick="goPrevious()"><img src="js/plugs/pdf/left.png" alt="上一页"/></button><button id="next" style="margin-left: 60px;" onClick="goNext()"><img src="js/plugs/pdf/right.png" alt="下一页"/></button><span class="page">页码: <span id="page_num"></span> / <span id="page_count"></span></div>');
            outUrl = url;
            loadScript('js/plugs/pdf/pdfNP.js');
      }else if(type == 'donghua'){
            player.append('<object id="cj-player" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,16,0"	width="100%" height="'+560+'" ><param name="movie" value="' + url + '"><param name="quality" value="high"><param name="play" value="true"><param name="LOOP" value="false"><embed src="'+url+'" width="100%" height="'+560+'" play="true" loop="false" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed></object>');
      }else if(type == 'word' || type == 'ppt'){
            player.html('<iframe width="970" height="560" border="0" src="http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=true&_source=true&_xdoc='+url+'"></iframe>')
      }
