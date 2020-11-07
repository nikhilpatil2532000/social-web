(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).src = 'http://1e2b5b3c007c.ngrok.io/static/js/bookmarklet.js ?r='+Math.floor(Math.random()*99999999999999999999);
			}
})();



