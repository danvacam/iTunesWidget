function itunes (searchterm) {
    var retObj = {
        resultCount: 0,
        results: []
    };
    $.getJSON('http://itunes.apple.com/search?term=' + searchterm,
    function (data) {
        retObj.resultCount = data.resultCount;
        $.each(data.results, function(i, row) {
                        if(row.artistName !== undefined) {
                            retObj.results.push(row.artistName);
                        }
                    });
                    
    });
    return retObj;
}
