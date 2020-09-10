
//Functions responsible for switching between the 3d models, adapted from Ben's Kitchen
function ps1Scene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function ps4Scene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function controllerScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function lightScene(){
    nSwitch = 3;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}


//Animating one object in the model (Ps One). Adapted form the lab tutorials 
var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
		document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
			
}

//Aniamting another object in the model (such as the CD in ps1 and the left joystick on the controller)
var rotating = false;

function rotatecd()
{
	rotating = !rotating;
	document.getElementById('model__RotationTime').setAttribute('enabled', rotating.toString());
}

function stopRotations()
{
	rotating = false;
	document.getElementById('model__RotationTime').setAttribute('enabled', rotating.toString());
}

function animateCD()
{
    if(document.getElementById('model__RotationTime').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTime').setAttribute('enabled', 'true');
    else
		document.getElementById('model__RotationTime').setAttribute('enabled', 'false');
			
}

//Animate Ps4
var spinning2 = false;

function spin2()
{
	spinning2 = !spinning2;
	document.getElementById('model__RotationTimerPs4').setAttribute('enabled', spinning2.toString());
}

function stopRotation2()
{
	spinning2 = false;
	document.getElementById('model__RotationTimerPs4').setAttribute('enabled', spinning2.toString());
}

function animateModelps4()
{
    if(document.getElementById('model__RotationTimerPs4').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimerPs4').setAttribute('enabled', 'true');
    else
		document.getElementById('model__RotationTimerPs4').setAttribute('enabled', 'false');
			
}


//Change the mode of the model to wireframe, vertex or polygon

function wireframe()
{
	var a = document.getElementById('wire');
	

	a.runtime.togglePoints(false);
	
	a.runtime.togglePoints(true);
	
	
}

function vertex()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
	
	e.runtime.togglePoints();
	e.runtime.togglePoints();


	
	
	
}

function polygon()
{
	
	var c = document.getElementById('wire');
	c.runtime.togglePoints();
	c.runtime.togglePoints();
	
	
}

//Turn the headlight on and off

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}


//This function is resposnisble for turning the omni lights on and off for all models
var omni = true;

function omniLights()
{
	 omni = !omni;
	 document.getElementById('model__Omni1').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni2').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni3').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni4').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni5').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni6').setAttribute('on',omni.toString());
	 document.getElementById('model__Omni7').setAttribute('on',omni.toString());
}

//Functions responsible for changing the camera views of the models
function cameraFront()
{
	document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}


function cameraDefault()
{
	document.getElementById('model__CameraDefault').setAttribute('bind', 'true');
}


//Play the themes for PS1 and PS4



var ps1sound = document.getElementById("ps1intro");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    ps1sound.pause()
  } else {
    ps1sound.play();
  }
};
ps1sound.onplaying = function() {
  isPlaying = true;
};
ps1sound.onpause = function() {
  isPlaying = false;
};
//ps4
var ps4sound = document.getElementById("ps4intro");
var isPlaying = false;

function togglesPlay() {
  if (isPlaying) {
    ps4sound.pause()
  } else {
    ps4sound.play();
  }
};
ps4sound.onplaying = function() {
  isPlaying = true;
};
ps4sound.onpause = function() {
  isPlaying = false;
};




//Changes the texture of the CD in ps1

var bSwitch = false;

    function texChange() {
        bSwitch = !bSwitch;
        if (bSwitch) {
            document.getElementById('model__CD').setAttribute('url','../images/sh.png');
        }  else {
			document.getElementById('model__CD').setAttribute('url','../images/re3CD.png');
		
		} 
		

		
	}
	
	//Responsible for chanign the base color of the ps1 and the lid (since it's a seperate object)
	
