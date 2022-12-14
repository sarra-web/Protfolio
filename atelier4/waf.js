function exercice0() {
    var c = $(location).attr('href');
    alert(c);
  }
  function exercice1() {
    if ($("body").is(":visible")) { alert("Le contenu de p est visible"); }
    if ($("body").is(":hidden")) { alert("Le contenu de p est caché"); }
  }
  function exercice2() {
    var container = document.getElementById("test");
    container.style.visibility = 'visible';
    $("<p>!Je suis les éléments de classe ma_classe!</p>").insertAfter('.ma_classe');
    $("span").insertAfter('#mon_div');
    $("Un petit texte à insérer dans le DOM juste avant mon_div").insertBefore('#mon_div');
    $('#mon_div').append("<p>** Je mets ça en fin de DIV **</p>");
    $('#mon_div').prepend("<p>++ Tiens je rajoute ça en début de div ++</p>");
  };
  function exercice3() {
    var container = document.getElementById("quatre");
    container.style.visibility = 'visible';
    $("#afficher_texte").click(function () {
      alert("Le texte contenu dans le textarea est " + $("#mon_textarea").val());
    });
  }
  function exercice4() {
    var container = document.getElementById("cinq");
    container.style.visibility = 'visible';
    document.getElementById('no_paste').addEventListener('keydown')
    function a(foo) {
      if (foo.keyCode == 86) {
        alert('Le collage de texte n est pas autorisé !');
        foo.preventDefault();
      }
    }
  };
  function supprimer_dernier_caractere(elm) {
    var container = document.getElementById("six");
    container.style.visibility = 'visible';
    var val = $(elm).val();
    var cursorPos = elm.selectionStart;
    $(elm).val(
      val.substr(0, cursorPos - 1) + // before cursor - 1
      val.substr(cursorPos, val.length) // after cursor
    )
    elm.selectionStart = cursorPos - 1; // replace the cursor at the right place
    elm.selectionEnd = cursorPos - 1;
  }
  $(document).ready(function () {
    // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
    $('body').delegate('input.only_alpha_num', 'keyup', function () {
      if (!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
        supprimer_dernier_caractere(this);
    });
    // Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
    document.getElementById('no_paste').addEventListener('keydown',
      function (foo) {
        if (foo.keyCode == 86) {
          // alert('Vous avez copié du texte');
          foo.preventDefault();
        }
      });
  })
    ;
  function exercice6() {
    var container = document.getElementById("sept");
    container.style.visibility = 'visible';
    $("#mon_image").attr('src', 'monimage.jpg');
    $("#mon_image").hover(
      function () {
        $(this).attr('src', 'monimage1.jpg');
      },
      function () {
        $(this).attr('src', 'monimage2.jpg');
      }
    );
  }
  function exercice7() {
    var container = document.getElementById("huit");
    container.style.visibility = 'visible';
    $(document).ready(function () {
      $("#moncalendrier").datepicker({
        showOn: "both",
        buttonImage: "../img/b_calendar.png",
        buttonImageOnly: true,
        buttonText: 'Cliquer pour choisir une date',
        onClose: function (dateText, inst) { }, $options
      });
      $('#moncalendrier').focus();
  
    });
  }
  function exercice8() {
    var container = document.getElementById("neuf");
    container.style.visibility = 'visible';
    $("#monimage").hover(
      function () {
        $("#temp").remove()
        $(this).append("<div id='temp'></div>");
        bgimg = "url(monimage2.jpg)";
        $(this).find("#temp").css({ position: "absolute", background: "transparent " + bgimg + " no-repeat", opacity: 0 });
        $(this).find("#temp").stop().animate({ opacity: 1 }, 500);
      },
      function () {
        $(this).find("#temp").stop().animate({ opacity: 0 }, 500, function () { $(this).remove() });
      }
    )
  }
  function exercice9() {
    var container = document.getElementById("zero");
    container.style.visibility = 'visible';
    $('a').hover(
      function () { $(this).animate({ opacity: '.75' }); },
      function () { $(this).animate({ opacity: '1' }); }
    );
  }
  function exercice10() {
    $('html').click(function (event) {
      if (event.target.id == 'id_de_mon_element') {
        alert("j'ai cliqué sur mon élément");
        // } else {
        //  alert ("j'ai cliqué à l'extérieur de mon élément");
        // 
      }
    });
  }
  function exercice11() {
    $(function () {
      var today = new Date();
      var ladate = Date.parse(today);
      var lannee = today.getFullYear();
      var dateprintemps = Date.parse(new Date(lannee, 2, 21));
      var dateete = Date.parse(new Date(lannee, 5, 21));
      var dateautomne = Date.parse(new Date(lannee, 8, 21));
      var datehiver = Date.parse(new Date(lannee, 11, 21));
      if (ladate >= dateprintemps && ladate < dateete) {
        $("#monimage").css({ backgroundImage: "url('printemps.jpg')" });
        $("#monimage").show();
      }
      else if (ladate >= dateete && ladate < dateautomne) {
        $("#monimage").css({ backgroundImage: "url('ete.jpg')" });
        $("#monimage").show();
      }
      else if (ladate >= dateautomne && ladate < datehiver) {
        $("#monimage").css({ backgroundImage: "url('automne.jpg')" });
        $("#monimage").show();
      }
      else if (ladate >= datehiver || ladate < dateprintemps) {
        $("#monimage").css({ backgroundImage: "url('hiver.jpg')" });
        $("#monimage").show();
      }
    });
  }
  function exercice12() {
    var container = document.getElementById("trois");
    container.style.visibility = 'visible';
    $('.maclassegenerale').not(".maclasseaexclure").css({ "background": "url(monimage1.jpg)  no-repeat 5px 5px" });
  }
  function exercice13() {
    var nb_element_de_class;
    nb_element_de_class = $(".ma_classe").length;
    alert(nb_element_de_class);
  }
  function exercice14() {
    var mavaleur;
    mavaleur = parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('marginTop'));
    alert(parseInt(mavaleur));
  }
  function exercice15() {
    var container = document.getElementById("six2");
    container.style.visibility = 'visible';
  
    $(".elementtextarea").attr('readonly', 'readonly');
    //$(".elementtextarea").prop("disabled", true); //(valable depuis jquery 1.6 !!) équivalent de
    //​$(".elementtextarea").attr("disabled", "disabled");// évenement onclic inaccessible sur l'input
  }
  function exercice17() {
    var container = document.getElementById("sept2");
    container.style.visibility = 'visible';
    $(document).ready(function () {
      $('#redirection').click(function () {
        $('html,body').animate({ scrollTop: $("#monancre").offset().top }, 'slow');
      });
    })
  }
  function exercice18() {
    var container = document.getElementById("huit2");
    container.style.visibility = 'visible';
    $("#monDiv").append("<p>");
  }
  function exercice21() {
    var container = document.getElementById("neuf2");
    container.style.visibility = 'visible';
    $("#div_pere").click(
      function () {
        alert('click pere!');
        $(this).children('div:first').click();
      }
    ); $(".div_fils").click(
      function (event) {
        alert('click fils!');
        //mettre ici l'évenement sur le fils
        event.stopPropagation();
        //l'événement click n'est plus transmis au père 
      }
    );
  
  }
  function exercice22() {
    var new_element = jQuery('<div id="new_elt">?</div>');
    // On ajoute du style avec la fonction .css()
    new_element.css({
      background: 'gray',
      width: '50px',
      height: '30px',
      padding: '3px'
    });
    $('body').append(new_element); alert('hourra, j ai cliqué sur new_element');
    $("#new_elt").click(function () { alert('cette alerte ne sera jamais déclenchée...'); });
    $("#monDiv").live("click", function () {
      alert('hourra, j ai cliqué sur new_element');
    });
  }
  function exercice23() {
    $("#mondiv").mouseup();
  }
  function exercice24() {
    var k = 0;
    $(".maclasse").each(function () {
      $(this).css({ "background": "" }); k = k + 1;
    });
    alert(k);
  }
  function exercice25() {
    var container = document.getElementById("twentythree");
    container.style.visibility = 'visible';
    $("#mondiv").siblings('div').each(function (i) {
      alert(i + ' : ' + $(this).html());
    });
    // affichera '0 : A' puis '1 : B'  puis '2 : D';
  }
  function exercice26() {
    var container = document.getElementById("twentyfour");
    container.style.visibility = 'visible';
    $('#element option[value="Marseille"]').attr("selected", "selected");
  }
  function exercice27() {
    $("#monDiv").fadeOut('slow').queue(function() {
      $("#monDeuxiemeDiv").fadeIn('slow');
      $(this).dequeue();
   });
   }
  function exercice28() { 
    alert("https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.jsript")
  }
  function exercice29() { 
    var container = document.getElementById("twentyseven");
    container.style.visibility = 'visible';
    $(document).ready(function(){ 
      function FaireClignoterImage (){ $("#image-neon").fadeOut(200).delay(300).fadeIn(200); } 
      setInterval(FaireClignoterImage,700); 
  });
  }
  function exercice30() { }