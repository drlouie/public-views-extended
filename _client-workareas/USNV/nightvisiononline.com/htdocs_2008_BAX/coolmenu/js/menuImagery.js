if (document.images) {
  var SSoff = new Image();
  SSoff.src = "nGenImagery/topMainMenu_SS_off.gif";
  var SSon = new Image();
  SSon.src = "nGenImagery/topMainMenu_SS_on.gif";

  var LVoff = new Image();
  LVoff.src = "nGenImagery/topMainMenu_LV_off.gif";
  var LVon = new Image();
  LVon.src = "nGenImagery/topMainMenu_LV_on.gif";

  var IEoff = new Image();
  IEoff.src = "nGenImagery/topMainMenu_IE_off.gif";
  var IEon = new Image();
  IEon.src = "nGenImagery/topMainMenu_IE_on.gif";

  var AMoff = new Image();
  AMoff.src = "nGenImagery/topMainMenu_AM_off.gif";
  var AMon = new Image();
  AMon.src = "nGenImagery/topMainMenu_AM_on.gif";

  var ALoff = new Image();
  ALoff.src = "nGenImagery/topMainMenu_AL_off.gif";
  var ALon = new Image();
  ALon.src = "nGenImagery/topMainMenu_AL_on.gif";

  var ARoff = new Image();
  ARoff.src = "nGenImagery/topMainMenu_AR_off.gif";
  var ARon = new Image();
  ARon.src = "nGenImagery/topMainMenu_AR_on.gif";

  var CBoff = new Image();
  CBoff.src = "nGenImagery/topMainMenu_CB_off.gif";
  var CBon = new Image();
  CBon.src = "nGenImagery/topMainMenu_CB_on.gif";
  
  var OBAMoff = new Image();
  OBAMoff.src = "nGenImagery/outlookButtons_AMoff.jpg";
  var OBAMon = new Image();
  OBAMon.src = "nGenImagery/outlookButtons_AMon.jpg";
 
  var OBCAoff = new Image();
  OBCAoff.src = "nGenImagery/outlookButtons_CAoff.jpg";
  var OBCAon = new Image();
  OBCAon.src = "nGenImagery/outlookButtons_CAon.jpg";

  var OBTAoff = new Image();
  OBTAoff.src = "nGenImagery/outlookButtons_TAoff.jpg";
  var OBTAon = new Image();
  OBTAon.src = "nGenImagery/outlookButtons_TAon.jpg";

  var OBREoff = new Image();
  OBREoff.src = "nGenImagery/outlookButtons_REoff.jpg";
  var OBREon = new Image();
  OBREon.src = "nGenImagery/outlookButtons_REon.jpg";

}

function rll(imgName,to) {
  if (document.images) { document.images[imgName].src = eval(to + ".src"); }
}

function blr(imgName,to) {
  if (document.images) { document.images[imgName].src = eval(to + ".src"); }
}