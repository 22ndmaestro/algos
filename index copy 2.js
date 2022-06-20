//Instantiate global varables:
var canvas;
var ctx;
var rectLists;
var x = 0;
var z = 0;

//setup canvas
window.addEventListener("load", () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    
    var rects = new rectangle();
    var input = [10, 7,7,5,6,3,4,1,2];
    rectLists = insertionSort(input);
    canvas.height = Math.max.apply(null, input)*20+20;
    canvas.width = input.length*40;
    animation();
    
});




function insertionSort(arr){
    
    let rectList = [];

    for (let i = 0; i < arr.length; i++){

        for (let k = i; k > 0; k--)
        {

            kminus = k -1;

            if (arr[k] < arr[kminus])
            {
                var temp = arr[kminus];
                arr[kminus] = arr[k];
                arr[k] = temp;
            };
            rectList.push(arr.slice());
        };
        //
    }

    return rectList;

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  function ee(){
    for (let i = 0; i < arry.length; i++){
        this.draw(arry,i);

        setTimeout(()=> {
            //console.log(i);
            this.draw(arry,i);
            
        }, 50);
        
        setTimeout(()=> {
            //console.log(i);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            
        }, 5000);
        
        
    }
  }

  function animation(){
    requestAnimationFrame(animation);
    //const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    /*
    arry.forEach(async (item) => {
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
        this.draw(item);
        await sleep(5000);
        
    });
    */
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    draw(rectLists[x]);
    z+=1
    if (z> 50) {
        x+=1;
        z = 0;
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    }
    if (x>=rectLists.length) {
        x = 0;
    }
  }

  function draw(arry){
    var cur = arry; //[pos];
    var distance = 10;
    var stDistance = 10;
    var width = 20;

    cur.forEach( (height, dex) => {
        ctx.fillRect(distance, stDistance, width,height*20);
        distance += width + 10;
    });
}