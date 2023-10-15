function descendingSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function main() {
    let size = parseInt(prompt("Enter the size: "));
    let arr = new Array(size);

    console.log("Enter array elements:");
    for (let i = 0; i < size; i++) {
        arr[i] = parseInt(prompt("Enter element " + (i + 1) + ": "));
    }

    console.log("Array before sorting: " + arr.join(' '));
    let sortedArray = descendingSort(arr);
    console.log("Sorted Array in Descending Order: " + sortedArray.join(' '));
}

main();
