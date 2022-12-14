
 //ex1
 $(document).ready(function() {
  $("button").click(function() {
      $("p").toggle("slow", function() {
          if ($("p").is(":visible")) {
              alert("Le paragraphe est visible.");
          } else {
              alert("Le paragraphe est caché.");
          }
      });
  });
});
//ex2
function exercice2() {
    var container = document.getElementById("2");
    container.style.visibility = 'visible';
    $("<p>!Je suis les éléments de classe ma_classe!</p>").insertAfter('.ma_classe');
    $("span").insertAfter('#mon_div');
    $("Un petit texte à insérer dans le DOM juste avant mon_div").insertBefore('#mon_div');
    $('#mon_div').append("<p>** Je mets ça en fin de DIV **</p>");
    $('#mon_div').prepend("<p>++ Tiens je rajoute ça en début de div ++</p>");
  };
  //ex3
  function exercice3() {
    var container = document.getElementById("3");
    container.style.visibility = 'visible';
    $("#afficher_texte").click(function () {
      alert("Le texte contenu dans le textarea est " + $("#mon_textarea").val());
    });
  }
//ex4
function exercice4() {
    var container = document.getElementById("4");
    container.style.visibility = 'visible';
    document.getElementById('no_paste').addEventListener('keydown')
    function a(foo) {
      if (foo.keyCode == 86) {
        alert('Le collage de texte n est pas autorisé !');
        foo.preventDefault();
      }
    }
  };
//ex5

function supprimer_dernier_caractere(elm) {
    var container = document.getElementById("5");
    container.style.visibility = 'visible';
    var val = $(elm).val();
  var cursorPos = elm.selectionStart;
  $(elm).val(
     val.substr(0,cursorPos-1) + // before cursor - 1
    val.substr(cursorPos,val.length) // after cursor
  )
  elm.selectionStart = cursorPos-1; // replace the cursor at the right place
  elm.selectionEnd = cursorPos-1;
  }
  
  $(document).ready( function () {
    // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
    $('body').delegate('input.only_alpha_num','keyup',function(){
      if(!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
        supprimer_dernier_caractere(this);
    });
   // Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
  document.getElementById('no_paste').addEventListener('keydown', 
    function (foo){
      if (foo.keyCode == 86)
      {
         // alert('Vous avez copié du texte');
  foo.preventDefault();
      }
    });
   });
   //ex6
   function exercice6(){
    var container = document.getElementById("6");
    container.style.visibility = 'visible';
    $("#mon_image").attr('src', 'im1.png');
    $("#mon_image").hover(
        function () {
          $(this).attr('src','im1.png');  
        },
        function () {
           $(this).attr('src','im2.png');  
        }
     );
   }
   //ex7
   function exercice7(){  
    var container = document.getElementById("7");
    container.style.visibility = 'visible';
     $(document).ready( function () {
    $( "#moncalendrier").datepicker({ showOn: "both",                           
        buttonImage: "../img/b_calendar.png",
        buttonImageOnly: true,
        buttonText:'Cliquer pour choisir une date',
        onClose: function(dateText, inst) {  }, $options });
    $('#moncalendrier').focus();
       
});   }
function exercice8(){
    var container = document.getElementById("8");
    container.style.visibility = 'visible';
$("#monimage").hover(
  function(){
   // La souris passe sur l'élément
   $("#temp").remove()
   $(this).append("<div id='temp'></div>"); // Création d'un div temporaire qui va héberger l'image en surimpression
   bgimg = "url(im2.png)";
   $(this).find("#temp").css({position:"absolute",background:"transparent "+bgimg+" no-repeat",opacity:0});
   $(this).find("#temp").stop().animate({opacity:1},500);  }, 
function(){

   // La souris sort de l'élément
     $(this).find("#temp").stop().animate({opacity:0},500,function(){$(this).remove()});
  }
)
}
//ex9
function exercice9(){
    var container = document.getElementById("9");
    container.style.visibility = 'visible';
    $('a img').hover(
        function(){ $(this).animate({ opacity : '.75' }); },
        function(){ $(this).animate({ opacity : '1' }); }
       );
}
//ex10
function exercice10(){
    
    $('html').click(function(event){
        if(event.target.id == 'id_de_mon_element') {
          alert ("j'ai cliqué sur mon élément");
        } else {
          alert ("j'ai cliqué à l'extérieur de mon élément");
        }
    });

}
//11
function exercice11(){
    $(function() {
        var today = new Date();
        var ladate=Date.parse(today);
        var lannee = today.getFullYear();
        var dateprintemps  =Date.parse(new Date(lannee, 2, 21));
        var dateete        =Date.parse(new Date(lannee, 5, 21));
        var dateautomne    =Date.parse(new Date(lannee, 8, 21));
        var datehiver      =Date.parse(new Date(lannee, 11, 21));
        if(ladate>=dateprintemps && ladate<dateete){
          $("#monimage").css({backgroundImage: "url('img/Fond-Printemps.png')"}); }
        else if(ladate>=dateete && ladate<dateautomne){
          $("#monimage").css({backgroundImage: "url('img/Fond-Ete.png')"});  }
        else if(ladate>=dateautomne && ladate<datehiver){
          $("#monimage").css({backgroundImage: "url('img/Fond-Automne.png')"});  }
        else if(ladate>=datehiver || ladate<dateprintemps){
          $("#monimage").css({backgroundImage: "url('img/Fond-Hiver.png')"});  }
    });

}
//12
function exercice12(){
    var container = document.getElementById("12");
    container.style.visibility = 'visible';
    $('.maclassegenerale').not(".maclasseaexclure").css({"background":"url(btPlay.png)  no-repeat 5px 5px"});
}
//13
function exercice13(){
    var nb_element_de_class;
nb_element_de_class=$(".ma_classe").length;
alert(nb_element_de_class);

}
//14
function exercice14(){
    mavaleur =parseInt($("#monDiv1").css('height'))-parseInt($("#monDiv2").css('marginTop'));
    alert(parseInt(mavaleur));
}
//15
function exercice15(){
    var container = document.getElementById("15");
    container.style.visibility = 'visible';
    $(".elementtextarea").attr('readonly','readonly');
}
//17
function exercice17(){
    var container = document.getElementById("17");
    container.style.visibility = 'visible';
    $(document).ready( function () {
        $('#redirection').click(function() {
          $('html,body').animate({scrollTop: $("#monancre").offset().top}, 'slow'      );
        });  
     }) 
}
//18
function exercice18(){
    var container = document.getElementById("18");
    container.style.visibility = 'visible';
$("#monDiv").append("<p>");}
//19
function exercice19(){
    var container = document.getElementById("19");
    container.style.visibility = 'visible';
    jQuery.expr[':'].regex = function(elem, index, match) {
        var matchParams = match[3].split(','),
            validLabels = /^(data|css):/,
            attr = {
                method: matchParams[0].match(validLabels) ?
                            matchParams[0].split(':')[0] : 'attr',
                property: matchParams.shift().replace(validLabels,'')
            },
            regexFlags = 'ig',
            regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
        return regex.test(jQuery(elem)[attr.method](attr.property));
    }
}
//20
function exercice20(){
    var container = document.getElementById("20");
    container.style.visibility = 'visible';
    $('#titre').keyup(function(e) {    
        if(e.keyCode == 13) { // KeyCode de la touche entrée
               alert('Hey ! Tu as appuyé sur la touche entrée !!'); 
      }
     })
}
//23
function exercice23(){
    var container = document.getElementById("23");
    container.style.visibility = 'visible';
    $("#div_pere").click (
        function (){
          alert ('click pere!');
           $(this).children('div:first').click();
        }
      );
}
//24
function exercice24(){
    var container = document.getElementById("24");
    container.style.visibility = 'visible';
    $("#mondiv").siblings('div').each(function(i){
        alert (i +' : '+$(this).html());
});
// affichera '0 : A' puis '1 : B'  puis '2 : D'
}
//25
function exercice25(){
    var container = document.getElementById("25");
    container.style.visibility = 'visible';
    $("#mondiv").mouseup ();
}
//26
function exercice26() {
    var container = document.getElementById("26");
    container.style.visibility = 'visible';
    $(".maclasse").each(function(){ 
        $(this).css({"background":""});
      });
  }
  //27
function exercice27() {
    var container = document.getElementById("27");
    container.style.visibility = 'visible';
   
    $("input[type='checkbox']:checked").each(
        function() {
         console.log($(this).attr('id'));
        });  
        $('input[type=radio][name=mongroupe]:checked').attr('value');  
        $('#element option[value="Marseille"]').attr("selected", "selected");
       }
 //28
function exercice28() {
    var container = document.getElementById("28");
    container.style.visibility = 'visible';
    $("#monDiv").fadeOut('slow').queue(function() {
        $("#monDeuxiemeDiv").fadeIn('slow');
        $(this).dequeue();
     });}
     //29
function exercice29() {
  alert('ajoutez <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"type="text/javascript"></script>')  
}
//30
function exercice30() {
    var container = document.getElementById("30");
    container.style.visibility = 'visible';
    $(document).ready(function(){ 
        function FaireClignoterImage (){ $("#image-neon").fadeOut(200).delay(300).fadeIn(200); } 
        setInterval(FaireClignoterImage,700); 
    });
}