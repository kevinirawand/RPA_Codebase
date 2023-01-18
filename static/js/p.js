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

    function divider() {
        this.addInput("a", "number");
        this.addInput("b", "number");
 
        this.addOutput("result", "number");
 
      
        //this.widget = this.addWidget("number","value",1,"value");
        //this.widgets_up = true;
        //this.size = [180, 30];
    }

    addition.title = "divider";
    addition.desc = "divider";

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

    function accuweather() {
        this.addInput("result", "number");
        // this.addProperty("selected_city", ""); 
        // this.addProperty("url_accu_weather", "");  
        // this.addProperty("api_target", ""); 
        // this.addOutput("result", "number");
        this.addOutput("result", "number");
        this.addProperty("a", "0"); 

        //this.widget = this.addWidget("number","value",1,"value");
        //this.widgets_up = true;
        //this.size = [180, 30];
   }

   accuweather.title = "accuweather";
   accuweather.desc = "scraper";

   LiteGraph.registerNodeType("basic/accuweather", accuweather);

 })(this);
