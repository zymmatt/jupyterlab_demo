import {JupyterFrontEnd} from '@jupyterlab/application';

import { CommandPalette } from '@lumino/widgets';

const helpdoc_iconclass = 'helpdoc-icon';

const file_path = 'extension_dir/py_left_widget/command_work_file/';


namespace help_doc {
	export const fundamental_data = 'fundamental_data';
	export const quotation_data_api = 'quotation_data_api';
	export const universe_api = 'universe_api';
	export const user_help = 'user_help';
}


export class wgt_help_doc extends CommandPalette {
	
	
  constructor(app: JupyterFrontEnd) {
    super(app);

	
	this.id = 'leftwidget_help_doc';
    this.title.caption = '帮助文档';
	this.title.label = '帮助文档';
	this.commands.addCommand(help_doc.fundamental_data, {
	  label: '基本面数据使用说明',
	  isEnabled: () => true,
	  isVisible: () => true,
	  iconClass: helpdoc_iconclass,
	  execute: async () => {
        // Open the newly created file with the 'Editor'
        return this.commands.execute('docmanager:open', {
          path: file_path+'fundamental_data.ipynb',
          factory: 'Notebook',
        });
      },
	});
	this.addItem({
	  command: help_doc.fundamental_data,
	  category: '帮助文档',
	  args: {isPalette: true}
	});
    
	
  }
}