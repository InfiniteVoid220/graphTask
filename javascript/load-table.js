
function loadTableFromJSON(){

    function loadTable(tableDataJSON){
    	var tableHTML = "";
        for (var i=0;i<tableDataJSON.Month.length;i++){
    		tableHTML += "<tr>";
            for (var key in tableDataJSON.Month[i]) {
                tableHTML += "<td>";
            	if(key == "image"){
        			tableHTML += "<img src='images/"+tableDataJSON.Month[i][key] +"'>";
        		}else{
                    tableHTML += tableDataJSON.Month[i][key];
                }
                tableHTML += "</td>";

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
loadTableFromJSON();