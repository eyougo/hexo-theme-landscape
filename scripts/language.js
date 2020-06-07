/**
 * 其他语言导航
 */
var _ = require('lodash');

hexo.extend.helper.register('url_for_lang', function(lang){
    var p = this.page.path;
    var language = this.config.language;
    console.log("url:", this.url_for(p));
    if (_.startsWith(p, language)) {
        p = p.substring(language.length);
    }
    console.log("page path substring:", p);
    if (!_.startsWith(p, '/')){
        p = '/' + p;
    }
    return '/' + lang + p;
});