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
//import { Panel, Widget } from '@lumino/widgets';
//PanelLayout, 
//import { refreshIcon, notebookIcon } from '@jupyterlab/ui-components';
//import { CommandPalette } from '@lumino/widgets';

import {wgt_backtest_manage} from './backtest_manage';
import {wgt_factor_repo} from './factor_repo';
import {wgt_research_report} from './research_report';
import {wgt_risk_performance} from './risk_performance';
import {wgt_help_doc} from './help_doc';
import {wgt_stock_risk} from './stock_risk';
import { INotebookTracker } from '@jupyterlab/notebook';

const NAMESPACE = 'left_widget_filebrowser';


//const ipynb_iconclass = 'ipynbfile-icon';

//const file_path = 'extension_dir/py_left_widget/command_work_file/';
/**
 * Initialization data for the left_widget extension.
 */
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
	
	const leftwidget_factor_repo = new wgt_factor_repo(app, nbtracker, manager);

	const leftwidget_risk_performance = new wgt_risk_performance(app);
	
	const leftwidget_research_report = new wgt_research_report(app);
	
	const leftwidget_help_doc = new wgt_help_doc(app);
	
	const leftwidget_stock_risk = new wgt_stock_risk(app);
	/*
	const leftwidget_research_report = new CommandPalette(app);
	leftwidget_research_report.id = 'leftwidget_research_report';
    leftwidget_research_report.title.caption = '研究报告';
	leftwidget_research_report.title.label = '研究报告';
	leftwidget_research_report.commands.addCommand(research_report.stock_risk_radar, {
	  label: '股票风险"深海雷达"',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  notebookIcon,
	  execute: () => {
		console.log(`Executed ${research_report.stock_risk_radar}`);
	  }
	});
	leftwidget_research_report.addItem({
	  command: research_report.stock_risk_radar,
	  category: '研究所报告',
	  args: {isPalette: true}
	});
	*/
	
	/*	
	const leftwidget_stock_risk = new Panel();
	leftwidget_stock_risk.id = 'leftwidget_stock_risk';
    leftwidget_stock_risk.title.caption = '个股风险';
	leftwidget_stock_risk.title.label = '个股风险';
	// Add our own refresh button, since the other one is hidden
    // via CSS.
	const leftwidget_stock_risk_tb = new Toolbar();
    const refresher = new ToolbarButton({
      icon: refreshIcon,
	  //label: '风险观察池',
      onClick: () => {
        //leftwidget_stock_risk.model.refresh();
      },
      tooltip: 'Refresh File List'
    });
	

    //refresher.addClass('jp-GitHub-toolbar-item');
	//leftwidget_stock_risk.toolbar.addItem('gh-refresher', refresher);
	leftwidget_stock_risk_tb.addItem('gh-refresher', refresher);
	leftwidget_stock_risk.addWidget(leftwidget_stock_risk_tb);
	*/
	
	/*
	const leftwidget_risk_performance = new Widget();
	leftwidget_risk_performance.id = 'leftwidget_risk_performance';
    leftwidget_risk_performance.title.caption = '风险绩效';
	leftwidget_risk_performance.title.label = '风险绩效';
	*/
	
	const leftwidget_my_research = factory.createFileBrowser('leftwidget_my_research');

	leftwidget_my_research.id = 'leftwidget_my_research';
    leftwidget_my_research.title.caption = '我的研究';
	leftwidget_my_research.title.label = '我的研究';

	/*
	const leftwidget_help_doc = new CommandPalette(app);
	leftwidget_help_doc.id = 'leftwidget_help_doc';
    leftwidget_help_doc.title.caption = '帮助文档';
	leftwidget_help_doc.title.label = '帮助文档';
	leftwidget_help_doc.commands.addCommand(help_doc.fundamental_data, {
	  label: '基本面数据使用说明',
	  isEnabled: () => true,
	  isVisible: () => true,
	  iconClass: helpdoc_iconclass,
	  execute: async () => {
        // Open the newly created file with the 'Editor'
        return leftwidget_help_doc.commands.execute('docmanager:open', {
          path: file_path+'fundamental_data.txt',
          factory: 'Editor',
        });
      },
	});
	leftwidget_help_doc.addItem({
	  command: help_doc.fundamental_data,
	  category: '帮助文档',
	  args: {isPalette: true}
	});
	*/
	
  // Add the file browser widget to the application restorer.
	restorer.add(leftwidget_backtest_manage, NAMESPACE);
    app.shell.add(leftwidget_backtest_manage, 'left', { rank: 600 });
    //labShell.add(leftwidget_backtest_manage, "left", { rank: 1000 });
	
    restorer.add(leftwidget_factor_repo, NAMESPACE);
    app.shell.add(leftwidget_factor_repo, 'left', { rank: 601 });
	
    restorer.add(leftwidget_research_report, NAMESPACE);
    app.shell.add(leftwidget_research_report, 'left', { rank: 602 });
	
	restorer.add(leftwidget_stock_risk, NAMESPACE);
    app.shell.add(leftwidget_stock_risk, 'left', { rank: 603 });
	
	restorer.add(leftwidget_risk_performance, NAMESPACE);
    app.shell.add(leftwidget_risk_performance, 'left', { rank: 604 });
	
	restorer.add(leftwidget_my_research, NAMESPACE);
    app.shell.add(leftwidget_my_research, 'left', { rank: 605 });
	
	restorer.add(leftwidget_help_doc, NAMESPACE);
    app.shell.add(leftwidget_help_doc, 'right', { rank: 605 });
  }
};

export default left_widget_plugin;






/*
class ExampleWidget extends Widget {
  constructor() {
    super();
    this.addClass('jp-GitHubBrowser');
	this.layout = new PanelLayout();
	//(this.layout as PanelLayout).addWidget(browser);
    this.id = 'github-file-browser';
    this.title.label = 'Widget Example View';
	this.title.caption = 'Browser';
    this.title.iconClass = 'jp-GitHub-icon jp-SideBar-tabIcon';
  }
}
*/
/**
 * A widget that hosts an editable field,
 * used to host the currently active GitHub
 * user name.
 */

  
  