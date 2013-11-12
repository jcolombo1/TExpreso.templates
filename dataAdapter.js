/** 
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*   makeTDA function - Oct/2013
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*  Copyright © 2013 Jorge Colombo (Buenos Aires, Argentina); 
*  Licensed MIT 
*
*  contacto: jcolombo@ymail.com
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*	
*/

/* window */
(function (window) {
    'use strict';
	
	/**
    *    Injecta en cada propiedad individual del objeto las propiedades "helpers" que facilitan el ensamblado de codigo html resultante en los templates TExpreso.
    *    Las que inyectan html attribs (comienzan en _$a...), al momento de ser usadas en templates, debe hacerse como scaped-data, o sea: {{{_$aXXXX}}} -entre triples
    *    corchetes, no en dobles!).
    */
    var adapt = function(o,ns) {
        if (!o.type) {
            if (typeof o==='object') { 
				for (var i in o){
					if (o instanceof Array) adapt(o[i],(ns?ns+'['+i+']':'')); 
					else adapt(o[i],(ns?ns+'.':'')+i); 
				};
			};
            return;
        };
		
		o.name = o.name ? o.name : ns;
		o._$isInput = !!(String(o.type)).match(/(text|password|url|search|email|time|date|datetime|number|color|tel)/i);
		o._$isText = (!o.type || o.type=='text' );
		o._$isTextarea = (o.type=='textarea');
		o._$isPassword = (o.type=='password');
		o._$isCheckbox = (o.type=='checkbox');
		o._$isRadio = (o.type=='radio');
		o._$isCheckboxOrRadio = (o.type=='checkbox' || o.type=='radio');
		o._$isSelect = (o.type=='select');
		o._$isHidden = (o.type=='hidden');
		o._$isTablelist = (o.type=='tablelist');
		
		o._$aType = o.type ? "type='"+o.type+"'" : "type='text'";
		o._$aId = o.id ? "id='"+o.id+"'" : null;
		o._$aPlaceholder = o.placeholder ? "placeholder='"+o.placeholder+"'" : null;
		o._$aClass = o._class ? "class='"+o._class+"'" : null;
		o._$aName = o.name ? "name='"+o.name+"'" : null;
		o._$aValue = o.value && o.type!='radio' ? "value='"+o.value+"'" : null;
		o._$aChecked = o.checked ? "checked" : null;
		o._$aRequired = o.required ? "required" : null;
		o._$aReadonly = o.readonly ? "readonly" : null;
		
        if(o._$isSelect || o._$isRadio) {
            var arr = ['_$aChecked','checked'];
            if (o._$isSelect) {
                arr = ['_$aSelected','selected'];
                o.value = o.value ? o.value : o.options.length>0 ? o.options[0].value ? o.options[0].value : o.options[0].text : "";
                o._$aSize = o.size>1 ? "size='"+o.size+"'" : null;
                o._$aMultiple = o.multiple ? "multiple" : null;
            };
            for (var j in o.options) {
                if (o.options[j].value == o.value || o.options[j].text == o.value) o.options[j][arr[0]] = arr[1];
                else o.options[j][arr[0]] = undefined;
                o.options[j]._$aValue = o.options[j].value ? "value='"+o.options[j].value+"'" : "";
				o.options[j]._$aId = o.id ? "id='"+o.id+"-"+j+"'" : undefined;
            }
        }
        
    };
	
	if (!window.dataAdapter) window.dataAdapter = adapt;
	
}(window));

