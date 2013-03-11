(function($){

var oTable;
 
/* Formating function for row details */
function fnFormatDetails ( nTr )
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<div class="container-fluid">';
        sOut += '<div class="row-fluid">';
        sOut += '    <div class="span4">';
	sOut += '       <ul>';
        sOut += '        <li>Adresse : '+aData.adresse+'</li>';
        sOut += '        <li>Date de naissance : '+aData.dt_naissance+' </li>';
	sOut += '        <li>Inscription multiple : '+aData.multi_inscrit+'</li>';
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
	sOut += '       </ul>';
        sOut += '    </div>';
        sOut += '</div>';
    if(aData.comment != null && aData.comment != ""){    
        sOut += '<div class="row-fluid">';
        sOut += '  <dl class="dl-horizontal"><dt>Commentaires : </dt><dd>'+aData.comment+'</dd></dl>'
        sOut += '</div>';
    }    
       sOut += '</div>';         
    return sOut;
}

$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iMin = document.getElementById('dt_min').value;
		var dtMin = new Date(iMin);
		var iMax = document.getElementById('dt_max').value;
		var dtMax = new Date(iMax);
		var rdv = new Date(aData[6]);
		if ( iMin == "" && iMax == "" )
		{
			return true;
		}
		else if ( iMin == "" && rdv <= dtMax )
		{
			return true;
		}
		else if ( dtMin <= rdv && "" == iMax )
		{
			return true;
		}
		else if ( dtMin <= rdv && rdv <= dtMax )
		{
			return true;
		}
		return false;
	}
);

$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iMin = document.getElementById('dt_saisie_min').value;
		var dtMin = new Date(iMin);
		var iMax = document.getElementById('dt_saisie_max').value;
		var dtMax = new Date(iMax);
		var rdv = new Date(aData[9]);
		if ( iMin == "" && iMax == "" )
		{
			return true;
		}
		else if ( iMin == "" && rdv <= dtMax )
		{
			return true;
		}
		else if ( dtMin <= rdv && "" == iMax )
		{
			return true;
		}
		else if ( dtMin <= rdv && rdv <= dtMax )
		{
			return true;
		}
		return false;
	}
);

var classFilter = "";

$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
      if ( classFilter === "" ) {
        // No class filter applied, so all rows pass
        return true;
      }
      var cls = getRowClass(aData[6],aData[8]);
      if (classFilter == cls) {
        // TR element has matching class - pass
        return true;
      }
      // No matching class on the row - failed filtering criterion
      return false;
    }
);

$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iMin = document.getElementById('eval_min').value * 1;
		var iMax = document.getElementById('eval_max').value * 1;
		var ieval = aData[8] == "-" ? 0 : aData[8]*1;
		if ( iMin == "" && iMax == "" )
		{
			return true;
		}
		else if ( iMin == "" && ieval < iMax )
		{
			return true;
		}
		else if ( iMin < ieval && "" == iMax )
		{
			return true;
		}
		else if ( iMin < ieval && ieval < iMax )
		{
			return true;
		}
		return false;
	}
);

$.fn.dataTableExt.oApi.fnGetColumnData = function ( oSettings, iColumn, bUnique, bFiltered, bIgnoreEmpty ) {
    // check that we have a column id
    if ( typeof iColumn == "undefined" ) return new Array();
     
    // by default we only want unique data
    if ( typeof bUnique == "undefined" ) bUnique = true;
     
    // by default we do want to only look at filtered data
    if ( typeof bFiltered == "undefined" ) bFiltered = true;
     
    // by default we do not want to include empty values
    if ( typeof bIgnoreEmpty == "undefined" ) bIgnoreEmpty = true;
    
    // list of rows which we're going to loop through
    var aiRows;
     
    // use only filtered rows
    if (bFiltered == true) aiRows = oSettings.aiDisplay;
    // use all rows
    else aiRows = oSettings.aiDisplayMaster; // all row numbers
 
    // set up data array   
    var asResultData = new Array();
     
    for (var i=0,c=aiRows.length; i<c; i++) {
        iRow = aiRows[i];
        var aData = this.fnGetData(iRow);
        var sValue = "";
        if(iColumn == 1){
        	sValue = aData.famille;
        } else if (iColumn == 4){
        	sValue = aData.cp;
        }        
         
        // ignore empty values?
        if (bIgnoreEmpty == true && sValue.length == 0) continue;
 
 	// ignore unique values?
        else if (bUnique == true && jQuery.inArray(sValue, asResultData) > -1) continue;
         
        // else push the value onto the result data array
        else asResultData.push(sValue);
    }
     
    return asResultData;
}
 
 
function fnCreateSelect( aData )
{
    var r='<option value=""></option>', i, iLen=aData.length;
    for ( i=0 ; i<iLen ; i++ )
    {
        r += '<option value="'+aData[i]+'">'+aData[i]+'</option>';
    }
    return r;
}

