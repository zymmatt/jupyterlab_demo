import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

import { ILauncher } from '@jupyterlab/launcher';

import { LabIcon } from '@jupyterlab/ui-components';

import { Panel } from '@lumino/widgets';

//import { composition_factor } from './func_composition_factor';

import pythonIconStr from '../style/Python-logo-notext.svg';
import factorIconStr from '../style/factor_hecheng.svg';
import rubyIconStr from '../style/ruby.svg';
const FACTORY = 'Editor';
const PALETTE_CATEGORY = '扩展组件';

namespace CommandIDs {
  export const create_ruby = 'create_ruby';
  export const createNew = 'jlab-examples:create-new-python-file';
  export const create_cmd_factor_synthesize = 'create_cmd_factor_synthesize';
  export const create_cmd_factor_analysis = 'create_cmd_factor_analysis';
  export const create_cmd_factor_backtest = 'create_cmd_factor_backtest';
  export const create_cmd_factor_construct = 'create_cmd_factor_construct';
  export const create_cmd_bar_backtest = 'create_cmd_bar_backtest';
  export const create_cmd_factor_analysis_batch = 'create_cmd_factor_analysis_batch';
  export const create_cmd_custom_backtest = 'create_cmd_custom_backtest';
  export const create_cmd_composition_factor = 'create_cmd_composition_factor';
  export const create_cmd_factor_backtest_visualize = 'create_cmd_factor_backtest_visualize';
  
}

const extension: JupyterFrontEndPlugin<void> = {
  id: 'launcher',
  autoStart: true,
  requires: [IFileBrowserFactory],
  optional: [ILauncher, ICommandPalette],
  activate: (
    app: JupyterFrontEnd,
    browserFactory: IFileBrowserFactory,
    launcher: ILauncher | null,
    palette: ICommandPalette | null
  ) => {
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
    const icon = new LabIcon({
      name: 'launcher:python-icon',
      svgstr: pythonIconStr,
    });

	const icon2 = new LabIcon({
      name: 'launcher:ipynb-icon',
      svgstr: factorIconStr,
    });

	const icon_ruby = new LabIcon({
      name: 'launcher:ruby-icon',
      svgstr: rubyIconStr,
    });
	
	const menucommand = 'jlab-examples:main-menu';
	commands.addCommand(menucommand, {
		  label: 'Execute jlab-examples:main-menu Command',
		  caption: 'Execute jlab-examples:main-menu Command',
		  execute: (args: any) => {
			console.log(
			  `jlab-examples:main-menu has been called ${args['origin']}.`
			);
			window.alert(
			  `jlab-examples:main-menu has been called ${args['origin']}.`
			);
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
        const cwd =
          args['cwd'] || browserFactory.tracker.currentWidget.model.path;

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
        const cwd =
          args['cwd'] || browserFactory.tracker.currentWidget.model.path;

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
		const panel_composition_factor = new Panel();
		
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
        command:cmd_create_ruby,
        category: 'Notebook',
        rank: 1,
      });
      launcher.add({
        command:command,
        category: 'Extension Examples',
        rank: 1,
      });
	  launcher.add({
		command:cmd_factor_synthesize,
        category: '新建模板',
        rank: 1,
      });
	  launcher.add({
		command:cmd_factor_analysis,
        category: '新建模板',
        rank: 2,
      });
	  launcher.add({
		command:cmd_factor_backtest,
        category: '新建模板',
        rank: 3,
      });
	  launcher.add({
		command:cmd_factor_construct,
        category: '新建模板',
        rank: 4,
      });
	  launcher.add({
		command:cmd_bar_backtest,
        category: '新建模板',
        rank: 5,
      });
	  launcher.add({
		command:cmd_factor_analysis_batch,
        category: '新建模板',
        rank: 6,
      });
	  launcher.add({
		command:cmd_custom_backtest,
        category: '新建模板',
        rank: 7,
      });
	  launcher.add({
		command:cmd_composition_factor,
        category: '可视化分析',
        rank: 1,
      });
	  launcher.add({
		command:cmd_factor_backtest_visualize,
        category: '可视化分析',
        rank: 2,
      });
    }

    // Add the command to the palette
    if (palette) {
	  palette.addItem({
        command:cmd_create_ruby,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
      palette.addItem({
        command:command,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_synthesize,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_analysis,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_backtest,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_construct,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_bar_backtest,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_analysis_batch,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_custom_backtest,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_composition_factor,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
	  palette.addItem({
        command:cmd_factor_backtest_visualize,
        args: { isPalette: true },
        category: PALETTE_CATEGORY,
      });
    }

  },
};

export default extension;
