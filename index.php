<?php

include('lock.php');

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		 <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
		 <!--[if lt IE 9]>
		   <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		 <![endif]-->
		<title>Hanned Inscription 2013-2014</title>

		<style type="text/css">
			@import "support/bootstrap/css/bootstrap.css";
			@import "support/bootstrap/css/bootstrap-responsive.css";
			@import "css/bootstrap_date.css";
			@import "support/bootstrap/dataTables/dataTables.bootstrap.css";
			@import "css/jquery-ui-1.8.20.custom.css";
		</style>

		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery-ui-1.8.20.custom.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery-ui-timepicker-addon.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery.dataTables.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/dataTables.tabletools.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/dataTables.editor.min.js"></script>
		
		<?php
		if ($_SESSION['login_user'] == "admin") {
  			echo "<script type=\"text/javascript\" language=\"javascript\" charset=\"utf-8\" src=\"js/table.inscrit.js\"></script>";
		} else if ($_SESSION['login_user'] == "teacher") {
			echo "<script type=\"text/javascript\" language=\"javascript\" charset=\"utf-8\" src=\"js/table.inscrit_teacher.js\"></script>";
		}  else {
			echo "<script type=\"text/javascript\" language=\"javascript\" charset=\"utf-8\" src=\"js/table.inscrit_brid.js\"></script>";
		}
		?>
		<script class="include" type="text/javascript" charset="utf-8" src="support/bootstrap/js/bootstrap.js"></script>
		<script class="include" type="text/javascript" charset="utf-8" src="support/bootstrap/dataTables/dataTables.bootstrap.js"></script>
		<script class="include" type="text/javascript" charset="utf-8" src="support/bootstrap/dataTables/dataTables.editor.bootstrap.js"></script>
 <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 60px;
      }

      /* Custom container */
      .container {
        margin: 0 auto;
        max-width: 1200px;
      }
      .container > hr {
        margin: 60px 0;
      }

      /* Customize the navbar links to be fill the entire space of the .navbar */
      .navbar .navbar-inner {
        padding: 0;
      }
      .navbar .nav {
        margin: 0;
        display: table;
        width: 100%;
      }
      .navbar .nav li {
        display: table-cell;
        width: 1%;
        float: none;
      }
      .navbar .nav li a {
        font-weight: bold;
        text-align: center;
        border-left: 1px solid rgba(255,255,255,.75);
        border-right: 1px solid rgba(0,0,0,.1);
      }
      .navbar .nav li:first-child a {
        border-left: 0;
        border-radius: 3px 0 0 3px;
      }
      .navbar .nav li:last-child a {
        border-right: 0;
        border-radius: 0 3px 3px 0;
      }
      .container {
    	width: auto;
    	margin-left: 200px;
    	margin-right: 200px;
    	max-width:
  }​
  table { table-layout:fixed; }
  td { word-wrap:break-word;}
  th { word-wrap:break-word;}
     </style>
	</head>
	<body>
	<div class="navbar navbar-fixed-top">
	      <div class="navbar-inner">
		<div class="container-fluid">
		  <a class="brand" href="#">HANNED : Gestion des inscriptions</a>
		  <div class="btn-toolbar" data-toggle="buttons-radio" style="text-align:center;">
			      <div class="btn-group">
				<button type="button" class="btn classe_desiree">Toutes</button>
			      </div>
			      <div class="btn-group">
				<button type="button" class="btn btn-primary classe_desiree">CP</button>
			      </div>
			      <div class="btn-group">
				<button type="button" class="btn btn-info classe_desiree">CE1</button>
				<button type="button" class="btn btn-info classe_desiree">CE2</button>
			      </div>
			      <div class="btn-group">
				<button type="button" class="btn btn-success classe_desiree">CM1</button>
				<button type="button" class="btn btn-success classe_desiree">CM2</button>
			      </div>
			      <button type="button" class="btn pull-right"><a href="logout.php" class="navbar-link">Déconnexion</a></button>
		    	</div>  
		</div>
	      </div>
    	</div>
    	<hr>
	<div class="container-fluid">
	      <div class="row-fluid">  
		<div class="span3">
		  <div class="well sidebar-nav" id="classes">
		    <form>
		  	<fieldset>
		  	<legend>Famille</legend>
		      	<select class="span8" id="select_famille">
		      	</select>
		    	<?php if ($_SESSION['login_user'] == "admin") {?>
		       <legend>Statut</legend>
		       <select class="span8" id="statut">
					<option value=""></option>
					<option value="EN ATTENTE">EN ATTENTE</option>
					<option value="ACCEPTEE">ACCEPTEE</option>
					<option value="REFUSEE">REFUSEE</option>
			</select>			 	
                      <?php }?>		       
		      	
                      <?php if ($_SESSION['login_user'] != "admin") {?>
		      <legend>Dates de saisie et Rdv</legend>
		       <label>Saisie entre </label>
		      <input data-datepicker="datepicker"  name="dt_saisie_min" class="input-small" type="text" id="dt_saisie_min"/> < et > <input data-datepicker="datepicker" name="dt_saisie_max" class="input-small" type="text" id="dt_saisie_max"/>
		      <label>Par statut</label>
		      <select class="span8" id="classFilter">
				<option value=""> --- </option>
				<option value="info">Rdv dans les prochains 7 jours</option>
				<option value="warning">Rdv à fixer</option>
				<option value="error">Rdv passé, sans évaluation</option>
				<option value="success">Rdv passé, evaluation faite</option>
		       </select>
		      <label>Rdv entre</label>
		      <input data-datepicker="datepicker"  name="dt_min" class="input-small" type="text" id="dt_min"/> < et > <input data-datepicker="datepicker" name="dt_max" class="input-small" type="text" id="dt_max"/>
		      
		      <?php }?>
		      <?php if ($_SESSION['login_user'] == "admin") {?>
		      <label>Saisie entre </label>
		      <input data-datepicker="datepicker"  name="dt_saisie_min" class="input-small" type="text" id="dt_saisie_min"/> < et > <input data-datepicker="datepicker" name="dt_saisie_max" class="input-small" type="text" id="dt_saisie_max"/>
		     <?php }?>		
		      <legend>Autres critères</legend>
		      <label>Evaluation</label>
		      <input  name="eval_min" class="input-small" type="text" id="eval_min"/> < et > <input name="eval_max" class="input-small" type="text" id="eval_max"/>
		     <?php if ($_SESSION['login_user'] == "admin") {?>
		      <label>Points calculés</label>
		      <input  name="pt_min" class="input-small" type="text" id="pt_min"/> < et > <input name="pt_max" class="input-small" type="text" id="pt_max"/>
		      <label>Implication</label>
		      <select class="span8" id="implication">
					<option value=""></option>
					<option value="INTENSE">INTENSE</option>
					<option value="MOYEN">MOYEN</option>
					<option value="FAIBLE">FAIBLE</option>
					<option value=" - "> NEANT </option>
		      </select>			 	
		     <?php }?>
		     	<legend></legend>		      
		    	</fieldset>
		    </form>
		  </div><!--/.well -->
		</div><!--/span-->
		<div class="span9">
			<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="inscrit" width="100%" style="margin-top:7px;">
				<thead>
					<tr>
						<?php
						if ($_SESSION['login_user'] == "admin") {
							echo "<th></th>";
							echo "<th>Famille</th>";
							echo "<th>Prénom</th>";
							echo "<th>Age</th>";
							echo "<th>Cp</th>";
							echo "<th>Classe</th>";
							echo "<th>Evaluation</th>";
				  			echo "<th>Points</th>";
				  			echo "<th>Implication</th>";
							echo "<th>Statut</th>";
							echo "<th>Saisie le</th>";						  			
						} else {
							echo "<th></th>";
							echo "<th>Famille</th>";
							echo "<th>Prénom</th>";
							echo "<th>Age</th>";
							echo "<th>Cp</th>";
							echo "<th>Classe</th>";
							echo "<th>Rdv</th>";
							echo "<th>Heure</th>";
							echo "<th>Evaluation</th>";
							echo "<th>Saisie le</th>";
						}
						?>
						
					</tr>
				</thead>
				<tfoot>
					<tr>
						<?php
						if ($_SESSION['login_user'] == "admin") {
							echo "<th></th>";
							echo "<th  id=\"famille\">Famille</th>";
							echo "<th>Prénom</th>";
							echo "<th>Age</th>";
							echo "<th>Cp</th>";
							echo "<th>Classe</th>";
							echo "<th>Evaluation</th>";
				  			echo "<th>Points</th>";
				  			echo "<th>Implication</th>";
							echo "<th>Statut</th>";
							echo "<th>Saisie le</th>";						  			
						} else {
							echo "<th></th>";
							echo "<th id=\"famille\">Famille</th>";
							echo "<th>Prénom</th>";
							echo "<th>Age</th>";
							echo "<th>Cp</th>";
							echo "<th>Classe</th>";
							echo "<th>Rdv</th>";
							echo "<th>Heure</th>";
							echo "<th>Evaluation</th>";
							echo "<th>Saisie le</th>";
						}
						?>
						
					</tr>
				</tfoot>
			</table>
		</div><!--/span-->
	      </div><!--/row-->
 
      <hr>

      <div class="footer">
        <p>&copy; Hanned 2013</p>
      </div>
    </div> <!-- /container -->
    <script src="js/bootstrap-datepicker.js"></script>
    <script>
       $.extend($.fn.datepicker.defaults, {
        parse: function (string) {
          var matches;
          if ((matches = string.match(/^(\d{2,2})\/(\d{2,2})\/(\d{4,4})$/))) {
            return new Date(matches[3], matches[1] - 1, matches[2]);
          } else {
            return null;
          }
        },
        format: function (date) {
          var
            month = (date.getMonth() + 1).toString(),
            dom = date.getDate().toString();
          if (month.length === 1) {
            month = "0" + month;
          }
          if (dom.length === 1) {
            dom = "0" + dom;
          }
          return date.getFullYear() + "-" + month +  "-" + dom;
        }
      });  
    </script> 	   
</body>
</html>
