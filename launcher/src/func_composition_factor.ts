import { Panel, Widget } from '@lumino/widgets';


export function composition_factor(shell:any):void{
    const panel_composition_factor = new Panel();
	panel_composition_factor.addClass('jp-example-view');
	panel_composition_factor.id = 'panel_composition_factor';
	panel_composition_factor.title.label = '合成因子';
	panel_composition_factor.title.closable = true;
	
	const textarea_div = document.createElement('textarea');
	textarea_div.id = 'texta1';
	textarea_div.value = 'NewTitle2';
	const title_options = { node: <HTMLTextAreaElement>textarea_div};
	const title_wgt = new Widget(title_options);
	//title_wgt.node.textContent = 'NewTitle';
	title_wgt.addClass('jp-ButtonWidget');
	
	const button_div =  document.createElement('button');
	button_div.id = 'bt1';
	const button_options = { node: button_div };
	const button_wgt = new Widget(button_options);
	button_wgt.node.textContent = 'Click me';
	button_wgt.addClass('jp-ButtonWidget');
	button_wgt.node.addEventListener('click', () => {
		//const inputContant = (document.getElementById("texta1") as HTMLInputElement);
		//const inputContant = title_options.node;
		window.alert(title_options.node.value);
	});
	//document.getElementById('textarea').value;
	panel_composition_factor.addWidget(button_wgt);
	panel_composition_factor.addWidget(title_wgt);
	shell.add(panel_composition_factor, 'main');
	return ;
}

