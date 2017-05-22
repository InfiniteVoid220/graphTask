
function graphDrawing(){
    
    var graphPlane = document.getElementById("graph-plane");

    function drawAnimation(lineGraph,style){
        var length = lineGraph.getTotalLength();

        lineGraph.style.strokeDasharray = length;
        lineGraph.style.strokeDashoffset = length;
        
        lineGraph.getBoundingClientRect();

        lineGraph.style.transition = lineGraph.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';

        lineGraph.style.strokeDashoffset = '0';

        if(style == "dashed") {
            setTimeout(function(){
                lineGraph.style.strokeDasharray = 15;
            }, 1800);
        }
    }

    function drawGraph(dataJSON,id,color,style){
        var d="M";

        for(key in dataJSON){
          d += dataJSON[key].x + " " + dataJSON[key].y + " ";
        }
        var lineGraph=document.getElementById(id);

        lineGraph.setAttribute('d', d);
        lineGraph.setAttribute('stroke', color);

        drawAnimation(lineGraph,style);
    }

    httpGetAsync('graph.json', function(data){
        var graphsData = JSON.parse(data);

        drawGraph(graphsData.monotherapy,"monotherapy","#3d4242");

        setTimeout(function(){
            drawGraph(graphsData.allXel,"allXel" ,"#8d9c9b");
        }, 4000);

        setTimeout(function(){
            drawGraph(graphsData.allXelAnz,"allXelAnz", "#e90649","dashed");
        }, 6000);

        setTimeout(function(){
            drawGraph(graphsData.xelAnz,"xelAnz" ,"#e90649");
        }, 8000);
        
    });
}
graphDrawing();