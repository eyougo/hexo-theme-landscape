/**
 * 其他语言导航
 */
var _ = require('lodash');

hexo.extend.helper.register('url_for_lang', function(lang){
    var p = this.url_for(this.page.path);
    var language = "/" + this.config.language;
    if (_.startsWith(p, language)) {
        p = p.substring(language.length);
    }
    if (!_.startsWith(p, '/')){
        p = '/' + p;
    }
    return '/' + lang + p;
});