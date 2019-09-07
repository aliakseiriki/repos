var arr=[];
function arr_enter() {
   
    do {
        var value=prompt('введите число');
        arr.push(+value);
    }
    while(value!=='')
}

function arr_sort() {

    for (i=0; i < arr.length; i++) {
        for (j=i+1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                var a;
                a=arr[i];
                arr[i]=arr[j];
                arr[j]=a;
            }
        }
    }

alert(arr);
}