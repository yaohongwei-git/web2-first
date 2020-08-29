
// var moduleB=(function(){
    var a=10;
    var c=1;
    function util(){
        console.log('来自b.js');
    }
    util();
    module.exports= {
        c,
        util
    }
// })();
