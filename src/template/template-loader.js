const TemplateCompiler = require('./template-compiler');

class TemplateLoader {

    constructor(HtmlWebpackPlugin) {
       this.htmlWebpackPlugin = HtmlWebpackPlugin;
       this.compiler = new TemplateCompiler(HtmlWebpackPlugin);
    }

    /**
     * # means it's private member
     * @returns {*}
     */
    getCompiledBody() {
        const bodyData = {
            helloVar: 'Hello world!'
        };
        const data = {
            ...bodyData,
            nav: this.compiler.getCompiledTemplate('nav.html', bodyData),
            footer: this.compiler.getCompiledTemplate('footer.html', bodyData)
        };
        return this.compiler.getCompiledTemplate('body.html', data);
    }
    getTemplateHTML() {
        const htmlWebpackPlugin = this.htmlWebpackPlugin;
        const compiledBody = this.getCompiledBody();
        const data = {
            title: 'This is passed title',
            head: `${htmlWebpackPlugin.tags.headTags}`,
            body: `${compiledBody}${htmlWebpackPlugin.tags.bodyTags}`,
        };
        return this.compiler.getCompiledTemplate('template.html', data);
    }


}

module.exports = TemplateLoader;