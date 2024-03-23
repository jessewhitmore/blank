const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/assets/')

    // dynamic file name grabber
    eleventyConfig.addFilter("fileNames", function(folderPath) {
        const files = fs.readdirSync(folderPath);
        const fileNames = files.map(file => {
            return path.basename(file); // get name
        });
        return fileNames;
    });     

    // set up corrected values
    return {
        dir: {
            input:'src',
            includes: '_includes',
            output: '_site'
        },
        devServer: {
            port: 8080
        },
        templateFormats: ['md','njk','html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
}