const _ = require('lodash');
const fs = require('fs');

class TemplateLoader {
    constructor(HtmlWebpackPlugin) {
       this.htmlWebpackPlugin = HtmlWebpackPlugin;
    }
    getTemplateHTML() {
        const htmlWebpackPlugin = this.htmlWebpackPlugin;
        const data = {
            head: `<title>Test title</title>\n${htmlWebpackPlugin.tags.headTags}`,
            body: `<h1>This is body</h1>\n${htmlWebpackPlugin.tags.bodyTags}`,
        };
        const compiled = _.template(this.readFile(__dirname + '/template.html'));
        return compiled(data);
    }
    readFile(path) {
        try {
            return fs.readFileSync(path, 'utf8');
        } catch(e) {
            console.log('Error:', e.stack);
        }
    }

}

module.exports = TemplateLoader;