function getRowClass(dt_rdv, eval) {
	var className = "";
	var rdv = new Date(dt_rdv);
	var today = new Date();
	var delta = Math.floor((today - rdv) / (60 * 60 * 1000));
	if(isNaN(delta) || dt_rdv === null){
		className = "warning";
	}
	if (delta > 0 && eval != "0.00")
	{
		className = "success";
	}
	if (delta > 23 && eval === "0.00")
	{
		className = "error";
	}
	if (delta > 0 && delta < 24)
	{
		className = "info";
	}
	return className;
}

$(document).ready(function() {
	
	var editor = new $.fn.dataTable.Editor( {
		"ajaxUrl": "php/table.inscrit_brid.php",
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
				"label": "Commentaires",
				"name": "comment",
				"type": "textarea"
			}
		],
        "i18n": {
            "create": {
                "button": "Nouveau",
                "title":  "Créer nouvelle inscription",
                "submit": "Ajouter"
            },
            "edit": {
                "button": "Modifier",
                "title":  "Modifier inscription",
                "submit": "Actualiser"
            },
            "error": {
                "system": "Une erreur s’est produite, contacter l’administrateur système"
            }
        }
	} );
	
	oTable = $('#inscrit').dataTable( {
		"iDisplayLength": 15,
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
        	"bAutoWidth": false,
        	"bServerSide": false,	
		"sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
		"sAjaxSource": "php/table.inscrit.php",
		"aaSorting": [[ 1, "asc" ]],
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
				"mData": "dt_rdv"
			},
			{
				"mData": "hr_rdv"
			},
			{
				"mData": "eval"
			},
			{
				"mData": "dt_saisie"
			},
			{
				"mData": "ecole_prec",
				"bVisible":    false
			}
		],
		"oTableTools": {
			"sRowSelect": "single",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor, "sButtonText": "Nouvelle inscription", "sButtonClass": "btn-large textb" },
				{ "sExtends": "editor_edit",   "editor": editor, "sButtonText": "Modifier inscription", "sButtonClass": "btn-large textb"  },
				{ "sExtends": "print", "sButtonText": "Imprimer", "sButtonClass": "btn-large"  }
			]
		},
		"fnRowCallback": function( nRow, aData, iDisplayIndex ) {
			nRow.className = getRowClass(aData.dt_rdv, aData.eval);
			return nRow;
		},
		"fnInitComplete": function(oSettings, json) {
		     var selectF = fnCreateSelect( oTable.fnGetColumnData(1) );
		     $("#select_famille").html(selectF);
		     var selectV = fnCreateSelect( oTable.fnGetColumnData(4) );
		     $("#select_ville").html(selectV);
		}
	} );
	$(".classe_desiree").live('click', function () {
			var param = $(this).text();				
			if(param === 'Toutes'){
				param = '';
			}			
			oTable.fnFilter(param, 5);
			$(".classe_desiree").removeClass('active');
			$(this).addClass('active');
		} );
	$(".ecole_prec").live('click', function () {
		var param = $(this).val();				
		oTable.fnFilter(param, 10);
	} );
	$(".control-group .DTE_Field_Type_select .DTE_Field_Name_implication ").hide();
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
	$('#select_famille').change( function () {
		var param = $(this).val();				
		oTable.fnFilter(param, 1);
	} );
	
	$('#select_ville').change( function () {
		var param = $(this).val();				
		oTable.fnFilter(param, 4);
	} );
	
	$('#dt_min').change( function() { oTable.fnDraw(); } );
	$('#dt_max').change( function() { oTable.fnDraw(); } );
	
	$('#dt_saisie_min').change( function() { oTable.fnDraw(); } );
	$('#dt_saisie_max').change( function() { oTable.fnDraw(); } );
	
	$('#eval_min').keyup( function() { oTable.fnDraw(); } );
	$('#eval_max').keyup( function() { oTable.fnDraw(); } );
	
	$('#classFilter').change( function () {
	    // Store the filter value
	    classFilter = $(this).val();
	    
	    // A full draw will refilter the table
	    oTable.fnDraw();
	  } );   
        
} );

}(jQuery));

