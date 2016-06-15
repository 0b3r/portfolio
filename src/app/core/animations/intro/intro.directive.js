'use strict';
import TweenMax from "gsap";

export default function (app) {

    app.directive('intro', introDirective);

    function introDirective ($timeout) {
        'ngInject';

        return {
            restrict: 'A',
            link: linkFn
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {

            if(attrs.intro === 'skip'){
                elem.children('#main-logo-link').css({transform:'scale(1)', left: '0px', top: '0px'});
                elem.css({width:"150px", height:'100%'});
                $("#main-nav").css({top:'25%'});
                $("#main-nav").show();
                

            }else{
                elem.css({width:'100%', height: '100%'});
                
                let showNav = function(){

                    
                    TweenMax.to(elem, 1, {backgroundColor:"#999", onComplete: function(){
                        $("#main-nav").css({top:'25%'});
                        $("#main-nav").show();
                        TweenMax.staggerFrom(".nav-item", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
                    }});
                    
                }

                $timeout(function(){


                    

                    TweenMax.to(elem.children('#main-logo-link'), 1, {transform:'scale(1)', left: '0px', top: '0px'});
                    TweenMax.to(elem, 1, {width:"150px", height:'100%', onComplete: showNav});
                    
                    $(".nav-item").click(function(){
                        console.log('here');
                      TweenMax.staggerTo(".nav-item", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
                    });
                }, 2000);
            }
            //
        }
    }
}