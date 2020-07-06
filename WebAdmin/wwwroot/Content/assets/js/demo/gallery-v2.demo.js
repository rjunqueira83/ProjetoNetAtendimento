/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.0.0
Author: Sean Ngu
Website: 
*/

var handleSuperboxGallery = function() {
	"use strict";
	$('.superbox').SuperBox({
		background : '#242a30',
		border : 'rgba(0,0,0,0.1)',
		xColor : '#a8acb1',
		xShadow : 'embed'
	});
};


var GalleryV2 = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleSuperboxGallery();
        }
    };
}();