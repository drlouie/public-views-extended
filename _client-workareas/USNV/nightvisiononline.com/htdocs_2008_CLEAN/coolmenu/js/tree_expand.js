var TREE1_NODES = [
	['Re-Assign Leads', null, null,
		['Active Associates', null, null,],
		['Ex-Associates', null, null,],
	],
	['Menu Customization', null, "TopRightScreen",
    	['INTERnet Linker (web)', null,"TopRightScreen"],
		['INTRAnet Linker (ALG)', null, null],
		['My Folders', null, null,
       		['Add Folder', null, null],
   	      	['Delete Folder', null, null],
          	['Maintain Folders', null, null],
	    ],
    ],
	['Analytical Overview', null , null,
        ['Chart Drafter', null, null],
        ['Report Generator', null, null],
        ['Audit Lead Statuses ', null, null],
    ],
	['Lead Management', null, null,
        ['Designator', null, null],
        ['Status Auditor', null, null],
        ['Historic Views', null, null],
    ],
	['Data Mngmnt (AMCCS)', null, null,
		['Leads', null, null, 
       		['Import New', "importNewLeads.htm?ImportType=NewLeads", "TopRightScreen"],
			['[e]xport Options', null, null, 
       			['[e] by Query', "exportLeads.htm?q=1", "TopRightScreen"],
       			['[e] Amerior', "exportLeads.htm?p=77777771", "TopRightScreen"],
       			['[e] Some Partner', "exportLeads.htm?p=77777772", "TopRightScreen"],
			],
		],
		['DNC', null, null, 
       		['Federal Import', "importNewLeads.htm?ImportType=FederalDNC", "TopRightScreen"],
       		['State Import', "importNewLeads.htm?ImportType=StateDNC", "TopRightScreen"],
		],
        ['Quick View', "importExport.htm", "TopRightScreen"],
	],
	['Data Mngmnt (Americor)', null, null,
		['Leads', null, null, 
       		['Import New', "importLeads.htm?ImportType=NewLeads", "TopRightScreen"],
       		['Database Report', "databaseReport.htm", "TopRightScreen"],
		],
	],

	['Jeremy\\'s Links', null, "TopRightScreen",
        ['Call 10a Monday', "importNewLeads.htm?ImportType=FederalDNC", "TopRightScreen"],
        ['Call 9a Tuesday', "importNewLeads.htm?ImportType=StateDNC", "TopRightScreen"],
	],
	
	
	['Associate Roster', null, null,
		['Executives', null, null,
        	['Steve McIlwain', "#", null],
            ['Jeremy Foti', "#", null],
            ['Jacque Jensen', "#", null],
        ],
		['Managers', null, null,
        	['Tom Londo', "#", null],
            ['James Foti', "#", null],
        ],
        ['Loan Processing', null, null,
        	['Josie Lobo', "#", null],
        ],
		['Loan Officers', null, null,
        	['Chris Spence', "", null],
            ['Jenifer Rhomberg', "#", null],
            ['Kenneth Ornelas', "#", null],
   			['Leslie Barwick', "", null],
		],
        ['Loan Floor', null, null,
        	['Carolyn Vaughn', "", null],
            ['Chris Spence', "", null],
		],
        ['By Team', null, null,
        	['Carmona/Vaughn', "", null,
            	['Leslie Barwick', "", null],
			],
            ['Ben Lee', "", null,
            	['Chris Spence', "", null],
                ['Jenifer Rhomberg', "", null],
			],
            ['Chris Bravo', "", null],
            ['Tyler Kramer', "", null],
		],
        ['Administrators', null, null,
        	['Luis Rodriguez', "", null],
            ['Mallory Daigeu', "", null],
            ['Skip Proccer', "", null],
		],
    ],

	
	['Team Management', null, null,
		['Modify Teams', "", null],
        ['The Leaders', "", null],
        ['The Players', "", null],
    ],


];


var tree1 = new COOLjsTree("LeadAssignee", TREE1_NODES, TREE1_FORMAT);

~;

}

exit;