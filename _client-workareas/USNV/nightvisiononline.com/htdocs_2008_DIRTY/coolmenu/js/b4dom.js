if(!document.getElementById){document.getElementById=get_Element;document.allLayers=new Array();}if(!document.getElementsByTagName||document.all){document.getElementsByTagName=get_Tags;}function get_Tags(a1){var ns4=this.layers;var dl=this.allLayers;if(ns4&&!dl.length){var lay=ns4.length?ns4[0]:false;for(var i=0;lay;i++){dl[i]=dl[lay.id]=lay;lay.style=new Object();lay.style.par=lay;set_nsStyle(lay.style);lay=lay.above;}}if(this.body){if(this.all){dl=a1=="*"?this.all:this.all.tags(a1)}else{dl=this.body.getElementsByTagName(a1)}}if(!dl.item){dl.item=get__Item}if(!dl.namedItem){dl.namedItem=get__Item}return dl;}function get_Element(a1){if(this.layers){return this.allLayers[a1]||this.getElementsByTagName()[a1]}return this.all[a1];}function ns_Height(a1,a2,a3){this.par.clip.height=parseInt(a3);return get_nsHeight(this.par)}function ns_Width(a1,a2,a3){this.par.clip.width=parseInt(a3);return get_nsWidth(this.par)}function ns_Left(a1,a2,a3){this.par.left=parseInt(a3);return a3}function ns_Top(a1,a2,a3){this.par.top=parseInt(a3);return a3}function ns_zIndex(a1,a2,a3){return this.par.zIndex=a3}function ns_Visible(a1,a2,a3){this.par.visibility=a3;return a3}function ns_Clip(a1,a2,a3){var s=a3.split(" ");if(s.length<4){s=a3.split(",")}var c=this.par.clip;var p=parseInt;c.top=p(s[0].substr(5));c.right=p(s[1]);c.bottom=p(s[2]);c.left=p(s[3]);return get_nsClip(c);}function ns_bgColor(a1,a2,a3){this.par.bgColor=a3.toLowerCase()=='transparent'?null:a3;return a3;}function ns_bgImage(a1,a2,a3){this.par.background.src=a3.substring(a3.indexOf("(")+1,a3.indexOf(")"))||null;return a3;}function set_nsStyle(t){var p=t.par;t.height=get_nsHeight(p)+"px";t.width=get_nsWidth(p)+"px";t.left=p.left+"px";t.top=p.top+"px";t.zIndex=p.zIndex;t.visibility=get_nsVisible(p.visibility);t.clip=get_nsClip(p.clip);t.backgroundColor="";t.backgroundImage="";t.watch("height",ns_Height);t.watch("width",ns_Width);t.watch("left",ns_Left);t.watch("top",ns_Top);t.watch("zIndex",ns_zIndex);t.watch("visibility",ns_Visible);t.watch("clip",ns_Clip);t.watch("backgroundImage",ns_bgImage);t.watch("backgroundColor",ns_bgColor);}function get_nsVisible(vis){if(vis=='hide')return 'hidden';if(vis=='show')return 'visible';return 'inherit';}function get_nsClip(c){return "rect("+c.top+"px "+c.right+"px "+c.bottom+"px "+c.left+"px)"}function get_nsHeight(p){return Math.max(p.clip.height,p.document.height)}function get_nsWidth(p){return Math.max(p.clip.width,p.document.width)}function Height(){return this.innerHeight||document.body.clientHeight}function Width(){return this.innerWidth||document.body.clientWidth}function get__Item(a1){return this[a1]}
