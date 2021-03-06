<?php
/*
 * Editor server script for DB table inscrit
 * Automatically generated by http://editor.datatables.net/generator
 */

// DataTables PHP library
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use DataTables\Editor;
use DataTables\Editor\Field;
use DataTables\Editor\Format;
use DataTables\Editor\Join;
use DataTables\Editor\Validate;


// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'inscrit' )
	->fields(
		Field::inst( 'famille' )
			->validator( 'Validate::required' ),
		Field::inst( 'prenom' )
			->validator( 'Validate::required' ),
		Field::inst( 'dt_naissance' ),
		Field::inst( 'adresse' )
			->validator( 'Validate::required' ),
		Field::inst( 'cp' )
			->validator( 'Validate::required' ),
		Field::inst( 'tel' )
			->validator( 'Validate::required' ),
		Field::inst( 'email' )
			->validator( 'Validate::email_required' ),
		Field::inst( 'ecole_prec' )
			->validator( 'Validate::required' ),
		Field::inst( 'classe_desiree' )
			->validator( 'Validate::required' ),
		Field::inst( 'fraterie' )
			->validator( 'Validate::required' ),
		Field::inst( 'implication' ),
		Field::inst( 'multi_inscrit' ),
		Field::inst( 'dt_rdv' ),
		Field::inst( 'hr_rdv' ),
		Field::inst( 'eval' ),
		Field::inst( 'points' ),
		Field::inst( 'statut' ),
		Field::inst( 'dt_saisie' ),
		Field::inst( 'comment' )
	)
	->process( $_POST )
	->json();

