
$(document).ready(function(){

    //AJAX service request to get the main text data form the json data store
    $.getJSON('./model/data.json', function(jsonObj){
        console.log(jsonObj);
        
        //Get the home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
        
        //Get the home page left column text data
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '<h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
        
        //Get the home page centre column text data 
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '<h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');
        
        //Get the home page right column text data
        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '<h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

        //Get the psOne main text data
        
        $('#x3dModelTitle_ps1').html('<h>' + jsonObj.pageTextData[4].x3dModelTitle + '<h>');
		$('#x3dCreationMethod_ps1').html('<p>' + jsonObj.pageTextData[4].x3dCreationMethod + '<p>');
		$('#title_ps1').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
		$('#subTitle_ps1').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_ps1').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        //Get the ps4 main text data

        
        $('#x3dModelTitle_ps4').html('<h>' + jsonObj.pageTextData[5].x3dModelTitle + '<h>');
		$('#x3dCreationMethod_ps4').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '<p>');
		$('#title_ps4').html('<h2>' + jsonObj.pageTextData[5].title + '<h2>');
		$('#subTitle_ps4').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
        $('#description_ps4').html('<p>' + jsonObj.pageTextData[5].description + '</p>');
        
	
        //Get the controller  main text data
		$('#x3dModelTitle_cont').html('<h>' + jsonObj.pageTextData[6].x3dModelTitle + '<h>');
		$('#x3dCreationMethod_cont').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '<p>');
		$('#title_cont').html('<h2>' + jsonObj.pageTextData[6].title + '<h2>');
		$('#subTitle_cont').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
        $('#description_cont').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

        //Get the light main text data
		$('#x3dModelTitle_icons').html('<h>' + jsonObj.pageTextData[7].x3dModelTitle + '<h>');
		$('#x3dCreationMethod_icons').html('<p>' + jsonObj.pageTextData[7].x3dCreationMethod + '<p>');
		$('#title_icons').html('<h2>' + jsonObj.pageTextData[7].title + '<h2>');
		$('#subTitle_icons').html('<h3>' + jsonObj.pageTextData[7].subTitle + '</h3>');
        $('#description_icons').html('<p>' + jsonObj.pageTextData[7].description + '</p>');
        
        //Try to add paths to images
        $('#cola_image').html('<img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[8].homeImage + '"/>');

        $('#ps4Logo').html('<img  src="' + jsonObj.pageTextData[9].navbarLogo + '"/>');
        
        /*Top interaction buttons card*/
		$('#topCardTitles').html('<h4>' + jsonObj.pageTextData[10].topCardTitle + '<h4>');
        $('#topCardDescriptions').html('<p>' + jsonObj.pageTextData[10].topCardDescription + '<p');
        
        $('#bottomCardTitles').html('<h4>' + jsonObj.pageTextData[11].bottomCardTitle + '<h4>');
		$('#topCardDescriptions').html('<p>' + jsonObj.pageTextData[10].topCardDescription + '<p');
		
		
		/*//Get the gallery contents data
		$('.title_gallery').html('<h2>' + jsonObj.pageTextData[7].galleryTitle + '<h2>');
		$('.description_gallery').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');*/

		
        
    });

    $(".ps1button").click(function(){
		$(this).text(function(i, v){
		   return v === 'Play that nostalgic inro' ? 'Pause!!!' : 'Play that nostalgic inro'
		});
    });

    $(".ps4button").click(function(){
		$(this).text(function(i, v){
		   return v === 'Play the theme music' ? 'Pause!' : 'Play the theme music'
		});
    });
});