import {JupyterFrontEnd} from '@jupyterlab/application';
import { fileIcon } from '@jupyterlab/ui-components';
import { CommandPalette} from '@lumino/widgets';
import { MainAreaWidget } from '@jupyterlab/apputils';
import { CounterWidget } from './public_factor/public_asset_stg';
//import {request} from "requests-helper";
import {factor_amplitude_Widget} from './public_factor/amplitude';
import { INotebookTracker } from '@jupyterlab/notebook';
import { IDocumentManager } from '@jupyterlab/docmanager';
namespace factor_repo {
	export const private_amplitude_prehandle1 = 'private_amplitude_prehandle1';
	export const private_asset_stg_prehandle1 = 'private_asset_stg_prehandle1';
	export const private_beta_120d_prehandle1 = 'private_beta_120d_prehandle1';
	export const private_equal_weight_factors = 'private_equal_weight_factors';
	export const public_amplitude = 'public_amplitude';
	export const public_asset_stg = 'public_asset_stg';
	export const public_assetgrowth = 'public_assetgrowth';
	export const public_assetturnover = 'public_assetturnover';
}


//const file_path = 'extension_dir/py_left_widget/command_work_file/';
//let unique = 0;


/*
class IFrameWidget extends Widget {
  path: string;
  local_file: Boolean;
  constructor(uri_path:string, label:string) {
    super();
    this.id = `${uri_path}-${unique}`;
    this.path = uri_path;
    this.local_file = false;

    this.init(label);
  }

  async init(label:string) {
    const iconClass = `favicon-${unique}`;
    this.title.iconClass = iconClass;
    this.title.label = label;
    this.title.closable = true;

    this.local_file = this.path.startsWith("local://");

    unique += 1;

    if (!this.local_file && !this.path.startsWith("http")) {
      // use https, its 2020
      this.path = `https://${this.path}`;
    }

    const div = document.createElement("div");
    div.classList.add("iframe-widget");
    const iframe = document.createElement("iframe");

    if (!this.local_file) {
      // External website

      // First try to get directly
      const res = await request("get", this.path);
      if (res.ok && !res.headers.includes("Access-Control-Allow-Origin")) {
        // Site does not disable iframe

        // eslint-disable-next-line no-console
        console.log("site accessible: proceeding");

        iframe.src = this.path;

        const favicon_url = new URL("/favicon.ico", this.path).href;

        const res2 = await request("get", favicon_url);
        if (res2.ok) {
          const style = document.createElement("style");
          style.innerHTML = `div.${iconClass} { background: url("${favicon_url}"); }`;
          document.head.appendChild(style);
        }
      } else {
        // Site is blocked for some reason, so attempt to proxy through python.
        // Reasons include: disallowing iframes, http/https mismatch, etc

        // eslint-disable-next-line no-console
        console.log(`site failed with code ${res.status.toString()}`);

        // eslint-disable-next-line no-empty
        if (res.status === 404) {
          // nothing we can do
          // eslint-disable-next-line no-empty
        } else if (res.status === 401) {
          // nothing we can do
        } else {
          // otherwise try to proxy
          const favicon_url = `${PageConfig.getBaseUrl()}iframes/proxy?path=${new URL("/favicon.ico", this.path).href}`;

          this.path = `iframes/proxy?path=${encodeURI(this.path)}`;
          iframe.src = PageConfig.getBaseUrl() + this.path;
          // eslint-disable-next-line no-console
          console.log(`setting proxy for ${this.path}`);

          const res2 = await request("get", favicon_url);
          if (res2.ok) {
            const style = document.createElement("style");
            style.innerHTML = `div.${iconClass} { background: url("${favicon_url}"); }`;
            document.head.appendChild(style);
          }
        }
      }
    } else {
      // Local file, replace url and query for local
      // eslint-disable-next-line no-console
      console.log(`fetching local file ${this.path}`);
      this.path = `iframes/local?path=${encodeURI(this.path.replace("local://", ""))}`;
      iframe.src = PageConfig.getBaseUrl() + this.path;
    }

    div.appendChild(iframe);
    this.node.appendChild(div);
  }
}


*/


