//Instantiate global varables:
var canvas;
var ctx;
var rectLists;
var x = 0;
var z = 0;
var continueAnimating = true;

//setup canvas
window.addEventListener("load", () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
});






function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


  function animation(){
    if(!continueAnimating){return;}

    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    draw(rectLists[x]);
    z+=1
    if (z> 20) {
        x+=1;
        z = 0;
    }
    if (x>=rectLists.length) {
        x = 0;
        continueAnimating = false;
    }

    requestAnimationFrame(animation);
    
  }

  function draw(arry){
    var cur = arry; //[pos];
    var distance = 8;
    var stDistance = 10;
    var width = 10;

    cur.forEach( (height, dex) => {
        ctx.fillStyle = "green";
        ctx.fillRect(distance, stDistance, width,height*20);
        distance += width + 8;
    });
}

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
    rectList.push(arr.slice());
    return rectList;

}

function selectionSort(arr){
    
    let rectList = [];
    var arrlength = arr.length;

    for (let i = 0; i < arrlength; i++){

        for (let k = i+1; k < arrlength; k++)
        {
            if (arr[k] < arr[i])
            {
                var temp = arr[k];
                arr[k] = arr[i];
                arr[i] = temp;
            };
            rectList.push(arr.slice());
        };
        //
    }
    rectList.push(arr.slice());
    return rectList;

}

function heapSort(arr){

    var rectList = [];
    
    function sort( arr)
    {
        var n = arr.length;
  
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
  
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
  
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
  
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
  
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
  
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
  
            // Recursively heapify the affected sub-tree
            rectList.push(arr.slice());
            heapify(arr, n, largest);
        }
    }

    sort(arr)
    rectList.push(arr.slice());
    return rectList;

}


function mergeSorter(arr) {

    var rectList = [];

    function merge(arr, l, m, r)
    {
        var n1 = m - l + 1;
        var n2 = r - m;
    
        //Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);
    
        //Copy data to the temp arrays:
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
    
        // Merge the temp arrays back into arr[l..r]
    
        // Initial index of first subarray
        var i = 0;
    
        // Initial index of second subarray
        var j = 0;
    
        // Initial index of merged subarray
        var k = l;
    
        while (i < n1 && j < n2) {
            rectList.push(arr.slice());
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
            
        }
        
    
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        //rectList.push(arr.slice());
        
    
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }


        
    }
 
    function mergeSort(arr,l, r){
        
        
        if(l>=r){
            rectList.push(arr.slice());
            return;//returns recursively
        }
        var m =l+ parseInt((r-l)/2);
        
        
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
        
        
    }

    mergeSort(arr, 0, arr.length - 1);
    rectList.push(arr.slice());
    return rectList;
    
}

function show(params) {
    var text = document.getElementById('arrInput').value;
    const arr = text.split(",").map(element => { return Number(element);
      });
    document.getElementById('modal_container').classList.add("show");
    algo(params,arr);
    
}

function algo(params,input) {
    continueAnimating = true;
    if (params == 'insertion') {
        rectLists = insertionSort(input); //insertionSort instantiation
        document.getElementById('vizhead').innerHTML = 'Insertion Sort';
        document.getElementById('tc').innerHTML = 'O(n^2)';
        document.getElementById('sc').innerHTML = 'O(1)';
    } else if (params == 'selection'){
        rectLists = selectionSort(input); //SelectionSort instantiation
        document.getElementById('vizhead').innerHTML = 'Selection Sort';
        document.getElementById('tc').innerHTML = 'O(n^2)';
        document.getElementById('sc').innerHTML = 'O(1)';
    } else if (params == 'heap'){
        rectLists = heapSort(input); //HeapSort instantiation
        document.getElementById('vizhead').innerHTML = 'Heap Sort';
        document.getElementById('tc').innerHTML = 'O(nlog(n))';
        document.getElementById('sc').innerHTML = 'O(1)';
    } else if (params == 'merge'){
        rectLists = mergeSorter(input);
        document.getElementById('vizhead').innerHTML = 'Merge Sort';
        document.getElementById('tc').innerHTML =  'O(nlog(n))';
        document.getElementById('sc').innerHTML = 'O(n)';
    }
    canvas.height = Math.max.apply(null, input)*20+20;
    canvas.width = input.length*19;
    animation();
}

function closeit() {
    document.getElementById('modal_container').classList.remove("show");
    continueAnimating = false;
    x = 0;
}

function random() {
    var arrSize = Math.floor((Math.random() * 11) + 5);
    var arr = new Array(arrSize);
    for (let i = 0; i < arrSize; i++) {
        arr[i] = Math.floor((Math.random() * 15) + 1); 
    }
    document.getElementById('arrInput').value= arr;
}
function replay() {
    var params = document.getElementById('vizhead').innerHTML.split(' ')[0].toLowerCase();
    show(params);
    
}