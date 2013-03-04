<?php

include('lock.php');

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		
		<title>Hanned Inscription 2013-2014</title>

		<style type="text/css">
			@import "support/bootstrap/css/bootstrap.css";
			@import "support/bootstrap/dataTables/dataTables.bootstrap.css";
			@import "css/jquery-ui-1.8.20.custom.css";
		</style>

		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery-ui-1.8.20.custom.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery-ui-timepicker-addon.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/jquery.dataTables.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/dataTables.tabletools.min.js"></script>
		<script type="text/javascript" language="javascript" charset="utf-8" src="js/dataTables.editor.min.js"></script>
		
		<?php
		if ($_SESSION['login_user'] == "admin") {
  			echo "<script type=\"text/javascript\" language=\"javascript\" charset=\"utf-8\" src=\"js/table.inscrit.js\"></script>";
		} else {
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
 <div class="container" width="100%;">

      <div class="masthead">
        <h3 class="muted">Inscriptions
	<div class="navbar-form pull-right">
              <button class="btn"><a href="logout.php">Déconnexion</a></button>
        </div>
	</h3>
        <div class="navbar" id="classes">
          <div class="navbar-inner">
            <div class="container">
              <ul class="nav">
                <li class="active"><a href="#" class="classe_desiree">Tous</a></li>
                <li><a href="#" class="classe_desiree">CP</a></li>
                <li><a href="#" class="classe_desiree">CE1</a></li>
                <li><a href="#" class="classe_desiree">CE2</a></li>
                <li><a href="#" class="classe_desiree">CM1</a></li>
                <li><a href="#" class="classe_desiree">CM2</a></li>
              </ul>
            </div>
          </div>
        </div><!-- /.navbar -->
      </div>

     <hr>

      <!-- Example row of columns -->
      <div class="row-fluid">
       <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="inscrit" width="100%">
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
							echo "<th>Statut</th>";						  			
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
						}
						?>
						
					</tr>
				</thead>
			</table>
      </div>

      <hr>

      <div class="footer">
        <p>&copy; Hanned 2013</p>
      </div>

    </div> <!-- /container --> 	   
</body>
</html>
