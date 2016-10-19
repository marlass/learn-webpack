import {b} from "./a.js";
require.ensure(['jquery'],function(){
    var test = 6;
    console.log($('body'));
    console.log(b);
});
