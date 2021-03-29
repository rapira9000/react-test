let myArgs = process.argv.slice(2);

const fs = require('fs');

const path = './src/components/';
const componentName = myArgs[0];
const pathToFileComponent = path + componentName;

if (fs.existsSync(pathToFileComponent)) {
    console.log('ERROR: component is exist!');
} else {
    const componentDirectoryName = pathToFileComponent;
    const componentFileNameJsx = pathToFileComponent + '/' + componentName + '.jsx';
    const componentFileNameCss = pathToFileComponent + '/' + componentName + '.module.css';

    // create component directory
    fs.mkdirSync(componentDirectoryName, (err) => {
        if (err) throw err;
        console.log('directory '+componentDirectoryName+' is created successfully.');
    });

    // create component jsx file
    createFileWithContent(componentFileNameJsx, jsxFileContent(componentName));

    // create component module.css file
    createFileWithContent(componentFileNameCss, '');
}


function createFileWithContent(filePath, content) {
    fs.writeFile(filePath, content, function (err) {
        if (err) throw err;
        console.log('File '+filePath+' is created successfully.');
    });
}

function jsxFileContent(fileName) {
    return(
        'import React from "react";\n' +
        'import Classes from "./'+ fileName +'.module.css";\n' +
        '\n' +
        'const '+ fileName +' = (props) => {\n' +
        '    return (\n' +
        '      <div className={Classes.'+ fileName +'}>\n' +
        '            content\n' +
        '      </div>\n' +
        '    );\n' +
        '};\n' +
        '\n' +
        'export default '+ fileName +';'
    );
}