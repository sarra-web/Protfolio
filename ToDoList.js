
function DateActuel(){
    var d=new Date()
    return d.getDate()
}
$(document).ready(function(){


	$("#initBtn").click(function(){ 
	   
	   if (localStorage.TodoListe)
	   {
            alert(" vous allez Tout initialise :"+localStorage.TodoListe);
	   //effacer tout le contenu de localStorage
           //effacer tout le contenu de SessionStorage
	   $('table').html("");     // suprimer le contenue de la table
    }});
	
  
   $("#submitBtn").click(function(){        

        var Todo={titre:"", desc:"", date:"", importance:0}; 
        // initialisation de l'Objet Todo 
	
        Todo.titre = $("#titre_tache").val();
        Todo.desc = $("#descript").val();
	    Todo.date=  $("#date_tache").val();
	    Todo.importance=Number($("#etat_tache").val());
	 	
		if (!localStorage.TodoListe)
			{	var  TodoListe_Tab=[];
                // definition du tableau TodoListe_Tab
		       TodoListe_Tab.push(Todo);
                // Ajouter Todo au tableau TodoListe_Tab
				
                      //On place le tableau en m�moire en transformant le JSON en chaine de caracteres
			 localStorage.TodoListe	=JSON.stringify(TodoListe_Tab);
	
			}
		else 
	      {     
	            var recupTodoListe=JSON.parse(localStorage.TodoListe); // recuperer la chaine TodoListe sauvegard� et la retransforme en tableau
		    var TodoListe_Tab=recupTodoListe.splice(0);//permet de cr�er une copie d'un array � partir d'indice 0 
	        
            TodoListe_Tab.push(Todo);
            // Ajouter Todo au tableau TodoListe_Tab
		         
               //On replace le tableau en m�moire en transformant le JSON en chaine de caracteres
	            
               localStorage.TodoListe	=JSON.stringify(TodoListe_Tab);
	       }
		$('table').html(""); // suprimer le contenue de la table 

		for (var i=0;i<TodoListe_Tab.length;i++)
			{
				
		// Cr�er les lignes dans la table pour chaque tache

		$('table').append('<tr>' + '<td>'+ TodoListe_Tab[i].titre +'</td>'
				         + '<td>'+ TodoListe_Tab[i].date +'</td>'
				         + '<td>'+ TodoListe_Tab[i].desc +'</td>'
				         + '<td>'+ TodoListe_Tab[i].etat +'</td>'
				  				  
				  + '</tr>');
		
			}
	
	 

		
		
$("#formulaire").reset();// R�initialiser le formulaire avec Jquery

    });

});



















