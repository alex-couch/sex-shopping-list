<?php
	require 'header.php';
?>
<script type="text/javascript" src="shoplist.js"></script>
	<div class="container ">
		<div class="shoplist">
			<h1 class="shop-header">Meat</h1>
			<ul>
				<li class="list-body">Steak</li><br>
				<li class="list-body">Chicken</li><br>
				<li class="list-body">Eggs</li><br>
				<li class="list-body">Hamburger</li><br>
			</ul>
			<form class="itemAdd" action="shoplist.js" method="post">
				<label>Add Meat</label>
				<input type="text" name="item" class="addItem"  />
				<button type="button" name="submit" onclick="addItems('.additem');">Submit</button>
			</form>
			<h1 class="shop-header">Beverages</h1>
			<ul>
				<li class="list-body">Milk</li><br>
				<li class="list-body">Soda</li><br>
				<li class="list-body">Water Enhancer</li><br>
				<li class="list-body">Apple Juice</li><br>
			</ul>
			<form action="shoplist.php" method="get">
				<label>Add Beverages</label>
				<input type="text" name="item" />
				<input type="submit" name="submit" />
			</form>
			<h1 class="shop-header">Snacks</h1>
			<ul>
				<li class="list-body">Chips</li><br>
				<li class="list-body">Fruit Snacks</li><br>
				<li class="list-body">Bread</li><br>
			</ul>
			<form action="shoplist.js" method="get">
				<label>Add Snacks</label>
				<input type="text" name="item" />
				<input type="submit" name="submit" />
			</form>
			<h1 class="shop-header">Fruits and Vegetables</h1>
			<ul>
				<li class="list-body">Grapes</li><br>
				<li class="list-body">Apples</li><br>
				<li class="list-body">Corn</li><br>
				<li class="list-body">Peas</li><br>
			</ul>
			<form action="shoplist.js" method="get">
				<label>Add F&V</label>
				<input type="text" name="item" />
				<input type="submit" name="submit" />
			</form>
		</div>
	</div>
<?php
	require 'footer.php';
?>
