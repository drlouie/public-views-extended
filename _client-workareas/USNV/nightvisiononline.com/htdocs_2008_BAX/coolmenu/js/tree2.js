// Tree format definition
var TREE2_FORMAT = [
	//  0. left position
	0,
	//  1. top position
	0,
	//  2. show buttons ("+" and "-" images)
	false,
	//  3. button images: collapsed state, expanded state, blank image
	["", "", "images/blank.gif"],
	//  4. size of buttons: width, height, indent amount for childless nodes
	[0, 0, 0],
	//  5. show icons ("folder" and "document")
	true,
	//  6. icon images: closed folder, opened folder, document
	[
		[ "images/lvl_0_left.gif", "images/lvl_0_left_o.gif" ],
		[ "images/lvl_0_left.gif", "images/lvl_0_left_o.gif" ],
		[ "images/lvl_0_left.gif", "images/lvl_0_left_o.gif" ]
	],
	//  7. size of icons: width, height
	[2, 18],
	//  8. indent amount for each level of the tree
	[0],
	//  9. background color for the tree
	"",
	// 10. default CSS class for nodes
	"treeNodeSpec0",
	// 11. individual CSS classes for levels of the tree
	["treeNodeSpec0", "treeNodeSpec1"],
	// 12. "single branch" mode
	true,
	// 13. padding and spacing values for all nodes
	[0, 0],
	// 14. "explorer-like" mode
	false,
	// 15. images for "explorer-like" mode
	[],
	// 16. size of images for "explorer-like" mode: width, height
	[19, 16],
	// 17. store tree state into cookies
	false,
	// 18. relative positioning mode
	true,
	// 19. initial space for the relatively positioned tree: width, height
	[200, 50],
	// 20. resize container of the relatively positioned tree
	true,
	// 21. change background-color and style for selected node
	false,
	// 22. background color for unselected node, background color for selected node, class for selected node
	["", "", ""],
	// 23. text wrapping margin
	150,
	// 24. vertical alignment for buttons and icons
	"middle"
];

var fmt = {format:{folders:["images/lvl_1_left.gif", "images/lvl_1_left.gif", "images/lvl_1_left.gif"]}};

// Tree structure definition
var TREE2_NODES = [
	["Sed Ut Perspiciatis", null, null, {format:{expanded:true}},
		["Accusantium Dolorem", null, null, fmt],
		["Laudantium, Totam", null, null, fmt],
		["Aperiam Eaque", null, null, fmt],
		["Ipsa", null, null, fmt],
		["Quae Ab", null, null, fmt]
	],
	["Unde Omnis Iste", null, null,
		["Illo Inventore", null, null, fmt],
		["Veritatis Et Quasi", null, null, fmt],
		["Architecto Beatae", null, null, fmt]
	],
	["Natus Error", null, null,
		["Vitae Dicta Sunt", null, null, fmt],
		["Explicabo", null, null, fmt],
		["Nemo Enim", null, null, fmt],
		["Ipsam Voluptatem", null, null, fmt],
		["Quia Voluptas Sit", null, null, fmt]
	],
	["Sit Voluptatem", null, null,
		["Aspernatur Aut", null, null, fmt],
		["Odit Aut", null, null, fmt],
		["Fugit", null, null, fmt],
		["Quia Consequuntur", null, null, fmt]
	]
];

with (new COOLjsTreePRO("tree2", TREE2_NODES, TREE2_FORMAT))
{
	init();
}