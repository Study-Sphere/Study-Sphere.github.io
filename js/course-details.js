// JavaScript to handle content filtering
function filterContent(type) {
    var items = document.querySelectorAll('.content-item');
    items.forEach(function(item) {
        item.style.display = 'none';
    });

    if (type === 'all') {
        items.forEach(function(item) {
            item.style.display = 'block';
        });
    } else {
        var selectedItems = document.querySelectorAll('.' + type + '-item');
        selectedItems.forEach(function(item) {
            item.style.display = 'block';
        });
    }
}