function ps1Color (){
   

	counter += 1;
	document.getElementById('model__Base_ps1').getAttribute('diffuseColor');
	document.getElementById('model__lidcolor').getAttribute('color');
	switch (counter) {
		case 1:
		document.getElementById('model__Base_ps1').setAttribute('diffuseColor', ' 0.05882 0.1961 0.3804');
		document.getElementById('model__lidcolor').setAttribute('color', '0.01961 0.01961 0.01961 0.05882 0.1961 0.3804 0.5686 0.04706 0.03529 0.7961 0.549 0.07451 0.1294 0.4667 0.1843 0.588 0.588 0.588 0.588 0.588 0.588 0.06275 0.1647 0.7725 0.588 0.588 0.588 0.588 0.588 0.588');
			
			break;
		case 2:
		document.getElementById('model__Base_ps1').setAttribute('diffuseColor', '0.03529 0.1882 0.2392');
		document.getElementById('model__lidcolor').setAttribute('color', '0.01961 0.01961 0.01961 0.03529 0.1882 0.2392 0.5686 0.04706 0.03529 0.7961 0.549 0.07451 0.1294 0.4667 0.1843 0.588 0.588 0.588 0.588 0.588 0.588 0.06275 0.1647 0.7725 0.588 0.588 0.588 0.588 0.588 0.588');
			break;
		case 3:
		document.getElementById('model__Base_ps1').setAttribute('diffuseColor', '0.01569 0.01569 0.01569');
		document.getElementById('model__lidcolor').setAttribute('color', '0.4627 0.4627 0.4627 0.01569 0.01569 0.01569 0.5686 0.04706 0.03529 0.7961 0.549 0.07451 0.1294 0.4667 0.1843 0.588 0.588 0.588 0.588 0.588 0.588 0.06275 0.1647 0.7725 0.588 0.588 0.588 0.588 0.588 0.588');
			break;
		case 4:
			counter = 0;
			document.getElementById('model__Base_ps1').setAttribute('diffuseColor', '0.4627 0.4627 0.4627');
			document.getElementById('model__lidcolor').setAttribute('color', '0.01961 0.01961 0.01961 0.4627 0.4627 0.4627 0.5686 0.04706 0.03529 0.7961 0.549 0.07451 0.1294 0.4667 0.1843 0.588 0.588 0.588 0.588 0.588 0.588 0.06275 0.1647 0.7725 0.588 0.588 0.588 0.588 0.588 0.588');
			break;
	}
			

}




// Changing th ecolor of the PS4 model

function ps4Color (){
    
	counter += 1;
	document.getElementById('model__ps4Base').getAttribute('color');
	switch (counter) {
		case 1:
		document.getElementById('model__ps4Base').setAttribute('color', '0.4627 0.4627 0.4627 0 0 0 0 0.06275 0.9059 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.7137 0.7137 0.7137');
			
			break;
		case 2:
		document.getElementById('model__ps4Base').setAttribute('color', '0.2549 -0.5529 -0.5529 0 0 0 0 0.06275 0.9059 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.7137 0.7137 0.7137');
			break;
		case 3:
		document.getElementById('model__ps4Base').setAttribute('color', '0.1216 0.3451 0.851 0 0 0 0 0.06275 0.9059 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.7137 0.7137 0.7137');
			break;
			case 4:
		document.getElementById('model__ps4Base').setAttribute('color', '0.2549 0.2549 0.2549 0 0.2549 0.2549 0.2549 0.9059 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.7137 0.7137 0.7137');
			break;
		case 5:
			counter = 0;
			document.getElementById('model__ps4Base').setAttribute('color', '0.01569 0.01569 0.01569 0 0 0 0 0.06275 0.9059 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.7137 0.7137 0.7137 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.588 0.8392 0.8392 0.8392');
			break;
	}
			

}


			

//Change the color for the base of the controller and the light 

function dualColor (){
    
	counter += 1;
	document.getElementById('model__baseC').getAttribute('color');
	switch (counter) {
		case 1:
		document.getElementById('model__baseC').setAttribute('color', '0.4627 0.4627 0.4627 0.3549 0.3549 0.3549');
			
			break;
		case 2:
		document.getElementById('model__baseC').setAttribute('color', '0.003922 0.1255 0.3059 0.1294 0.1294 0.1294');
			break;
		case 3:
		document.getElementById('model__baseC').setAttribute('color', '0.2549 -0.5529 -0.5529 0.1294 0.1294 0.1294');
			break;

			case 4:
		document.getElementById('model__baseC').setAttribute('color', '0.003922 0.5333 0.4275 0.1725 0.04314 0.09412');
			break;

		case 5:
			counter = 0;
			document.getElementById('model__baseC').setAttribute('color', '0.003922 0.003922 0.003922 0.1294 0.1294 0.1294');
			break;
	}
			

}