export class wgt_factor_repo extends CommandPalette {
	
	
  constructor(app: JupyterFrontEnd,nbtracker:INotebookTracker, document:IDocumentManager) {
    super(app);

    this.id = 'leftwidget_factor_repo';
    this.title.caption = '因子库';
	this.title.label = '因子库';
	
	this.commands.addCommand(factor_repo.private_amplitude_prehandle1, {
	  label: 'amplitude_预处理_1',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.private_amplitude_prehandle1}`);
	  }
	});
	this.addItem({
	  command: factor_repo.private_amplitude_prehandle1,
	  category: '私有因子',
	  args: {isPalette: true}
	});
	
	this.commands.addCommand(factor_repo.private_asset_stg_prehandle1, {
	  label: 'asset_stg_预处理_1',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.private_asset_stg_prehandle1}`);
	  }
	});
	this.addItem({
	  command: factor_repo.private_asset_stg_prehandle1,
	  category: '私有因子',
	  args: {isPalette: true}
	});
	
	this.commands.addCommand(factor_repo.private_beta_120d_prehandle1, {
	  label: 'beta_120d_预处理_1',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.private_beta_120d_prehandle1}`);
	  }
	});
	this.addItem({
	  command: factor_repo.private_beta_120d_prehandle1,
	  category: '私有因子',
	  args: {isPalette: true}
	});
	
	
	this.commands.addCommand(factor_repo.private_equal_weight_factors, {
	  label: 'equal_weight_factors',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.private_equal_weight_factors}`);
	  }
	});
	this.addItem({
	  command: factor_repo.private_equal_weight_factors,
	  category: '私有因子',
	  args: {isPalette: true}
	});
	
	
	this.commands.addCommand(factor_repo.public_amplitude, {
	  label: '振幅(amplitude)',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.public_amplitude}`);
		const content = new factor_amplitude_Widget(app);
        const widget = new MainAreaWidget<factor_amplitude_Widget>({ content });
        widget.title.label = '振幅(amplitude)';
        widget.title.icon = fileIcon;
		app.shell.add(widget, 'main');
		//const path = 'http://192.168.214.199:31020/';
        //const widget = new IFrameWidget(path, '振幅(amplitude)');
        //app.shell.add(widget);
        //app.shell.activateById(widget.id);
	  }
	});
	this.addItem({
	  command: factor_repo.public_amplitude,
	  category: '公共因子',
	  args: {isPalette: true}
	});
	
	
	this.commands.addCommand(factor_repo.public_asset_stg, {
	  label: '总资产短期(1年)历史增长率(asset_stg)',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.public_asset_stg}`);
		const content = new CounterWidget(app);
        const widget = new MainAreaWidget<CounterWidget>({ content });
        widget.title.label = '总资产短期(1年)历史增长率(asset_stg)';
        widget.title.icon = fileIcon;
        app.shell.add(widget, 'main');
	  }
	});
	this.addItem({
	  command: factor_repo.public_asset_stg,
	  category: '公共因子',
	  args: {isPalette: true}
	});
	
	
	this.commands.addCommand(factor_repo.public_assetgrowth, {
	  label: '总资产增长率(assetgrowth)',
	  isEnabled: () => true,
	  isVisible: () => true,
	  //iconClass: fileIcon,
	  icon: fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.public_assetgrowth}`);
	  }
	});
	this.addItem({
	  command: factor_repo.public_assetgrowth,
	  category: '公共因子',
	  args: {isPalette: true}
	});
	
	this.commands.addCommand(factor_repo.public_assetturnover, {
	  label: '资产周转率(assetturnover)',
	  isEnabled: () => true,
	  isVisible: () => true,
	  icon:  fileIcon,
	  execute: () => {
		console.log(`Executed ${factor_repo.public_assetturnover}`);
	  }
	});
	this.addItem({
	  command: factor_repo.public_assetturnover,
	  category: '公共因子',
	  args: {isPalette: true}
	});
    
  }

}