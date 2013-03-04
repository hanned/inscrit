
/*
 * Editor client script for DB table inscrit
 * Automatically generated by http://editor.datatables.net/generator
 */

(function($){

var oTable;
 
/* Formating function for row details */
function fnFormatDetails ( nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<div class="container-fluid">';
        sOut += '<div class="row-fluid">';
        sOut += '    <div class="span6">';
	sOut += '       <ul>';
        sOut += '        <li>Adresse : '+aData.adresse+'</li>';
        sOut += '        <li>Date de naissance : '+aData.dt_naissance+' </li>';
        sOut += '        <li>Implication: '+aData.implication+'</li>';
        sOut += '       </ul>';
        sOut += '    </div>';
        sOut += '    <div class="span4">';
	sOut += '       <ul>';
        sOut += '          <li>Tél : '+aData.tel+'</li>';
        sOut += '          <li>Ancienne école : '+aData.ecole_prec+'</li>';
	sOut += '          <li>Date de Rdv : '+aData.dt_rdv+'</li>';
        sOut += '       </ul>';
        sOut += '    </div>';
        sOut += '    <div class="span4">';
	sOut += '       <ul>';
        sOut += '          <li>Email : '+aData.email+'</li>';
	sOut += '          <li>Fraterie : '+aData.fraterie+'</li>';
	sOut += '          <li>Inscription multiple : '+aData.multi_inscrit+'</li>';
	sOut += '       </ul>';
        sOut += '    </div>';
        sOut += '</div>';
       sOut += '</div>';         
    return sOut;
}

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajaxUrl": "php/table.inscrit.php",
		"domTable": "#inscrit",
		"fields": [
			{
				"label": "Famille",
				"name": "famille",
				"type": "text"
			},
			{
				"label": "Pr\u00e9nom",
				"name": "prenom",
				"type": "text"
			},
			{
				"label": "Date de naissance",
				"name": "dt_naissance",
				"type": "date",
				"dateFormat": "yy-mm-dd",
				"dateImage": "../images/calender.png"
			},
			{
				"label": "Adresse",
				"name": "adresse",
				"type": "text"
			},
			{
				"label": "Cp",
				"name": "cp",
				"type": "text"
			},
			{
				"label": "T\u00e9l",
				"name": "tel",
				"type": "text"
			},
			{
				"label": "Email",
				"name": "email",
				"type": "text"
			},
			{
				"label": "Ecole pr\u00e9c\u00e9dente",
				"name": "ecole_prec",
				"default": "Aucune",
				"type": "select",
				"ipOpts": [
					{
						"label": "Aucune",
						"value": "Aucune"
					},
					{
						"label": "Hanned",
						"value": "Hanned"
					},
					{
						"label": "Autres",
						"value": "Autres"
					}
				]
			},
			{
				"label": "Classe d\u00e9sir\u00e9e",
				"name": "classe_desiree",
				"type": "select",
				"ipOpts": [
					{
						"label": "CP",
						"value": "CP"
					},
					{
						"label": "CE1",
						"value": "CE1"
					},
					{
						"label": "CE2",
						"value": "CE2"
					},
					{
						"label": "CM1",
						"value": "CM1"
					},
					{
						"label": "CM2",
						"value": "CM2"
					}
				]
			},
			{
				"label": "Fratrie",
				"name": "fraterie",
				"default": "Non",
				"type": "select",
				"ipOpts": [
					{
						"label": "Oui",
						"value": "Oui"
					},
					{
						"label": "Non",
						"value": "Non"
					}
				]
			},
			{
				"label": "Implication",
				"name": "implication",
				"default": " - ",
				"type": "select",
				"ipOpts": [
					{
						"label": "INTENSE",
						"value": "INTENSE"
					},
					{
						"label": "MOYEN",
						"value": "MOYEN"
					},
					{
						"label": "FAIBLE",
						"value": "FAIBLE"
					},
					{
						"label": " - ",
						"value": " - "
					}
				]
			},
			{
				"label": "Inscriptions multiple",
				"name": "multi_inscrit",
				"type": "text"
			},
			{
				"label": "Date de Rdv",
				"name": "dt_rdv",
				"type": "date",
				"dateFormat": "yy-mm-dd",
				"dateImage": "../images/calender.png"
			},
			{
				"label": "Heure du Rdv",
				"name": "hr_rdv",
				"type": "text"
			},
			{
				"label": "Evaluation",
				"name": "eval",
				"default":"0",
				"type": "text"
			},
			{
				"label": "Statut de l'inscription",
				"name": "statut",
				"default": "EN ATTENTE",
				"type": "select",
				"ipOpts": [
					{
						"label": "EN ATTENTE",
						"value": "EN ATTENTE"
					},
					{
						"label": "ACCEPTEE",
						"value": "ACCEPTEE"
					},
					{
						"label": "REFUSEE",
						"value": "REFUSEE"
					}
				]
			}
		]
	} );

	oTable = $('#inscrit').dataTable( {
		"iDisplayLength": 25,
		"oLanguage": {
			    "oPaginate": {
				                   "sFirst":    "Premier",
				                   "sPrevious": "Précédent",
				                   "sNext":     "Suivant",
				                   "sLast":     "Dernier" 
				                  },
			    "sProcessing": "Traitement ...",
			    "sLengthMenu": "Afficher _MENU_ inscriptions par page",
			    "sZeroRecords": "Aucune inscription",
			    "sInfo": "Affichage _START_ à _END_ sur _TOTAL_ inscriptions",
			    "sInfoPostFix": "",
			    "sSearch": "Filtrer:"
        		},
        	"bSortClasses": false,
        	"bStateSave": true,
        	"bAutoWidth": false,	
		"sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
		"sAjaxSource": "php/table.inscrit.php",
		"aoColumns": [
			{ "mData": function ( source, type, val ) {
					return '<img src="images/details_open.png">';
				      }, 
			  "sClass": "center", 
			  "bSortable": false 
			},
			{
				"mData": "famille"
			},
			{
				"mData": "prenom"
			},
			{
				"mData": function ( source, type, val ) {
					var naiss = new Date(source.dt_naissance);
					var today = new Date();
					var age = Math.floor((today-naiss) / (365.25 * 24 * 60 * 60 * 1000));
					return age;
				      }
			},
			{
				"mData": "cp"
			},
			{
				"mData": "classe_desiree"
			},
			{
				"mData": "eval"
			},
			{
				"mData": function ( source, type, val ) {
					var pt = 0;
					if (source.ecole_prec === 'Hanned'){
					   pt = 15000;
					}
					if (source.implication === 'INTENSE'){
					   pt += 15000;					
					} else if (source.implication === 'MOYEN'){
					   pt += 7000;					
					}  else if (source.implication === 'FAIBLE'){
					   pt += 3000;					
					}
					if (source.fraterie === 'Oui'){
					   pt += 1000;					
					}
					pt += Math.abs(source.eval-10)*600; 
					return pt;
				      }
			},
			{
				"mData": "statut"
			}
		],
		"oTableTools": {
			"sRowSelect": "single",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor, "sButtonText": "Nouvelle inscription", "sButtonClass": "btn-large" },
				{ "sExtends": "editor_edit",   "editor": editor, "sButtonText": "Modifier inscription", "sButtonClass": "btn-large"  },
				{ "sExtends": "editor_remove", "editor": editor, "sButtonText": "Supprimer inscription", "sButtonClass": "btn-large"  },
				{ "sExtends": "print", "sButtonText": "Imprimer", "sButtonClass": "btn-large"  }
			]
		}
	} );
	$('.classe_desiree').click( function () {
			var param = $(this).text();				
			if(param === 'Tous'){
				param = '';
			}			
			oTable.fnFilter(param, 5);
			$("#classes li").removeClass("active");
			$(this).parent().addClass('active');
		} );
	$('#inscrit tbody td img').live( 'click', function () {
        	var nTr = $(this).parents('tr')[0];
        	if ( oTable.fnIsOpen(nTr) )
        	{
            		/* This row is already open - close it */
            		this.src = "images/details_open.png";
            		oTable.fnClose( nTr );
        	}
        	else
        	{
            	/* Open this row */
            	this.src = "images/details_close.png";
            	oTable.fnOpen( nTr, fnFormatDetails(nTr), 'details' );
        	}
    } );
} );

}(jQuery));

