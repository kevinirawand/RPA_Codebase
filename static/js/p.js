//basic nodes
(function(global) {
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

   

    function integer() {
        
         this.addOutput("result", "number");
 
       this.addProperty("a", "+"); 
      
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

    result.title = "result";
    result.desc = "result";

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

    function accu_weather() {
        this.addOutput("result", "boolean");
        this.addProperty("selected_city", ""); 
        this.addProperty("url_accu_weather", "");  
        this.addProperty("api_target", ""); 

        //this.widget = this.addWidget("number","value",1,"value");
        //this.widgets_up = true;
        //this.size = [180, 30];
   }

   accu_weather.title = "accu weather";
   accu_weather.desc = "scraper";

   LiteGraph.registerNodeType("basic/accu_weather", accu_weather);

   

 })(this);
