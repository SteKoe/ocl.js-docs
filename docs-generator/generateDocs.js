const path = require('path');
const glob = require('glob');
const fs = require('fs');
const typedoc = require('typedoc');
const mkdirp = require('mkdirp');
const handlebars = require('handlebars');
const template = handlebars.compile(fs.readFileSync(__dirname + '/file.hbs', 'utf8'), {strict: true});

const SOURCE_DIR = path.resolve(__dirname, '../../ocl.js/');
const PACKAGE_JSON = path.resolve(SOURCE_DIR, './package.json');
const COMPONENTS_DIR = path.resolve(SOURCE_DIR, './lib/components/');
const OUTPUT_DIR = path.join(__dirname, '../source/includes');
const JSON_OUTPUT_PATH = path.resolve('./tmp/dist.json');

const app = new typedoc.Application({
    "mode": 'file',
    "ignoreCompilerErrors": true,
    "tsconfig": path.resolve(SOURCE_DIR, './tsconfig.json'),
    "out": "docs",
    "exclude": "test",
    "theme": "default",
    "excludePrivate": true,
    "excludeNotExported": true,
    "target": "ES5",
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "stripInternal": true,
    "suppressExcessPropertyErrors": true,
    "suppressImplicitAnyIndexErrors": true,
    "module": "commonjs"
});


let s = path.resolve(COMPONENTS_DIR + '/expressions/**/*.ts');
glob(s, async (err, files) => {
    const src = app.expandInputFiles(files);
    const project = app.convert(src);
    app.generateJson(project, JSON_OUTPUT_PATH);

    await createVersionFileInfo();
    processOutput();
});

function createVersionFileInfo() {
    let pkg = require(PACKAGE_JSON);

    let configFile = path.resolve(__dirname, '../config.rb');
    return new Promise((resolve, reject) => fs.readFile(configFile, 'utf8', (err, content) => {
        if (err) reject(err);

        const newContent = content.replace(/@ocl_version = '(.*)'/g, `@ocl_version = '${pkg.version}'`);
        fs.writeFile(configFile, newContent, 'utf8', () => {
            if (err) reject(err);
            resolve();
        })
    }));
}

function processOutput() {
    const templateData = require(JSON_OUTPUT_PATH);

    let filesToProcess = templateData.children
        .filter(c => c.kindString === 'Class' && c.sources[0].fileName.indexOf('expressions') !== -1 && (c.flags && c.flags.isAbstract !== true))
        .map(td => {
            let filename = td.sources[0].fileName;
            let parts = filename.split('/');

            return {
                title: td.name,
                group: parts[parts.length - 2],
                content: {
                    description: addDescription(td),
                    citeOclSpecificaton: citeOclSpecificaton(td),
                    oclExpression: addOclExpression(td),
                    oclExample: addOclExample(td)
                }
            }
        });

    let groups = [...new Set(filesToProcess.map(a => a.group).sort())];
    groups.map(group => filesToProcess.filter(f => f.group === group).sort((a, b) => a.title.localeCompare(b.title)))
        .forEach(writeGroup);
}

function citeOclSpecificaton(obj) {
    if (obj.comment && Array.isArray(obj.comment.tags)) {
        let oclSpecification = obj.comment.tags.find(t => t.tag === 'oclspecification');
        if (oclSpecification && oclSpecification.text) {
            return oclSpecification.text.split('\n')
                .filter(s => s.length !== 0)
                .map(s => `> ${s}`)
                .join('\n');
        }
    }
}

function addDescription(obj) {
    return obj.comment && obj.comment.shortText;
}

function addOclExpression(obj) {
    if (obj.comment && Array.isArray(obj.comment.tags)) {
        let oclExpressionTag = obj.comment.tags.find(t => t.tag === 'oclexpression');
        if (oclExpressionTag && oclExpressionTag.text) {
            return [
                '```ocl--example',
                oclExpressionTag.text.replace(/\n*$/, ''),
                '```'
            ].join('\n');
        }
    }
}

function addOclExample(obj) {
    if (obj.comment && Array.isArray(obj.comment.tags)) {
        let oclExampleTag = obj.comment.tags.find(t => t.tag === 'oclexample');
        if (oclExampleTag && oclExampleTag.text) {
            return oclExampleTag.text.replace(/\n*$/, '').split('\n').filter(s => s !== '').join('\n');
        }
    }
}

function writeGroup(group) {
    const groupName = group[0].group;
    const groupInfoData = template({
        groupName: ucfirst(groupName),
        group
    }).replace(/^\s{4,5}/gm, '');

    let indexFilePath = path.join(OUTPUT_DIR, 'expressions');
    mkdirp(indexFilePath, () => {
        fs.writeFileSync(path.join(indexFilePath, `_${groupName}.gen.md`), groupInfoData);
    });
}

function ucfirst(s) {
    return s.charAt(0).toUpperCase() + s.substr(1);
}

function fileNameToReadableName(fileName) {
    return fileName.replace('.md', '').split('Expression').join(' Expression');
}