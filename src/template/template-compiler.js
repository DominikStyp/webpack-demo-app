const _ = require('lodash');
const fs = require('fs');
const path = require('path');

class TemplateCompiler {
    constructor(HtmlWebpackPlugin) {
        this.htmlWebpackPlugin = HtmlWebpackPlugin;
    }
    getCompiledTemplate(templateName, data){
        const compiled = _.template(this.readTemplateFile(templateName));
        return compiled(data);
    }
    readTemplateFile(templateName) {
        return this.readFile(path.join(__dirname, templateName));
    }
    readFile(path) {
        try {
            return fs.readFileSync(path, 'utf8');
        } catch(e) {
            console.log('Error:', e.stack);
        }
    }
}

module.exports = TemplateCompiler;