{"filter":false,"title":"learning_yeoman_ch8.js","tooltip":"/tasks/learning_yeoman_ch8.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":55,"column":0}},"nl":"\n","lines":["","module.exports = function(grunt) {","","\t// Please see the Grunt documentation for more information regarding task","\t// creation: http://gruntjs.com/creating-tasks","","\tgrunt.registerMultiTask('learning_yeoman_ch8', 'This is an example plugin.', function() {","","\t\t// Merge task-specific and/or target-specific options with these defaults.","\t\tvar options = this.options({","\t\t\tpunctuation : '.',","\t\t\tseparator : ', ',","\t\t\ttemplate: '',","\t\t\tdata: {","\t\t\t\tname: 'Jonnie'","\t\t\t}","\t\t});","","\t\t// Iterate over all specified file groups.","\t\tthis.files.forEach(function(file) {","\t\t\t// Concat specified files.","\t\t\tvar src = file.src.filter(function(filepath) {","\t\t\t\t// Warn on and remove invalid source files (if nonull was set).","\t\t\t\tif(!grunt.file.exists(filepath)) {","\t\t\t\t\tgrunt.log.warn('Source file \"' + filepath + '\" not found.');","\t\t\t\t\treturn false;","\t\t\t\t} else {","\t\t\t\t\treturn true;","\t\t\t\t}","\t\t\t}).map(function(filepath) {","\t\t\t\t// Read file source.","\t\t\t\t","\t\t\t\t","\t\t\t\tgrunt.log.ok('Filepath \"' + filepath + '\" .');","\t\t\t\treturn grunt.file.read(filepath);","\t\t\t}).join(grunt.util.normalizelf(options.separator));","","\t\t\t// Handle options.","\t\t\tsrc += options.template;","","\t\t\t// Write the destination file.","\t\t\tgrunt.file.write(file.dest, src);","","\t\t\t// Print a success message.","\t\t\tgrunt.log.writeln('File \"' + file.dest + '\" created.');","\t\t});","\t});","};"]},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":13}},"text":"'use strict';"},{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":8,"column":0},"end":{"row":54,"column":0}},"lines":["module.exports = function(grunt) {","\tfunction LearningYeomanCh8() {","","\t\t//Default options","\t\tvar options = this.options({","\t\t\ttemplate: 'Hello <%= name %>',","\t\t\tdata: {","\t\t\t\tname: 'Learning Yeoman'","\t\t\t}","\t\t});","","\t\t//Handle checking source files","\t\tvar checkFiles = function(filepath) {","\t\t\tif (!grunt.file.exists(filepath)) {","\t\t\t\tgrunt.log.warn('Source file \"' + filepath + '\" not found.');","\t\t\t\treturn false;","\t\t\t}","\t\t\telse {","\t\t\t\treturn true;","\t\t\t}","\t\t};","","\t\t//Handle reading source files","\t\tvar readSource = function(file) {","\t\t\treturn file.src.filter(checkFiles).map(function(filepath) {","\t\t\t\treturn grunt.file.read(filepath);","\t\t\t}).join(grunt.util.normalizelf(''));","\t\t};","","\t\t//Handle reading and writing file","\t\tvar readWriteFile = function(file) {","\t\t\tvar src = readSource(file);","\t\t\tsrc += grunt.template.process(","\t\t\toptions.template, {","\t\t\t\tdata: options.data","\t\t\t});","\t\t\tgrunt.file.write(file.dest, src);","\t\t\tgrunt.log.writeln('File \"' + file.dest + '\" created.');","\t\t};","","\t\t// Iterate over all specified file groups.","\t\tthis.files.forEach(function(file) {","\t\t\treadWriteFile(file);","\t\t});","\t}","\tgrunt.registerMultiTask('learning_yeoman_ch8', 'This is an example plugin.', LearningYeomanCh8);"]},{"action":"insertText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":3},"end":{"row":6,"column":16}},"text":"'use strict';"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":0},"end":{"row":54,"column":2}},"text":"};"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":54,"column":0}},"nl":"\n","lines":["/*"," * learning-yeoman-ch8"," *"," *"," * Copyright (c) 2014 Jonnie Spratley"," * Licensed under the MIT license."," */","'use strict';","module.exports = function(grunt) {","\tfunction LearningYeomanCh8() {","","\t\t//Default options","\t\tvar options = this.options({","\t\t\ttemplate: 'Hello <%= name %>',","\t\t\tdata: {","\t\t\t\tname: 'Learning Yeoman'","\t\t\t}","\t\t});","","\t\t//Handle checking source files","\t\tvar checkFiles = function(filepath) {","\t\t\tif (!grunt.file.exists(filepath)) {","\t\t\t\tgrunt.log.warn('Source file \"' + filepath + '\" not found.');","\t\t\t\treturn false;","\t\t\t}","\t\t\telse {","\t\t\t\treturn true;","\t\t\t}","\t\t};","","\t\t//Handle reading source files","\t\tvar readSource = function(file) {","\t\t\treturn file.src.filter(checkFiles).map(function(filepath) {","\t\t\t\treturn grunt.file.read(filepath);","\t\t\t}).join(grunt.util.normalizelf(''));","\t\t};","","\t\t//Handle reading and writing file","\t\tvar readWriteFile = function(file) {","\t\t\tvar src = readSource(file);","\t\t\tsrc += grunt.template.process(","\t\t\toptions.template, {","\t\t\t\tdata: options.data","\t\t\t});","\t\t\tgrunt.file.write(file.dest, src);","\t\t\tgrunt.log.writeln('File \"' + file.dest + '\" created.');","\t\t};","","\t\t// Iterate over all specified file groups.","\t\tthis.files.forEach(function(file) {","\t\t\treadWriteFile(file);","\t\t});","\t}","\tgrunt.registerMultiTask('learning_yeoman_ch8', 'This is an example plugin.', LearningYeomanCh8);"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":2}},"text":"/*"},{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":53,"column":0}},"lines":[" * learning-yeoman-ch8"," *"," *"," * Copyright (c) 2014 Jonnie Spratley"," * Licensed under the MIT license."," */'use strict';","module.exports = function(grunt) {","\tfunction LearningYeomanCh8() {","","\t\t//Default options","\t\tvar options = this.options({","\t\t\ttemplate: 'Hello <%= name %>',","\t\t\tdata: {","\t\t\t\tname: 'Learning Yeoman'","\t\t\t}","\t\t});","","\t\t//Handle checking source files","\t\tvar checkFiles = function(filepath) {","\t\t\tif (!grunt.file.exists(filepath)) {","\t\t\t\tgrunt.log.warn('Source file \"' + filepath + '\" not found.');","\t\t\t\treturn false;","\t\t\t}","\t\t\telse {","\t\t\t\treturn true;","\t\t\t}","\t\t};","","\t\t//Handle reading source files","\t\tvar readSource = function(file) {","\t\t\treturn file.src.filter(checkFiles).map(function(filepath) {","\t\t\t\treturn grunt.file.read(filepath);","\t\t\t}).join(grunt.util.normalizelf(''));","\t\t};","","\t\t//Handle reading and writing file","\t\tvar readWriteFile = function(file) {","\t\t\tvar src = readSource(file);","\t\t\tsrc += grunt.template.process(","\t\t\toptions.template, {","\t\t\t\tdata: options.data","\t\t\t});","\t\t\tgrunt.file.write(file.dest, src);","\t\t\tgrunt.log.writeln('File \"' + file.dest + '\" created.');","\t\t};","","\t\t// Iterate over all specified file groups.","\t\tthis.files.forEach(function(file) {","\t\t\treadWriteFile(file);","\t\t});","\t}","\tgrunt.registerMultiTask('learning_yeoman_ch8', 'This is an example plugin.', LearningYeomanCh8);"]},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":2}},"text":"};"}]}]]},"ace":{"folds":[],"scrolltop":359,"scrollleft":0,"selection":{"start":{"row":43,"column":36},"end":{"row":43,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1407450223555,"hash":"3ceedc15929e98968141c57f78408adb763a4c7e"}