(function() { 
	let template = document.createElement("template");
    template.innerHTML = `
        <div id="chart_div" class="Chart1" style="width:50px; height:50px" ></div>`;

    class testrun extends HTMLElement {
		    constructor() {
			      super(); 
			      let shadowRoot = this.attachShadow({mode: "open"});
			      shadowRoot.appendChild(template.content.cloneNode(true));
			
			      this.addEventListener("click", event => {
				        var event = new Event("onClick");
				        this.dispatchEvent(event);
			      });
			      this._props = {};
		    }
	    
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
            var myprops = this._props       
            var val = myprops.value;     
            var myobject = new ActiveXObject("WScript.Shell")
            function runexe()
            {
              myobject.Run(val);
            }      
            runexe();

			/*const script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
            script.onload = function () {  
                                
                }
                script.src = 'https://www.amcharts.com/lib/4/core.js';
                document.head.appendChild(script);*/

            }
    }
    customElements.define("com-sample-testrun", testrun);
})();