function controllerColor (){

	counter += 1;
	document.getElementById('model__lightthing').getAttribute('diffuseColor');
	switch (counter) {
		case 1:
		document.getElementById('model__lightthing').setAttribute('diffuseColor', '0.8 0 0.53');
			
			break;
		case 2:
		document.getElementById('model__lightthing').setAttribute('diffuseColor', '0 0.9 0.65');
			break;
		case 3:
		document.getElementById('model__lightthing').setAttribute('diffuseColor', '0.8 0.7 0');
			break;
		case 4:
			counter = 0;
			document.getElementById('model__lightthing').setAttribute('diffuseColor', '0.09412 0.1333 0.9294');
			break;
	}
			

}

//LightsAnimation functions

//Triangle

var tri = false;

function spintri()
{
	tri = !tri;
	document.getElementById('model__tri-530-TIMER').setAttribute('enabled', tri.toString());
}

function stopRotation()
{
	tri = false;
	document.getElementById('model__tri-530-TIMER').setAttribute('enabled', tri.toString());
}

function animateModel()
{
    if(document.getElementById('model__tri-530-TIMER').getAttribute('enabled')!= 'true')
        document.getElementById('model__tri-530-TIMER').setAttribute('enabled', 'true');
    else
		document.getElementById('model__tri-530-TIMER').setAttribute('enabled', 'false');
			
}

//X

var xr = false;

function spinx()
{
	xr = !xr;
	document.getElementById('model__x-532-TIMER').setAttribute('enabled', xr.toString());
}

function stopRotation()
{
	xr = false;
	document.getElementById('model__x-532-TIMER').setAttribute('enabled', xr.toString());
}



//Circle

var c = false;

function spinc()
{
	c = !c;
	document.getElementById('model__circle-531-TIMER').setAttribute('enabled', c.toString());
}

function stopRotation()
{
	c = false;
	document.getElementById('model__circle-531-TIMER').setAttribute('enabled', c.toString());
}



//Square

var sq = false;

function spinsq()
{
	sq = !sq;
	document.getElementById('model__square-533-TIMER').setAttribute('enabled', sq.toString());
}

function stopRotation()
{
	sq = false;
	document.getElementById('model__square-533-TIMER').setAttribute('enabled', sq.toString());
}




//animation for the joysticks

var r = false;

function joyR()
{
	r = !r;
	document.getElementById('model__Cylinder001-429-TIMER').setAttribute('enabled', r.toString());
}

var l = false;

function joyL()
{
	l = !l;
	document.getElementById('model__Cylinder003-430-TIMER').setAttribute('enabled', l.toString());
}

//Changes the specualr color for the icons light//same method used for changing the texture, except the attribute being changed here is the specularColor

var spec = false;

	function flipSwitch(){
	
	    
		spec = !spec;
		document.getElementById('model__tris').getAttribute('specularColor'); 
        if (spec) {
			document.getElementById('model__tris').setAttribute('specularColor','0 0 0');
			document.getElementById('model__xs').setAttribute('specularColor','0 0 0');
			document.getElementById('model__circles').setAttribute('specularColor','0 0 0');
			document.getElementById('model__squares').setAttribute('specularColor','0 0 0');
			
		}  
		else {
			document.getElementById('model__tris').setAttribute('specularColor','0.928 0.928 0.928');
			document.getElementById('model__xs').setAttribute('specularColor','0.928 0.928 0.928');
			document.getElementById('model__circles').setAttribute('specularColor','0.928 0.928 0.928');
			document.getElementById('model__squares').setAttribute('specularColor','0.928 0.928 0.928');
		
		} 
		

		
	}


	