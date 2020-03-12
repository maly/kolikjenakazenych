window.$ = window.jQuery = require("./node_modules/jquery/dist/jquery.min.js");
require("./node_modules/bootstrap/dist/js/bootstrap.min");


$.get("https://lab.ihned.cz/nk.js", null, function (data) {
    //window.hhtml = data

    var tt = hhtml.match(/(<table.*?<\/table>)/gs)

    var tab = tt[0]
    var rows = tab.match(/(<tr.*?<\/tr>)/gs)
    rows = rows.map(q => q.match(/<p>(.*?)<\/p>/gs))
    rows.shift()
    $("#num").text(rows[0][3].replace(/<.*?>/g, ""))
    //console.log("DATA", rows)

})