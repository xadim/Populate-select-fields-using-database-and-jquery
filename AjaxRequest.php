<?php
/*
 * Plugin Name: Select with Database
 * Plugin URI: http://www.sayfdev.com/
 * Description: A simple way to populate select fields using jquery and database
 * Author: Khadime Diakhate
 * Author URI: http://www.sayfdev.com
 * Version: 1.0
 *
 * Copyright: (c) 2014 Sayfdev, LLC. (contact@sayfdev.com)
 *
 * License: GNU General Public License v3.0
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @author    Xadim
 * @category  Custom
 * @copyright Copyright (c) 2014, SayfDEV, LLC.
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License v3.0
*/

//connect
	try {
		$connexion = new PDO('mysql:host=localhost;dbname=populatefields', 'root', '');
	}
	catch (PDOExceptioN $e)
	{
		echo "error".$e->getMessage();
	} 
//End connexion
			//This select is for the first field to populate
			if (isset($_GET['Country'])){
					?>
					<select name="State" onchange="htmlData4('AjaxRequest.php', 'State='+this.value)">
					<?php
							
					$query = ("SELECT id_state,stateName FROM states WHERE country_id='".$_GET["Country"]."'");
					$sql = $connexion->query($query);	 
						echo '<option selected="selected" value="nochoice">Choose the state</option>';
						 while($row = $sql -> fetch()) {
						?>
						<option value="<?php echo $row['id_state'];?>"><?php echo $row['stateName'];?></option>
						<?php
						}
					echo "</select>";
			}

			//End, first field populated
			//This select is for the second field to populate
			if (isset($_GET['State'])){
					?>
					<select name="City">
					<?php
					$query = ("SELECT id_city,cityName FROM cities WHERE id_state='".$_GET["State"]."'");
					$sql = $connexion->query($query);
					echo '<option selected="selected" value="nochoice">Choose the City</option>';
						while($row = $sql -> fetch()) {
						?>
						<option value="<?php echo $row['id_city'];?>"><?php echo $row['cityName'];?></option>
						<?php
						}
					echo "</select>";
			}
			//End, second field to populated
