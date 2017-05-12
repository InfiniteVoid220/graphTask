
function graphDrawing(){
    
    var graphPlane;

    initPlane(); 

    function initPlane(){
        var canvas = document.getElementById("graph-plane");
       
        canvas.width=canvas.getBoundingClientRect().width; //без этого координаты не совпадают 
        canvas.height=canvas.getBoundingClientRect().height;// с размером полотна

        graphPlane = canvas.getContext("2d");

        //переносим точку начала в нижний левый угол
        graphPlane.translate(0, canvas.getBoundingClientRect().height);
        graphPlane.scale(1, -1); //інвертируем координати по оси Y
    }

    function setLineStyle(color,style){
        graphPlane.lineJoin = "round";
        graphPlane.strokeStyle=color;
        graphPlane.lineWidth=1.5;

        if(style == "dashed") graphPlane.setLineDash([10,3]);
        else graphPlane.setLineDash([]);
    }

    function drawGraph(dataJSON,color,style){
        setLineStyle(color,style);

        graphPlane.beginPath();
        graphPlane.moveTo(dataJSON.start.x, dataJSON.start.y);

        for(key in dataJSON){
           if(key == "start") continue;
           graphPlane.lineTo(dataJSON[key].x,dataJSON[key].y);
        }

        graphPlane.stroke();
    }

    httpGetAsync('graph.json', function(data){
        var graphsData = JSON.parse(data);
        
        drawGraph(graphsData.allXel,"#8d9c9b");
        drawGraph(graphsData.allXelAnz,"#e90649","dashed");
        drawGraph(graphsData.monotherapy,"#3d4242");
        drawGraph(graphsData.xelAnz,"#e90649");
    });
}

graphDrawing();