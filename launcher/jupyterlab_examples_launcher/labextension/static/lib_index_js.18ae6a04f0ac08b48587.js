"use strict";
(self["webpackChunk_jupyterlab_examples_launcher"] = self["webpackChunk_jupyterlab_examples_launcher"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/filebrowser */ "webpack/sharing/consume/default/@jupyterlab/filebrowser");
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_Python_logo_notext_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Python-logo-notext.svg */ "./style/Python-logo-notext.svg");
/* harmony import */ var _style_factor_hecheng_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/factor_hecheng.svg */ "./style/factor_hecheng.svg");
/* harmony import */ var _style_ruby_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/ruby.svg */ "./style/ruby.svg");





//import { composition_factor } from './func_composition_factor';



const FACTORY = 'Editor';
const PALETTE_CATEGORY = '扩展组件';
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.create_ruby = 'create_ruby';
    CommandIDs.createNew = 'jlab-examples:create-new-python-file';
    CommandIDs.create_cmd_factor_synthesize = 'create_cmd_factor_synthesize';
    CommandIDs.create_cmd_factor_analysis = 'create_cmd_factor_analysis';
    CommandIDs.create_cmd_factor_backtest = 'create_cmd_factor_backtest';
    CommandIDs.create_cmd_factor_construct = 'create_cmd_factor_construct';
    CommandIDs.create_cmd_bar_backtest = 'create_cmd_bar_backtest';
    CommandIDs.create_cmd_factor_analysis_batch = 'create_cmd_factor_analysis_batch';
    CommandIDs.create_cmd_custom_backtest = 'create_cmd_custom_backtest';
    CommandIDs.create_cmd_composition_factor = 'create_cmd_composition_factor';
    CommandIDs.create_cmd_factor_backtest_visualize = 'create_cmd_factor_backtest_visualize';
})(CommandIDs || (CommandIDs = {}));
const extension = {
    id: 'launcher',
    autoStart: true,
    requires: [_jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__.IFileBrowserFactory],
    optional: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_2__.ILauncher, _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette],
    activate: (app, browserFactory, launcher, palette) => {
        const { commands, shell } = app;
        const cmd_create_ruby = CommandIDs.create_ruby;
        const command = CommandIDs.createNew;
        const cmd_factor_synthesize = CommandIDs.create_cmd_factor_synthesize;
        const cmd_factor_analysis = CommandIDs.create_cmd_factor_analysis;
        const cmd_factor_backtest = CommandIDs.create_cmd_factor_backtest;
        const cmd_factor_construct = CommandIDs.create_cmd_factor_construct;
        const cmd_bar_backtest = CommandIDs.create_cmd_bar_backtest;
        const cmd_factor_analysis_batch = CommandIDs.create_cmd_factor_analysis_batch;
        const cmd_custom_backtest = CommandIDs.create_cmd_custom_backtest;
        const cmd_composition_factor = CommandIDs.create_cmd_composition_factor;
        const cmd_factor_backtest_visualize = CommandIDs.create_cmd_factor_backtest_visualize;
        const icon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.LabIcon({
            name: 'launcher:python-icon',
            svgstr: _style_Python_logo_notext_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
        });
        const icon2 = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.LabIcon({
            name: 'launcher:ipynb-icon',
            svgstr: _style_factor_hecheng_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
        });
        const icon_ruby = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.LabIcon({
            name: 'launcher:ruby-icon',
            svgstr: _style_ruby_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
        });
        const menucommand = 'jlab-examples:main-menu';
        commands.addCommand(menucommand, {
            label: 'Execute jlab-examples:main-menu Command',
            caption: 'Execute jlab-examples:main-menu Command',
            execute: (args) => {
                console.log(`jlab-examples:main-menu has been called ${args['origin']}.`);
                window.alert(`jlab-examples:main-menu has been called ${args['origin']}.`);
            },
        });
        commands.addCommand(cmd_create_ruby, {
            label: (args) => (args['isPalette'] ? 'Ruby' : 'Ruby'),
            caption: '生成ruby文件',
            icon: (args) => (args['isPalette'] ? null : icon_ruby),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                window.alert('ruby!');
                //return commands.execute(null);
            },
        });
        commands.addCommand(command, {
            label: (args) => (args['isPalette'] ? 'New Python File' : 'Python File'),
            caption: 'hello new python!',
            icon: (args) => (args['isPalette'] ? null : icon),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                const cwd = args['cwd'] || browserFactory.tracker.currentWidget.model.path;
                // Create a new untitled python file
                const model = await commands.execute('docmanager:new-untitled', {
                    path: cwd,
                    type: 'file',
                    ext: 'py',
                });
                // Open the newly created file with the 'Editor'
                return commands.execute('docmanager:open', {
                    path: model.path,
                    factory: FACTORY,
                });
            },
        });
        commands.addCommand(cmd_factor_synthesize, {
            label: (args) => (args['isPalette'] ? '因子合成' : '因子合成'),
            caption: '因子合成',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                const cwd = args['cwd'] || browserFactory.tracker.currentWidget.model.path;
                // Create a new untitled python file
                const model = await commands.execute('docmanager:new-untitled', {
                    path: cwd,
                    type: 'file',
                    ext: 'ipynb',
                });
                // Open the newly created file with the 'Editor'
                return commands.execute('docmanager:open', {
                    path: model.path,
                    factory: FACTORY,
                });
            },
        });
        commands.addCommand(cmd_factor_analysis, {
            label: (args) => (args['isPalette'] ? '因子分析' : '因子分析'),
            caption: '因子分析',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_factor_backtest, {
            label: (args) => (args['isPalette'] ? '因子回测' : '因子回测'),
            caption: '因子回测',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_factor_construct, {
            label: (args) => (args['isPalette'] ? '因子构建' : '因子构建'),
            caption: '因子构建',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_bar_backtest, {
            label: (args) => (args['isPalette'] ? '逐bar回测' : '逐bar回测'),
            caption: '逐bar回测',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_factor_analysis_batch, {
            label: (args) => (args['isPalette'] ? '因子批量分析' : '因子批量分析'),
            caption: '因子批量分析',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_custom_backtest, {
            label: (args) => (args['isPalette'] ? '自定义回测' : '自定义回测'),
            caption: '自定义回测',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        commands.addCommand(cmd_composition_factor, {
            label: (args) => (args['isPalette'] ? '合成因子' : '合成因子'),
            caption: '合成因子',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                //const panel_composition_factor = new BoxPanel({alignment:'start',
                //											   direction:'top-to-bottom',
                //											   spacing:40});
                const panel_composition_factor = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_4__.Panel();
                // direction:'top-to-bottom'														
                panel_composition_factor.addClass('jp-example-view');
                panel_composition_factor.id = 'panel_composition_factor';
                panel_composition_factor.title.label = '合成因子';
                panel_composition_factor.title.closable = true;
                /*
                const div_container = document.createElement('div');
                div_container.className = 'Container';
                //const line1_panel = new BoxPanel({direction:'left-to-right', spacing:40});
                const div_line1 = document.createElement('div');
                div_line1.className = 'linespacing';
                const div_Header = document.createElement('div');
                div_Header
                const textarea1 = document.createElement('textarea');
                textarea1.id = 'texta1';
                textarea1.value = '这是一个输入框,CSS定义样式';
                //textarea1.style = 'width: 150px; margin: 10px 20px ';
                textarea1.className = 'jp-textarea-input';
                //const title_options = { node: <HTMLTextAreaElement>textarea1};
                //const title_wgt = new Widget({ node: <HTMLTextAreaElement>textarea1});
                //title_wgt.addClass('jp-TitleWidget');
                
                const line1button = document.createElement('button');
                line1button.id = 'line1button';
                line1button.value = 'asdf';
                line1button.className = 'jp-ButtonWidget';
                //textarea1.style = 'width: 150px; margin: 10px 20px ';
                //const title_options = { node: <HTMLTextAreaElement>textarea1};
                //const line1button_wgt = new Widget({ node: line1button});
                //line1button_wgt.addClass('jp-ButtonWidget');
                
                const button1 =  document.createElement('button');
                button1.id = 'bt1';
                button1.className = 'jp-ButtonWidget';
                //button1.style = 'width: 150px; margin: 10px 20px ';
                //document.getElementById('bt1').style= 'width: 150px; margin: 10px 20px ';
                
                //const button_options = { node: button1 };
                //const button_wgt = new Widget({ node: button1 });
                //button_wgt.node.textContent = '这是一个按钮';
                //button_wgt.addClass('jp-ButtonWidget');
                //button_wgt.node.addEventListener('click', () => {
                //	const inputContant = (document.getElementById("texta1") as HTMLInputElement);
                    //const inputContant = title_options.node;
                //	window.alert(inputContant.value);
                //});
                div1.appendChild(textarea1);
                div1.appendChild(line1button);
                div1.appendChild(button1);
                */
                //const div1_wgt = new Widget({node:div_container});
                //document.getElementById('textarea').value;
                //line1_panel.addWidget(title_wgt);
                //line1_panel.addWidget(line1button_wgt);
                //panel_composition_factor.addWidget(div1_wgt);
                //panel_composition_factor.addWidget(button_wgt);
                //shell.add(panel_composition_factor, 'main');
                //panel_composition_factor.addWidget(button_wgt);
                //panel_composition_factor.addWidget(title_wgt);
                shell.add(panel_composition_factor, 'main');
            },
        });
        commands.addCommand(cmd_factor_backtest_visualize, {
            label: (args) => (args['isPalette'] ? '因子回测' : '因子回测'),
            caption: '因子回测',
            icon: (args) => (args['isPalette'] ? null : icon2),
            execute: async (args) => {
                // Get the directory in which the Python file must be created;
                // otherwise take the current filebrowser directory
                // Open the newly created file with the 'Editor'
                return commands.execute(null);
            },
        });
        // Add the command to the launcher
        if (launcher) {
            launcher.add({
                command: cmd_create_ruby,
                category: 'Notebook',
                rank: 1,
            });
            launcher.add({
                command: command,
                category: 'Extension Examples',
                rank: 1,
            });
            launcher.add({
                command: cmd_factor_synthesize,
                category: '新建模板',
                rank: 1,
            });
            launcher.add({
                command: cmd_factor_analysis,
                category: '新建模板',
                rank: 2,
            });
            launcher.add({
                command: cmd_factor_backtest,
                category: '新建模板',
                rank: 3,
            });
            launcher.add({
                command: cmd_factor_construct,
                category: '新建模板',
                rank: 4,
            });
            launcher.add({
                command: cmd_bar_backtest,
                category: '新建模板',
                rank: 5,
            });
            launcher.add({
                command: cmd_factor_analysis_batch,
                category: '新建模板',
                rank: 6,
            });
            launcher.add({
                command: cmd_custom_backtest,
                category: '新建模板',
                rank: 7,
            });
            launcher.add({
                command: cmd_composition_factor,
                category: '可视化分析',
                rank: 1,
            });
            launcher.add({
                command: cmd_factor_backtest_visualize,
                category: '可视化分析',
                rank: 2,
            });
        }
        // Add the command to the palette
        if (palette) {
            palette.addItem({
                command: cmd_create_ruby,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: command,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_synthesize,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_analysis,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_backtest,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_construct,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_bar_backtest,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_analysis_batch,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_custom_backtest,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_composition_factor,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
            palette.addItem({
                command: cmd_factor_backtest_visualize,
                args: { isPalette: true },
                category: PALETTE_CATEGORY,
            });
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ }),

/***/ "./style/Python-logo-notext.svg":
/*!**************************************!*\
  !*** ./style/Python-logo-notext.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg width=\"22\" height=\"21.884\" version=\"1.0\" viewBox=\"0 0 22 21.884\" xmlns=\"http://www.w3.org/2000/svg\">\n <defs>\n  <linearGradient id=\"linearGradient11307\" x1=\"89.137\" x2=\"147.78\" y1=\"111.92\" y2=\"168.1\" gradientUnits=\"userSpaceOnUse\">\n   <stop stop-color=\"#ffe052\" offset=\"0\"/>\n   <stop stop-color=\"#ffc331\" offset=\"1\"/>\n  </linearGradient>\n  <linearGradient id=\"linearGradient9521\" x1=\"55.549\" x2=\"110.15\" y1=\"77.07\" y2=\"131.85\" gradientUnits=\"userSpaceOnUse\">\n   <stop stop-color=\"#387eb8\" offset=\"0\"/>\n   <stop stop-color=\"#366994\" offset=\"1\"/>\n  </linearGradient>\n </defs>\n <g transform=\"matrix(.19923 0 0 .19923 -94.307 -50.152)\">\n  <g transform=\"translate(428.42,184.26)\">\n   <path d=\"m99.75 67.469c-28.032 2e-6 -26.281 12.156-26.281 12.156l0.03125 12.594h26.75v3.7812h-37.375s-17.938-2.0343-17.938 26.25c-2e-6 28.284 15.656 27.281 15.656 27.281h9.3438v-13.125s-0.50365-15.656 15.406-15.656h26.531s14.906 0.24096 14.906-14.406v-24.219c0-2e-6 2.2632-14.656-27.031-14.656zm-14.75 8.4688c2.6614-2e-6 4.8125 2.1511 4.8125 4.8125 2e-6 2.6614-2.1511 4.8125-4.8125 4.8125-2.6614 2e-6 -4.8125-2.1511-4.8125-4.8125-2e-6 -2.6614 2.1511-4.8125 4.8125-4.8125z\" color=\"#000000\" fill=\"url(#linearGradient9521)\"/>\n   <path d=\"m100.55 177.31c28.032 0 26.281-12.156 26.281-12.156l-0.0312-12.594h-26.75v-3.7812h37.375s17.938 2.0343 17.938-26.25c1e-5 -28.284-15.656-27.281-15.656-27.281h-9.3438v13.125s0.50366 15.656-15.406 15.656h-26.531s-14.906-0.24096-14.906 14.406v24.219s-2.2632 14.656 27.031 14.656zm14.75-8.4688c-2.6614 0-4.8125-2.1511-4.8125-4.8125s2.1511-4.8125 4.8125-4.8125 4.8125 2.1511 4.8125 4.8125c1e-5 2.6614-2.1511 4.8125-4.8125 4.8125z\" color=\"#000000\" fill=\"url(#linearGradient11307)\"/>\n  </g>\n </g>\n</svg>\n");

/***/ }),

/***/ "./style/factor_hecheng.svg":
/*!**********************************!*\
  !*** ./style/factor_hecheng.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"70px\" height=\"75px\" viewBox=\"0 0 70 75\" enable-background=\"new 0 0 70 75\" xml:space=\"preserve\">  <image id=\"image0\" width=\"70\" height=\"75\" x=\"0\" y=\"0\"\n    href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABLCAMAAAD6bgFoAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEX8/Pz////3+fy42P+z\n1f+/3P/o8v/7/f/y9vxxsf9nq/9zsv+fyv/v9v9prP9vsP+dyf/n8v/+//9srv+u0v+r0f98tv9q\nrP9ysf+izP/m8f/0+f+Qwv+ax//t9f9vr/+Yxv/k8P/+/v+eyf/j8P9xsP+Vxf/r9P9ur/+UxP/i\n7/9wsP+byP/h7v/6/P+Rwv+Pwf/f7f/9/v9orP+Xxv/e7f+MwP/l8f9trv+Lv//c6//b6//3+v90\nsv/1+f/3+//I4P+21v/8/f/1+v/y+P/2+v/5/P+cyP+32P/M4/+Buv+Jvv/R5v/g7v+Owf9rrf9o\nq//8/v/4+/+31/+62f/w9//q9P/x9/+iy/+GvP+Auf9tr/+hy/+82v/W6P9qrf91s//B3f+NwP/U\n5/+AuP++3P/5+//h7/92s//S5/94tf99t/+01v+kzf+kzP/A3f/Z6v97tv/O5P/z+P/Y6f/R5f/Z\n6f/V6P93tP/C3f/f7v/F3/++2//J4f+eyv+Eu/+x1P+OwP9/uP95tf9zsf/E3v/q8//B3P+Ivf+R\nw//Q5f96tv/T5/9+t/9/uf+cyf+t0v9+uP/N5P/a6//Y6v/s9P/P5f+Sw/+TxP+VxP+p0P/I4f+F\nvP/j7//P5P/n8f+Fu/+Wxf/0+P+t0f+ayP/G3/+y1f+Tw/+jzf+pz/+gyv/d7P+Kvv+oz/+w0/+B\nuf/S5v+52P+Mv/93s//G4P/K4v/A3P/p8/+Hvf+Cuv/9/f3y9/3Sw9eFAAAAAWJLR0QB/wIt3gAA\nAAlwSFlzAAAWJQAAFiUBSVIk8AAAAAd0SU1FB+YBGAI0FAZw9xsAAAPWSURBVFjD7dfrW9tkFABw\nKsi7pjSUhEFsgI7AoBAI8MZJkUu30ASRS2kHbEWQFm91OLUUpYqojIEX2LxRJ6Bu041tzruOOfbP\n2ZI2hWJJk/R5xgfPt37I73nP6TnvSbKyIqHTHFmHjnksOyfteDwXpGKO6JG0w5BnBBlg0HxTAZaS\nwQvTyehoUTGCEk+YQSqGINMppLEEjxyIKC0DGWBQy7FySjuDoPqKSqCdQZDjVdUgAwxqramltDMI\nStfVM5hmBkHohlwmAwxqbWyC2hmEtTx5QspLPYMglqeamQwwrK3laaidQVhrTSvQziCItaUtEwzb\n3qGcsZ88tefiKMTjDypikoMkHg2DcZ0OBw80MphgPmXqeqaZobQwGNP9LG2zWXp6GS0M6Ot3DkS7\npGfvbS7LQABciQTcpw2xKRrklTBwqK91WJB+ttVZRcaWd0YBI9Sf9YxUdbfFz2OvsIjMc6MOBUyZ\nyRbp85ZaLp7UoJgUS48pSer5kfHIQ15fPC2ufGKHwT3DLgXMCy9GmfaXXo7/U6+UjNN0vr/qVQFT\nwBQ0WFAW9fs6IcUxDAP4nHOTr51//Q0z2PsWIFfiN3u8Fi8dmAryzdNvvV0+Ewq8E7TbBS7pXUKG\noYR3Z9+bez/0wYdH5y8sjDT20KNlLt3+SKeLqeY8G77TvAh7cRFgKhmd+4SfHYgtpdIlTi3jKLRK\nl2XoI0Et0/exU2LwTzrVMp8GihOrdrmMUsl0L6CJDeCtVsusXBqXmOLLRrWMuTGxlayftamtjfHz\nBPPFl4w6hmK+KqGdO9UZYNnGWgZTxTCr8/mefn/UcXoNhCnMKWMwKDAc1vF1S+jKTOXs+W8m1tY3\nfN8aRr/jsPQZjLObv++9Ss5dO369CejgD8Pm6k6XezZAnA0DCF0QS4vhCn5coOlzpZPEjdroOEIX\nF1kRFD9XZKgI80NLxt01SsnAodH2SDlY3FBRuXuKIH/TYzBtdt3qyq50yzPCnF4c6tDG3lmk3LML\nuDN6q6/1QVkmeDs21fQde1IDhOvEDwbbOgnlGEepLbYff0pidHc9sYH/uZyTY8hfYqchfnUnMVPL\nsYGfbGXkGGbFK471b9PJLzO/T8YmdeQukGNgx2YRzqJ44I8gTGLMV8QRQ6uknZe6b+CZxT/b/5r/\ne2hf5/P3vE52gHX6t6TWOWAYoEDm3icFuI+Bdt8/eqf+wVhQasADRxOD8L+2iQ6Srb7srVU+MaOP\n6k30f0YzQ4dJFRGmJWZ7e/uhPvJdTagIGpUY8WyqYxfDL6s5ihjLvMRAXk1hxOChxGQgDhfzL/I/\nDDsuzzh+AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAxLTI0VDAyOjUyOjIwKzAwOjAwovg9IwAA\nACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMS0yNFQwMjo1MjoyMCswMDowMNOlhZ8AAAAASUVORK5C\nYII=\" />\n</svg>\n");

/***/ }),

/***/ "./style/ruby.svg":
/*!************************!*\
  !*** ./style/ruby.svg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100px\" height=\"100px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">  <image id=\"image0\" width=\"100\" height=\"100\" x=\"0\" y=\"0\"\n    href=\"data:image/png;base64,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\" />\n</svg>\n");

/***/ })

}]);
//# sourceMappingURL=lib_index_js.18ae6a04f0ac08b48587.js.map