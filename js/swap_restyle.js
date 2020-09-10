// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	
});

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		//$('#pepperDescription').hide(); 


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#gallery').hide();
			//$('#pepperDescription').hide(); 	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			//$('#pepperDescription').hide(); 	  
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show();

			$("#x3dModelTitle_ps1").show();
			$("#x3dModelTitle_ps4").hide();
			$("#x3dModelTitle_cont").hide();
			$("#x3dModelTitle_icons").hide();

			$("#x3dCreationMethod_ps1").show();
			$("#x3dCreationMethod_ps4").hide();
			$("#x3dCreationMethod_cont").hide();
			$("#x3dCreationMethod_icons").hide();

			$("#movePS4").hide();

			$("#square").hide();
			$("#x").hide();
			$("#circle").hide();
			$("#tri").hide();

			$("#r").hide();
			$("#l").hide();

			$("#lightcolor").hide();
			$("#contlogo").hide();
			$("#ps4colors").hide();
			$("#iconsspec").hide();
			$("#ps4audio").hide();


		});

		
	}

function ps1Description() {
		$("button").click(function(){
			
			$("#cokeDescription").show();
			$("#spriteDescription").hide();
			$("#pepperDescription").hide();
			
			$("#x3dModelTitle_ps1").show();
			$("#x3dModelTitle_ps4").hide();
			$("#x3dModelTitle_cont").hide();
			$("#x3dModelTitle_icons").hide();

			$("#x3dCreationMethod_ps1").show();
			$("#x3dCreationMethod_ps4").hide();
			$("#x3dCreationMethod_cont").hide();
			$("#x3dCreationMethod_icons").hide();

			$("#openPs1").show();
			$("#playCD").show();
			$("#ps1color").show();
			$("#game").show();
			$("#ps1audio").show();


			$("#movePS4").hide();

			$("#square").hide();
			$("#x").hide();
			$("#circle").hide();
			$("#tri").hide();

			$("#r").hide();
			$("#l").hide();

			$("#lightcolor").hide();
			$("#contlogo").hide();
			$("#ps4colors").hide();
			$("#iconsspec").hide();

			$("#ps4audio").hide();

			
		}); 
	}
	
function ps4Description() {
		$("button").click(function(){
	
			$("#x3dModelTitle_ps1").hide();
			$("#x3dModelTitle_ps4").show();
			$("#x3dModelTitle_cont").hide();
			$("#x3dModelTitle_icons").hide();

			$("#x3dCreationMethod_ps1").hide();
			$("#x3dCreationMethod_ps4").show();
			$("#x3dCreationMethod_cont").hide();
			$("#x3dCreationMethod_icons").hide();

			$("#openPs1").hide();
			$("#playCD").hide();
			$("#ps1color").hide();
			$("#game").hide();
			$("#ps1audio").hide();


			$("#movePS4").show();

			$("#square").hide();
			$("#x").hide();
			$("#circle").hide();
			$("#tri").hide();

			$("#r").hide();
			$("#l").hide();

			$("#lightcolor").hide();
			$("#contlogo").hide();
			$("#ps4colors").show();
			$("#iconsspec").hide();

			$("#ps4audio").show();



		}); 
	}
	
function contDescription() {
		$("button").click(function(){
	
			$("#x3dModelTitle_ps1").hide();
			$("#x3dModelTitle_ps4").hide();
			$("#x3dModelTitle_cont").show();
			$("#x3dModelTitle_icons").hide();

			$("#x3dCreationMethod_ps1").hide();
			$("#x3dCreationMethod_ps4").hide();
			$("#x3dCreationMethod_cont").show();
			$("#x3dCreationMethod_icons").hide();

			$("#openPs1").hide();
			$("#playCD").hide();
			$("#ps1color").hide();
			$("#game").hide();
			$("#ps1audio").hide();

			$("#movePS4").hide();

			$("#square").hide();
			$("#x").hide();
			$("#circle").hide();
			$("#tri").hide();

			$("#r").show();
			$("#l").show();

			$("#lightcolor").show();
			$("#contlogo").show();
			$("#ps4colors").hide();
			$("#iconsspec").hide();
			$("#ps4audio").hide();


		}); 
	}

	function iconsDescription() {
		$("button").click(function(){
	
			$("#x3dModelTitle_ps1").hide();
			$("#x3dModelTitle_ps4").hide();
			$("#x3dModelTitle_cont").hide();
			$("#x3dModelTitle_icons").show();

			$("#x3dCreationMethod_ps1").hide();
			$("#x3dCreationMethod_ps4").hide();
			$("#x3dCreationMethod_cont").hide();
			$("#x3dCreationMethod_icons").show();

			$("#openPs1").hide();
			$("#playCD").hide();
			$("#ps1color").hide();
			$("#game").hide();
			$("#ps1audio").hide();


			$("#movePS4").hide();

			$("#square").show();
			$("#x").show();
			$("#circle").show();
			$("#tri").show();

			$("#stop").hide();

			$("#r").hide();
			$("#l").hide();

			$("#lightcolor").hide();
			$("#contlogo").hide();
			$("#ps4colors").hide();
			$("#iconsspec").show();
			$("#ps4audio").hide();
			
		}); 
	}

	
function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
		document.getElementById('bodyColor').style.backgroundImage = 'url(assets/images/20anni.jpg)';
			//document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#9FA4AC';
			document.getElementById('footerColor').style.backgroundColor = '#D23B3B';
			document.getElementById('psLogo').style.backgroundImage = 'url(assets/images/psoneLogo.png)';
			
			break;
		case 2:
		counter = 0;
		document.getElementById('bodyColor').style.backgroundImage = 'url(assets/images/ps2.jpg)';
			document.getElementById('headerColor').style.backgroundImage = 'linear-gradient(to bottom right, #8AB4E1, #CB92DE)';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			document.getElementById('psLogo').style.backgroundImage = 'url(assets/images/ps2.png)';
			break;
		
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundImage = 'url(assets/images/ps4.jpg)';
	document.getElementById('headerColor').style.backgroundImage = 'grey';
			document.getElementById('footerColor').style.backgroundColor = 'grey';
			document.getElementById('psLogo').style.backgroundImage = 'url(assets/images/psLogo.png)';
}

