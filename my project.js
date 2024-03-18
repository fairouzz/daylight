function processItems(itemList) {
    total = 0;
    for (i = 0; i <= itemList.length; i++) {
        total += itemList[i];
    }
    console.log("The total is: " + total);
}

var items = [15, 10, 25, 30];
processItems(items); 