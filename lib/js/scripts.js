/*
    iOSelements by Mariz Melo (MIT) 2012
    https://github.com/jmarizgit/iOSelements
*/
var ios$ = jQuery.noConflict(true);

ios$(function(){
    var iOS = function (){};   //namespace
    var ios = iOS.prototype;   //cache object prototype 

    ios.model = {
        icon_ok : "icon-ok",
        checklist : ".checklist"
    }//model

    ios.controller = {
        _checklist : function(elem){
            //remove all classes
            ios$(elem).parent(ios.model.checklist).find("i").removeClass();
            ios$(elem).find("i").addClass(ios.model.icon_ok);
        },
        _multiplechecklist : function(elem){

        }
    }//controller

    ios.view = {
        events : function(){
            ios$(ios.model.checklist+" li").on("click", function(){
                ios.controller._checklist(this);
            });
        }()
    }//view         
});