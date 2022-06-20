var canvas;
var ctx;

//setup canvas
window.addEventListener("load", () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    var size;
    window.innerHeight > window.innerWidth ? (size = window.innerWidth) : (size = window.innerHeight)
    canvas.height = size;// - 150;
    canvas.width = size;// - 150;

    
    insertionSort([5,6,3,4,1,2]);
    


    
});


window.addEventListener("resize", () => {
    var size;
    window.innerHeight > window.innerWidth ? (size = window.innerWidth) : (size = window.innerHeight)
    canvas.height = size;// - 150;
    canvas.width = size;// - 150;

    //preview.width = size*0.70;
}); //setcanvas dimensions

class rectangle {
    constructor(arr) {
        this.arry = arr;
        this.size = arr.length;
        this.innerArray = [];
        this.pos = 0;

    }
    
    drawBar(distance, stDistance, width,height){
        ctx.fillRect(distance, stDistance, width,height);
    }

    draw(pos, current=null,comp1=null, comp2=null){
        var cur = this.innerArray[pos];
        var distance = 10;
        var stDistance = 10;
        var width = 20;
        for (let i = 0; i < cur.length; i++) {
            var height = 20*cur[i];
            this.drawBar(distance, stDistance, width,height);
            distance += width + 10;
            
            //
        }
        //
    }
    update(arr){
        this.innerArray.push(arr);
    }
    animation(){
        for (let i = 0; i < this.innerArray.length; i++){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let k = 0; k < 3; k++){
                
                this.draw(i);
                
            };
            console.log(i);
        //this.pos +=1;
        }
        
        
      }
    
}

function insertionSort(arr){
    var arrr = new rectangle(arr);
    for (let i = 0; i < arr.length; i++){
        for (let k = i; k > 0; k--){
            kminus = k -1;
            if(arr[k] < arr[kminus]){

                var temp = arr[kminus];
                arr[kminus] = arr[k];
                arr[k] = temp;

            }
            arrr.update(arr)

        }
        //
    }

    arrr.animation();

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }