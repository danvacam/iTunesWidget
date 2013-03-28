function (searchterm) {
    $.getJSON('http://itunes.apple.com/search?term=' + searchterm,
    function (data) {
        return data;
    });
}
