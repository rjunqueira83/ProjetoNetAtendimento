/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3 & 4
Version: 4.0.0
Author: Sean Ngu
Website: 
*/

var handleFormWysihtml5 = function () {
	"use strict";
	$('#wysihtml5').wysihtml5();
};

var FormWysihtml5 = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleFormWysihtml5();
        }
    };
}();