import {JupyterFrontEnd} from '@jupyterlab/application';
import { notebookIcon } from '@jupyterlab/ui-components';
import { CommandPalette } from '@lumino/widgets';
import {
	JupyterFrontEnd,
	ILabShell,
	ILayoutRestorer,
	JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  //import { ToolbarButton, Toolbar } from '@jupyterlab/apputils';
  import { IDocumentManager } from '@jupyterlab/docmanager';
  
  import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
  //import { FileBrowser } from '@jupyterlab/filebrowser';
  import { ISettingRegistry } from '@jupyterlab/settingregistry';

namespace backtest_manage {
	export const custom_backtest1 = 'custom_backtest1';
	export const bar_backtest = 'bar_backtest';
	export const backtest1 = 'backtest1';
}


const file_path = 'extension_dir/py_left_widget/command_work_file/';



const left_widget_plugin: JupyterFrontEndPlugin<void> = {
  id: 'left_widget:plugin',
  autoStart: true,
  requires: [ILabShell, IDocumentManager, IFileBrowserFactory, ISettingRegistry, ILayoutRestorer],
  activate: (
	app: JupyterFrontEnd, 
	manager: IDocumentManager,
	labShell: ILabShell,
	factory: IFileBrowserFactory,
	settingRegistry: ISettingRegistry,
	restorer: ILayoutRestorer,
	nbtracker: INotebookTracker
  ) => {
    console.log('JupyterLab extension left_widget is activated!');
	const leftwidget_backtest_manage = new wgt_backtest_manage(app);
	restorer.add(leftwidget_backtest_manage, NAMESPACE);
    app.shell.add(leftwidget_backtest_manage, 'left', { rank: 600 });
  }
};


export default left_widget_plugin;















export class wgt_backtest_manage extends CommandPalette {
	
	
  constructor(app: JupyterFrontEnd) {
    super(app);

    this.id = 'leftwidget_backtest_manage';
	this.title.caption = '回测管理';
	this.title.label = '回测管理';
    this.commands.addCommand(backtest_manage.custom_backtest1, {
	  label: '自定义回测模板_1.ipynb',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  notebookIcon,
	  execute: async () => {
        // Open the newly created file with the 'Editor'
        return this.commands.execute('docmanager:open', {
          path: file_path+'自定义回测模板_1.ipynb',
          factory: 'Notebook',
        });
      },
	});
	this.addItem({
	  command: backtest_manage.custom_backtest1,
	  category: '回测管理',
	  args: {isPalette: true}
	});
	
	this.commands.addCommand(backtest_manage.bar_backtest, {
	  label: '逐bar回测模板_1.ipynb',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  notebookIcon,
	  execute: () => {
		 // Open the newly created file with the 'Editor'
        return this.commands.execute('docmanager:open', {
          path: file_path+'逐bar回测模板_1.ipynb',
          factory: 'Notebook',
        });
	  }
	});
	this.addItem({
	  command: backtest_manage.bar_backtest,
	  category: '回测管理',
	  args: {isPalette: true}
	});
	
	this.commands.addCommand(backtest_manage.backtest1, {
	  label: '回测_1.ipynb',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  notebookIcon,
	  execute: () => {
		 // Open the newly created file with the 'Editor'
        return this.commands.execute('docmanager:open', {
          path: file_path+'回测_1.ipynb',
          factory: 'Notebook',
        });
	  }
	});
	this.addItem({
	  command: backtest_manage.backtest1,
	  category: '回测管理',
	  args: {isPalette: true}
	});
    
  }

}




