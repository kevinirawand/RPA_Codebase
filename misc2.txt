//basic nodes
(function (global) {
   var LiteGraph = global.LiteGraph;

   function addition() {
      this.addInput("a", "number");
      this.addInput("b", "number");

      this.addOutput("result", "number");


      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   addition.title = "addition";
   addition.desc = "addition";

   LiteGraph.registerNodeType("basic/addition", addition);

   function divider() {
      this.addInput("a", "number");
      this.addInput("b", "number");

      this.addOutput("result", "number");


      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   divider.title = "divider";
   divider.desc = "divider";

   LiteGraph.registerNodeType("basic/divider", divider);

   function integer() {

      this.addOutput("result", "number");
      this.addProperty("a", "0");

      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   integer.title = "integer";
   integer.desc = "integer";

   LiteGraph.registerNodeType("basic/integer", integer);

   function result() {
      this.addInput("result", "number");

      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   result.title = "end";
   result.desc = "end";

   LiteGraph.registerNodeType("basic/result", result);

   function start() {

      this.addOutput("result", "number");
      this.addProperty("a", "0");

      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   start.title = "start";
   start.desc = "start";

   LiteGraph.registerNodeType("basic/start", start);

   function buka_browser() {
      // this.addOutput("result", "number");
      this.addInput("a", "number");
      this.addOutput("result", "number");
      this.addProperty("url", "https://citylab.itb.ac.id");
      this.addProperty("browser", "Chrome");
      this.addProperty("a", "0");

      //this.widget = this.addWidget("number","value",1,"value");
      //this.widgets_up = true;
      //this.size = [180, 30];
   }

   buka_browser.title = "Buka Browser";
   buka_browser.desc = "Node untuk membuka browser";

   LiteGraph.registerNodeType("basic/buka_browser", buka_browser);

   class data_BPBD {
      constructor() {
         this.addInput("a", "number");
         // this.addOutput("file", "string");
         this.addOutput("result", "number");
         this.addProperty("url", "http://bpbd.semarangkota.go.id/pages/data-bencana")
         this.addProperty("browser", "Chrome");
         this.addProperty("a", "0");
         this.size = [180, 30];
      }
      // onExecute() {
      //    console.info(this.properties.url)
      //    this.setOutputData(0, this.properties.url);
      // }
      getTitle() {
         if (this.flags.collapsed) {
            return this.properties.url;
         }
         return this.title;
      }
   }

   // function data_BPBD() {
   //    this.addInput("a", "number");
   //    this.addOutput("result", "number");
   //    this.addProperty("url", "http://bpbd.semarangkota.go.id/pages/data-bencana")
   //    this.addProperty("browser", "Chrome");
   //    this.addProperty("a", "0");
   // }
   data_BPBD.title = "Data BPBD";
   data_BPBD.desc = "Pengambilan data BPBD";
   LiteGraph.registerNodeType("basic/data_bpbd", data_BPBD);


   /**
    * CONST STRING
    */
   class ConstantString {
      constructor() {
         this.addOutput("string", "string");
         this.addProperty("value", "");
         this.widget = this.addWidget("text", "value", "", "value"); //link to property value
         this.widgets_up = true;
         this.size = [180, 30];
      }
      onExecute() {
         this.setOutputData(0, this.properties["value"]);
      }
      onDropFile(file) {
         var that = this;
         var reader = new FileReader();
         reader.onload = function (e) {
            that.setProperty("value", e.target.result);
         };
         reader.readAsText(file);
      }
   }
   ConstantString.title = "Const String";
   ConstantString.desc = "Constant string";
   LiteGraph.registerNodeType("basic/string", ConstantString);


   /**
    * CONST NUMBER
    */
   class ConstantNumber {
      constructor() {
         this.addOutput("value", "number");
         this.addProperty("value", 1.0);
         this.widget = this.addWidget("number", "value", 1, "value");
         this.widgets_up = true;
         this.size = [180, 30];
      }
      onExecute() {
         this.setOutputData(0, parseFloat(this.properties["value"]));
      }
      getTitle() {
         if (this.flags.collapsed) {
            return this.properties.value;
         }
         return this.title;
      }
      setValue(v) {
         this.setProperty("value", v);
      }
      onDrawBackground(ctx) {
         //show the current value
         this.outputs[0].label = this.properties["value"].toFixed(3);
      }
   }
   ConstantNumber.title = "Const Number";
   ConstantNumber.desc = "Constant number";
   LiteGraph.registerNodeType("basic/const", ConstantNumber);


   /**
    * VALUE WATCHER
    */
   class Watch {
      constructor() {
         this.size = [60, 30];
         this.addInput("value", 0, { label: "" });
         this.value = 0;
      }
      static toString(o) {
         if (o == null) {
            return "null";
         } else if (o.constructor === Number) {
            return o.toFixed(3);
         } else if (o.constructor === Array) {
            var str = "[";
            for (var i = 0; i < o.length; ++i) {
               str += Watch.toString(o[i]) + (i + 1 != o.length ? "," : "");
            }
            str += "]";
            return str;
         } else {
            return String(o);
         }
      }
      onExecute() {
         if (this.inputs[0]) {
            this.value = this.getInputData(0);
         }
      }
      getTitle() {
         if (this.flags.collapsed) {
            return this.inputs[0].label;
         }
         return this.title;
      }
      onDrawBackground(ctx) {
         //show the current value
         this.inputs[0].label = Watch.toString(this.value);
      }
   }
   Watch.title = "Watch";
   Watch.desc = "Show value of input";
   LiteGraph.registerNodeType("basic/watch", Watch);


   // function save_to_db() {
   //    this.addInput("BPBD File", "file,number");
   //    this.addOutput("save", "save,number");
   //    // console.info(file)
   // }

   // save_to_db.title = 'Save to DB';
   // save_to_db.desc = 'Save data ke database';

   // LiteGraph.registerNodeType('basic/save_to_db', save_to_db);
   // LiteGraph.wrapFunctionAsNode('/basic/save_to_db',)
})(this);
