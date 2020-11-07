(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).src = 'http://1f7178c3bb60.ngrok.io/static/js/bookmarklet.js ?r='+Math.floor(Math.random()*99999999999999999999);
			}
})();



