eval(function(p,a,c,k,e,d){
    e=function(c){
    return c.toString(36)};
    if(!''.replace(/^/,String)){
    while(c--){
    d[c.toString(a)]=k[c]||c.toSdocument.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    
    /* document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
            // var closeSite = confirm("Are you sure you want to close this site?");
            event.preventDefault();
            alert('Viewing page source is disabled.'); 
            // var closeSite = true;
            // if (closeSite) {
            //     window.close();
            // }
        }
    }); */
    
    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || (event.shiftKey && event.code === 'KeyI'))) {
            event.preventDefault();
            alert('Viewing page source is disabled.');
            window.close();
        }
    });
    
    
    /* document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
            event.preventDefault();
            // alert('Viewing page source is disabled.'); 
        }
    });
     */tring(a)};
    k=[function(e){
    return d[e]}];
    e=function(){
    return'\\w+'};
    c=1};
    while(c--){
    if(k[c]){
    p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}};
    return p
    }('1 0(){2.3("4")}0();',5,5,'alert|function|document|write|Hello'.split('|'),0,{}))
    