/* Wenn der Benutzer auf den Button klickt,
 wird gewechselt zuwischen verstecken und zeigen des Inhaltes */
function dropdownFunction()
{
    document.getElementById("myDropdown").classList.toggle("show");
}

function getViewportHeight()
{

    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined')
    {
        viewPortHeight = window.innerHeight;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0)
    {
        viewPortHeight = document.documentElement.clientHeight;
    }
    // older versions of IE
    else
    {
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
    }
    return viewPortHeight;
}


function getViewportWidth()
{
    var viewPortWidth;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth;
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth;
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
    }
    return viewPortWidth;
}

function getDocHeight()
{
    var body = document.body, html = document.documentElement;

    var height = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight,
            html.offsetHeight
            );
    return height;
}

function setFooterPosition()
{
    if (getViewportHeight() < getDocHeight())
    {
        document.getElementById("footerID").style = "position: static;";
    }
    consolLogHeight();
}

function consolLogHeight()
{
    console.log(getViewportHeight());
    console.log(getDocHeight());
}

