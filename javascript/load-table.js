function loadTableFromJSON(){
    function loadTable(tableDataJSON){
    	var tableHTML = "";
        for (var i=0;i<tableDataJSON.Month.length;i++){
    		tableHTML += "<tr>";
            for (var key in tableDataJSON.Month[i]) {
            	if(key == "image"){
        			tableHTML += "<td><img src='list-bullets-images/"+tableDataJSON.Month[i][key] +"'></td>";
        			continue;
        		}
                tableHTML += "<td>" + tableDataJSON.Month[i][key] + "</td>";
            }
            tableHTML += "</tr>";
        }
        document.getElementById("month").getElementsByTagName("tbody")[0].innerHTML=tableHTML;
    }

    window.addEventListener('load', function(){
        httpGetAsync('table.json', function(data){
            loadTable(JSON.parse(data));
        });
    });
}
var tableLoadHendler = new loadTableFromJSON();