(self["webpackChunkconradswebsite"]=self["webpackChunkconradswebsite"]||[]).push([[681],{366:function(){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},8759:function(){(function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var s=t.querySelector(".line-numbers-rows");if(s){var o=parseInt(t.getAttribute("data-start"),10)||1,r=o+(s.children.length-1);n<o&&(n=o),n>r&&(n=r);var a=n-o;return s.children[a]}}},resize:function(e){o([e])},assumeViewportIndependence:!0},s=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&s===window.innerWidth||(s=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var s=n.element,r=s.parentNode;if(r&&/pre/i.test(r.nodeName)&&!s.querySelector(".line-numbers-rows")&&Prism.util.isActive(s,e)){s.classList.remove(e),r.classList.add(e);var a,i=n.code.match(t),l=i?i.length+1:1,u=new Array(l+1).join("<span></span>");a=document.createElement("span"),a.setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=u,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),n.element.appendChild(a),o([r]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function o(e){if(e=e.filter((function(e){var t=r(e),n=t["white-space"];return"pre-wrap"===n||"pre-line"===n})),0!=e.length){var n=e.map((function(e){var n=e.querySelector("code"),s=e.querySelector(".line-numbers-rows");if(n&&s){var o=e.querySelector(".line-numbers-sizer"),r=n.textContent.split(t);o||(o=document.createElement("span"),o.className="line-numbers-sizer",n.appendChild(o)),o.innerHTML="0",o.style.display="block";var a=o.getBoundingClientRect().height;return o.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:a,sizer:o}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,s=e.lineHeights,o=e.oneLinerHeight;s[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var r=t.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else s[n]=o}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,s=0,o=0;o<n.length;o++)void 0===n[o]&&(n[o]=t.children[s++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}function r(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}})()},6547:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(6252);function o(e,t,n,o,r,a){return(0,s.wg)(),(0,s.iD)("aside",null,[(0,s.WI)(e.$slots,"aside-content",{},void 0,!0)])}var r={name:"AsideContent"},a=n(3744);const i=(0,a.Z)(r,[["render",o],["__scopeId","data-v-bf8389c8"]]);var l=i},5681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var s=n(6252);const o={class:"router-link-style"};function r(e,t,n,r,a,i){return(0,s.wg)(),(0,s.iD)("div",o,[((0,s.wg)(),(0,s.j4)((0,s.LL)(i.selectedComponent)))])}var a=n(3577);const i=e=>((0,s.dD)("data-v-2bc680fe"),e=e(),(0,s.Cn)(),e),l={class:"main-content background-color-about-page"},u={style:{"margin-top":"2em"}},c={style:{"font-size":"2em","background-color":"#000"}},h=["src"],d=i((()=>(0,s._)("p",{class:"paragraph-text break-text",style:{"padding-top":"2em"}},"Rough draft below - this is just an unpolished test example to show the code.",-1))),p=i((()=>(0,s._)("p",{class:"paragraph-text break-text",style:{"padding-top":"2em"}},"The cowculator is a fully functional calculator! The cowculator has been a project for fun/practice. It uses actual parsing, not the JavaScript eval() function which is considered insecure and bad practice to use! Building it had some challenges, and when undertaking a project like this one has to remember how much fine-tuning is involved. One challenge was implementing the parenthesis functionality. This was a step by step process thinking about which symbol came before or after another symbol. Some neat features were added into it, such as the ability to use the keyboard to type in the numbers, and having the numbers highlight the calculator numbers as they are typed, and also highlight them as the numbers are removed using the ← back arrow. ",-1))),f=i((()=>(0,s._)("p",{class:"paragraph-text break-text"}," The user can type in things like (2)(2) and this will automatically convert to (2)×(2). Typing in something incorrect like 2-+2 will also automatically convert to 2+2 and prioritize the last math operator entered. Some of these functions are pre-processed with the watcher as the user types and are not done in the cowculate() function itself! The copy answer to clipboard function doesn't copy anything until a result is actually evaluated, but will work for all mathmatical operations such as 2Moo*3Moo*2Moo etc. The cowculator also supports exponents and their use with parenthesis. The user can type in 2^2, 2+2^2*2, or 2(2)^3 and it will be evaluated correctly. ",-1))),g={class:"paragraph-text break-text"},m=i((()=>(0,s._)("code",null,"\n        addParenthesisAroundPowerSymbol(input) {\n          // Use regular expression to match number^number pattern\n          const regex = /(\\(\\d+\\)(?:\\^\\d+)*|\\d+(?:\\^\\d+)+)/g;\n          let output = input.replace(regex, '($1)');\n          // for now this fixes it, but it's not the best solution, forces multiplication symbol between parenthesis to fix mult error\n          let addMultParenthesis = output.replace(/\\)\\(/g, ')*(');\n\n          return addMultParenthesis;\n        },\n      ",-1))),b={style:{"padding-top":"1em"},class:"figure-stuff"},w=["src"],v=i((()=>(0,s._)("figcaption",null,[(0,s._)("b",null,"A"),(0,s.Uk)(") Binary Tree example showing how the cowculator code computes. The left tree result is 14, the right tree is -19, and an expression with parenthesis is shown. As shown, the binary tree evaluates each node starting from the bottom. Diagram made using: "),(0,s._)("a",{href:"https://vanya.jp.net/vtree/"},"https://vanya.jp.net/vtree/"),(0,s.Uk)(". ")],-1))),y=["src"],_=i((()=>(0,s._)("figcaption",null,[(0,s._)("b",null,"B"),(0,s.Uk)(") Binary Tree example of the left-most example from figure A: "),(0,s._)("b",null,"5*4-6=14"),(0,s.Uk)(", this comes directly from the cowculator output! ")],-1))),k=i((()=>(0,s._)("div",null,[(0,s._)("h4",{style:{"padding-top":"5em"},class:"sub-section-titles"},"Code that does the cowculations:"),(0,s._)("p",{class:"top-most-paragraph-space paragraph-text break-text"}," Here is the actual JavaScript code for the cowculator calculations themselves. It is a bit long, but it is a cowculator after all! ")],-1))),x=i((()=>(0,s._)("p",{class:"aside-text"},null,-1))),T=i((()=>(0,s._)("p",{class:"paragraph-text break-text top-most-paragraph-space"},[(0,s.Uk)(" Testing some other features in vue 3 on this page, page not finished! This button is using a class binding to change the color of the text. "),(0,s._)("a",{href:"https://vuejs.org/guide/essentials/class-and-style.html"},"https://vuejs.org/guide/essentials/class-and-style.html"),(0,s.Uk)(" and was using Composition API setup "),(0,s._)("a",{class:"text-links",href:"https://vuejs.org/api/composition-api-setup.html"}," https://vuejs.org/api/composition-api-setup.html"),(0,s.Uk)(" but is now using options API with computed class binding to enlarge the text and change the color. ")],-1))),C=["innerHTML"];function N(e,t,n,o,r,i){const N=(0,s.up)("router-link"),A=(0,s.up)("CowculatorCode"),S=(0,s.up)("AsideContent");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",null,[(0,s._)("div",u,[(0,s._)("h1",c,[(0,s.Wm)(N,{class:"text-links-no-underline",to:"/projects/cowculator"})])]),(0,s.Wm)(N,{class:"text-links-no-underline",to:"/projects/cowculator"},{default:(0,s.w5)((()=>[(0,s._)("img",{class:"cow-image",src:r.cowculatorUserInterface,alt:"Cowculator Picture"},null,8,h)])),_:1}),d,p,f,(0,s._)("p",g,[(0,s.Uk)(" Adding in the x^y power function was a challenge. The interesting part of how it computes powers is that for an expression like 2(3)^2^2 it will use the code: "),(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("        "),m,(0,s.Uk)("\n        ")]),(0,s.Uk)(" This will add parenthesis 2((3)^2^2) so powers get evaluated correctly. The multiplication symbol and power symbol in this parsing code both have the same precedence so adding in the paranthesis is a quick fix to force the code to first evaluate all exponents before multiplication. As the user, you don't see these additional parenthesis, but they are there in the code. ")]),(0,s._)("div",b,[(0,s._)("div",null,[(0,s._)("figure",null,[(0,s._)("img",{src:r.imagePath,alt:"Binary Tree example"},null,8,w),v]),(0,s._)("figure",null,[(0,s._)("img",{src:r.imagePathTwo,alt:"Binary Tree example 2"},null,8,y),_])])]),k,(0,s.Wm)(A)]),(0,s.Wm)(S,{class:"aside-padding"},{"aside-content":(0,s.w5)((()=>[x])),_:1}),(0,s._)("div",null,[T,(0,s._)("div",{class:(0,a.C_)(i.classObject)},[(0,s._)("span",{innerHTML:i.cowMessage},null,8,C)],2),(0,s._)("button",{style:{"margin-top":"2em","margin-bottom":"0.5em"},class:"button-35",onClick:t[0]||(t[0]=e=>i.setError())},"Feed cows!")])])}const A=e=>((0,s.dD)("data-v-0cc0772e"),e=e(),(0,s.Cn)(),e),S=A((()=>(0,s._)("p",{class:"paragraph-text break-text"}," This code takes the user input and parses through the expression to evaluate it correctly. Explaining this entirely step-by-step could take some time!",-1))),P=A((()=>(0,s._)("code",null,'\n      cowculate() {\n      /* Cow Moo cowculations */\n      /* This works with some preprocessing and then everything goes into stack and is parsed in a tree */\n\n      // clears all number tokens and math operations from previous inputs\n      this.userTokens = [];\n      this.operators = [];\n\n      // Here is an interesting way I found how to add in exponents with parsing. I just add in a \n      // set of parenthesis around the exponent part such as 5*2^2+5 changes to 5*(2^2)+5 , but the user doesn\'t see this\n      // figuring out these solutions is rewarding but since this has been a built from scratch project it feels like yarn and duck tape too, which is okay!\n      // but everything works! and I am happy with the results\n      // This is also fixing )( to )*( so it can be parsed correctly\n      this.cleanedExpression = this.addParenthesisAroundPowerSymbol(this.cleanedExpression);\n\n      try {\n        // checks that it doesn\'t have parenthesis and a valid math operator so it doesn\'t output when there is nothing to output\n        //if (!/-?\\(?\\d+\\.?\\d*\\)?([+\\-*/÷\\u00D7]-?\\(?\\d+\\.?\\d*\\)?)*$/.test(str)) {\n        //  this.result = "";\n        //} else {          \n\n        var input = this.cleanedExpression;\n        let currentNumber = "";\n\n        for (let i = 0; i < input.length; i++) {\n          const char = input.charAt(i);\n          // Check for expressions like -(2+2) and 2*-(2+2) where a negative sign precedes a "(" parenthesis\n          // such as "-(" To solve this the expression in parenthesis is subtracted from 0\n          if (\n            char === "-" &&\n            (i === 0 || isNaN(input.charAt(i - 1))) &&\n            input.charAt(i + 1) === "("\n          ) {\n            // access helper function to push a 0 to the stack, this is for the use case such as "-(" To solve this the expression in parenthesis is subtracted from 0\n            this.userTokens.push(this.createNodes(true, 0));\n            this.operators.push("-");\n          }\n          // (char === "-" && (i === 0 || isNaN(input.charAt(i - 1))  ) checks that it\'s not 4-4 and is 4--4 for example!\n          else if (\n            !isNaN(char) || char === "." || (char === "-" && (i === 0 || (isNaN(input.charAt(i - 1)) && input.charAt(i - 1) !== ")" && input.charAt(i + 1) !== "(")))\n          ) {\n            currentNumber += char;\n            // Does operations like (2)2 = 4\n            if (")" === input.charAt(i - 1)) {\n              this.operators.push("*");\n            }\n\n            // Does operations like 2(2) = 4\n            if ("(" === input.charAt(i + 1)) {\n              this.operators.push("*");\n            }\n          } else {\n            if (currentNumber !== "") {\n              // access helper function to push a node and number to the stack\n              this.userTokens.push(this.createNodes(true, parseFloat(currentNumber)));\n              currentNumber = "";\n            }\n            if (char === "+" || char === "-") {\n              while (\n                this.operators.length > 0 &&\n                this.operators[this.operators.length - 1] !== "("\n              ) {\n                const node = this.createNodes();\n                this.userTokens.push(node);\n              }\n              this.operators.push(char);\n            } else if (char === "*" || char === "/" || char === "!") {\n              while (\n                this.operators.length > 0 &&\n                this.operators[this.operators.length - 1] !== "(" &&\n                (this.operators[this.operators.length - 1] === "*" ||\n                  this.operators[this.operators.length - 1] === "/")\n              ) {\n                const node = this.createNodes();\n                this.userTokens.push(node);\n              }\n              this.operators.push(char);\n            }\n            else if (char === "^") {\n              while (\n                this.operators.length > 0 &&\n                this.operators[this.operators.length - 1] !== "(") {\n                const node = this.createNodes();\n                this.userTokens.push(node);\n              }\n              this.operators.push(char);\n            } else if (char === "(") {\n              this.operators.push(char);\n\n            } else if (char === ")") {\n              while (\n                this.operators.length > 0 &&\n                this.operators[this.operators.length - 1] !== "("\n              ) {\n                const node = this.createNodes();\n                this.userTokens.push(node);\n              }\n\n              if (\n                this.operators.length > 0 &&\n                this.operators[this.operators.length - 1] === "("\n              ) {\n                this.operators.pop();\n              }\n            }\n          }\n          // This was an array for testing each number addition to the expression\n          // this.arrayOfNumbersOnly.push(currentNumber);\n          // console.log(this.arrayOfNumbersOnly)\n        }\n        // Add the last number if there is one\n        if (currentNumber !== "") {\n          // access helper function to push a node and number to the stack\n          this.userTokens.push(this.createNodes(true, parseFloat(currentNumber)));\n        }\n        // Perform remaining operations\n        while (this.operators.length > 0) {\n          const node = this.createNodes();\n          this.userTokens.push(node);\n        }\n        // calculate the final result\n        var result = this.evaluate(this.userTokens[0]);\n\n        // This goes to output all the results in its own function\n        this.setOutputs(result);\n\n        // Good article about using NaN in JavaScript like the function above does ^\n        // https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447#:~:text=In%20JavaScript%2C%20the%20best%20way,NaN%20will%20always%20return%20true%20.\n        // This method works below, but others could also work.\n\n      } catch (error) {\n        this.result = null;\n      }\n    },\n    ',-1))),E=A((()=>(0,s._)("hr",{style:{"background-color":"blue",height:"2px"}},null,-1))),I=A((()=>(0,s._)("p",{class:"paragraph-text break-text"},"Adding in explanations on how the buttons on the cowculator are generated. This generates the whole main cowculator interface with buttons using a v-for loop. Specific class styling are applied based on the button type referenced from the buttonList array. The buttonList array is used to generate the buttons and the isActive array is used to highlight the numbers as they are pressed on the keyboard or removed with the <- back button. ",-1))),U=A((()=>(0,s._)("p",{class:"paragraph-text break-text"},"The buttonList array is used to generate the buttons in the v-for loop. Depending on the button function, whatever argument that is inputted into the addNumber function will be used to determine what the button does. ",-1))),D=A((()=>(0,s._)("code",null,'\n\n    // This is the list/array of buttons that are used to generate the cowculator buttons\n    buttonList: ["\\u00D7", "1", "2", "3", "\\u00F7", "4", "5", "6", "-", "7", "8", "9", "+", "<-", ".", "0", "power", "(", ")", "Moo"],\n\n\n    // this decides what each button type does\n    addNumber(buttonValueToAdd) {\n      if (buttonValueToAdd === "<-") {\n        this.removeEntry();\n        this.checkInput();\n      } else if (buttonValueToAdd === "power") {\n        this.squared();\n      }\n      else if (buttonValueToAdd === "Moo") {\n        this.addMoo(), this.mooButtonHit();\n      } else {\n        this.expression += buttonValueToAdd;\n      }\n    },',-1))),j=A((()=>(0,s._)("hr",{style:{"background-color":"blue",height:"2px"}},null,-1))),L=A((()=>(0,s._)("code",null,"\n    //helper function to create nodes - this separates the concerns and makes functions shorter\n    createNodes(pushNode = false, number = 0){\n\n      // create a node class to store the values\n      class Node {\n            constructor(value, left = null, right = null) {\n              this.value = value;\n              this.left = left;\n              this.right = right;\n            }\n          }\n          // if a node only needs to be built then this first IF is used\n          if (pushNode === false) {          \n            const op = this.operators.pop();\n            const right = this.userTokens.pop();\n            const left = this.userTokens.pop();\n            return new Node(op, left, right);\n            // if a node has to input a specific number then this second ELSE is used\n          }else{\n            return new Node(number);\n          }\n        },\n\n    ",-1))),z=A((()=>(0,s._)("p",{class:"paragraph-text break-text"}," This code below sets the outputs the user sees, and all the final results of the code:",-1))),B=A((()=>(0,s._)("code",null,'\n            // This just sets the outputs to the result of the cowculation function so the function is shorter    \n            setOutputs(result){\n            // If no calculations are done don\'t need to show a number is equal to itself\n            // Quick way to make sure output isn\'t 5555 = 5555 if the user just enters a number\n            if (result == this.cleanedExpression) { \n                    result = "";\n                }\n            \n                // IMPORTANT - THIS IS WHERE ALL THE OUTPUTS ARE COMPUTED!\n                else if (!Number.isNaN(result)) {\n                    // show equal sign and results\n                    this.showText = true;\n                    // create the binary tree structure\n                    this.treeNodeCalculations = this.userTokens[0];\n                    //console.log(typeof this.treeNodeCalculations)\n                    //const myJSON = JSON.stringify(this.treeNodeCalculations);\n                    //console.log(myJSON);\n\n                    this.treeData = this.treeNodeCalculations;\n\n                    this.tree = this.treeNodeCalculations;\n\n                    this.showDescriptionText = true;\n\n                    // this puts the final calculation into a variable to be copied from the clipboard\n                    this.message = result;\n                    \n                    // this outputs the FINAL calculation\n                    this.result = result;\n\n                    // At the moment this is a bit of a hack to get the svg to clear and redraw\n                    this.clearSVG();\n\n                    // Append new SVG content\n                    const svgContainer = this.$refs.svgContainer;\n                    svgContainer.appendChild(this.svgContent);\n                    this.svgContent.setAttribute("width", "100%");\n                }        \n            },\n        ',-1))),M=A((()=>(0,s._)("p",{class:"paragraph-text break-text"}," This code below evalutes the nodes that are parsed:",-1))),O=A((()=>(0,s._)("code",null,'\n            // Perform calculations\n            evaluate(node) {\n            if (node.left === null && node.right === null) {\n                return node.value;\n            }\n            var left = this.evaluate(node.left);\n            var right = this.evaluate(node.right);\n\n            //console.log(left, node.value, right);\n            //console.log(node);\n\n            // This shows the operator to the user in \'×\' or \'÷\' format and not * or /\n            let viewer_symbol_node = "";\n            if (node.value === "*") {\n                viewer_symbol_node = "\\u00D7";\n            } else if (node.value === "/") {\n                viewer_symbol_node = "\\u00F7";\n            } else viewer_symbol_node = node.value;\n            // this.currentNode = "Left node: " + left +" Operator: " + viewer_symbol_node + " Right node: " + right;\n            this.leftNode = left;\n            this.operator = viewer_symbol_node;\n            this.rightNode = right;\n            // Switched this to a switch - simpler and more readable for this use case\n            switch (node.value) {\n                case "+":\n                return left + right;\n                case "-":\n                return left - right;\n                case "*":\n                return left * right;\n                case "/":\n                return left / right;\n                // This is the power function\n                case "^":         \n                return Math.pow(left, right);\n                default:\n                return null;\n            }\n            },         \n        ',-1)));function F(e,t,n,o,r,i){return(0,s.wg)(),(0,s.iD)("div",null,[S,(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("    "),P,(0,s.Uk)("   \n    ")]),E,I,(0,s._)("pre",{class:(0,a.C_)(["language-html line-numbers","code-format"])},[(0,s.Uk)("      "),(0,s._)("code",null,"\n\n      <div class=\"grid-container cow-image\">\n        <button v-for=\"button in buttonList\" :key=\"button\" :class=\"['grid-item', {\n            'grid-item-symbols': button === '+' || button === '-' || button == '\\u00F7' || button == '\\u00D7', 'tooltip' : button === 'power',\n            active: isActive[button]\n          }]\" @click=\"addNumber(button)\">\n\n            <div v-if=\"button === '<-'\" class=\"arrow-position\">\n              <div class=\"left-arrow\"></div>\n            </div>      \n            <div v-else-if=\"button === 'power'\">\n              <i>x<sup>y</sup></i>\n              <span class=\"tooltiptext\">"+(0,a.zw)(e.showTooltip)+"</span>\n            </div>\n            <div v-else>\n              "+(0,a.zw)(e.button)+"\n            </div>\n\n        </button>\n      </div>\n      \n      ",1),(0,s.Uk)("   \n    ")]),U,(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("    "),D,(0,s.Uk)("   \n    ")]),j,(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("    "),L,(0,s.Uk)("   \n    ")]),z,(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("    "),B,(0,s.Uk)("   \n    ")]),M,(0,s._)("pre",{class:(0,a.C_)(["language-JavaScript line-numbers","code-format"])},[(0,s.Uk)("    "),O,(0,s.Uk)("   \n    ")])])}n(8759);var H=n(5660),R=n.n(H),q={name:"CowculatorCode",data(){return{}},mounted(){R().highlightAll()}},J=n(3744);const V=(0,J.Z)(q,[["render",F],["__scopeId","data-v-0cc0772e"]]);var W=V,Z=n(6547),$={name:"CowculatorDescription",components:{AsideContent:Z.Z,CowculatorCode:W},data(){return{isActive:!0,error:null,isButtonClicked:!1,goodCowMessage:"The cows are fed, they are now happily mooing! <br> You saved the day!",badCowMessage:"Red Alert: <br> The cows are mooing disgruntledly! <br> Heroically save them by pressing the Feed cows button!",imagePath:n(7415),imagePathTwo:n(3455),cowculatorUserInterface:n(5851)}},computed:{classObject(){return{active:this.isActive&&!this.error,"text-danger":this.error&&"fatal"===this.error.type}},cowMessage(){return this.isButtonClicked?this.goodCowMessage:this.badCowMessage}},methods:{setError(){this.error={type:"fatal"},this.isButtonClicked=!0}}};const G=(0,J.Z)($,[["render",N],["__scopeId","data-v-2bc680fe"]]);var K=G;const Y=e=>((0,s.dD)("data-v-da6881ba"),e=e(),(0,s.Cn)(),e),Q=Y((()=>(0,s._)("pre",{class:"language-python code-format"},[(0,s.Uk)("    "),(0,s._)("code",null,'DRINK_COFFEE = True\n    website_finished = False\n    while website_finished is False:\n    print("Is it true that I am drinking coffee? " + "It is " + str(DRINK_COFFEE).lower() + ".")')],-1))),X=Y((()=>(0,s._)("p",{class:"homeview paragraph-text"}," Python doesn't officially syntactically have constants so it's capitalized to show it should not be modified \"DRINK_COFFEE=True\", but the code above emphasizes that work continues, and the coffee drinking will always continue. ",-1))),ee=Y((()=>(0,s._)("pre",{class:"language-python code-format"},[(0,s.Uk)("    "),(0,s._)("code",null,'# Defines a Python function to describe coffee\n    def describe_coffee(roast_level, origin, flavor_notes):\n        """\n        This function describes a cup of coffee based on its roast level, origin, and flavor notes.\n\n        :param roast_level: The roast level of the coffee, e.g. light, medium, dark.\n        :param origin: The origin of the coffee, e.g. Ethiopia, Colombia, Kenya.\n        :param flavor_notes: The flavor notes of the coffee, e.g. chocolate, caramel, citrus.\n        :return: A string describing the coffee.\n        """\n        return f"This {roast_level}-roasted coffee from {origin} has flavor notes of {flavor_notes}."\n\n    # Example usage of the function\n    coffee_description = describe_coffee("medium", "Colombia", "chocolate and caramel")\n    print(coffee_description)')],-1)));function te(e,t,n,o,r,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h1",null,(0,a.zw)(n.CoffeeTitle),1),(0,s._)("p",null,(0,a.zw)(n.CoffeeDescription),1),Q,X,ee])}n(366);var ne={name:"CoffeeFunction",mounted(){R().highlightAll()},components:R(),props:{CoffeeTitle:{type:String,required:!0},CoffeeDescription:{type:String,required:!0}}};const se=(0,J.Z)(ne,[["render",te],["__scopeId","data-v-da6881ba"]]);var oe=se;const re=(0,s.uE)('<p class="homeview paragraph-text" data-v-5f7f2eb6> Lundberg C,Viñuela LS, Biales S. 2022. Dialogue summarization using BART. Paper presented at: 15th International Natural Language Generation Conference; Colby College,Maine, USA. <a style="text-decoration:none;" href="https://inlgmeeting.github.io/" data-v-5f7f2eb6>https://inlgmeeting.github.io/</a><br data-v-5f7f2eb6>This work used machine learning and fine-tuned a BART model on 12,460 dialogue summary pairs in order to summarize dialogues between two people. <br data-v-5f7f2eb6>Our groups ROUGE and BERTSCORE are listed under &quot;UoT&quot; (University of Tübingen) <a style="text-decoration:none;" href="https://cylnlp.github.io/dialogsum-challenge/" data-v-5f7f2eb6>https://cylnlp.github.io/dialogsum-challenge/</a> for the INLG DialogSum Challenge. <br data-v-5f7f2eb6> Link to <a style="text-decoration:none;" href="https://github.com/conrizzo/dialogue_summarization_paper" data-v-5f7f2eb6>Dialogue Summarization using BART</a> paper, and a copy of the <span style="font-size:1.25em;" data-v-5f7f2eb6><a class="text-links" style="text-decoration:none;" href="https://colab.research.google.com/drive/15CvaaYz2nv_33bPbftM6JwQCuYp3lVm9" data-v-5f7f2eb6>Python code</a></span> we wrote for fine-tuning the model. </p><p class="homeview paragraph-text" data-v-5f7f2eb6> The original BART paper for reference is here: <a style="text-decoration:none;" href="https://arxiv.org/abs/1910.13461#" data-v-5f7f2eb6>https://arxiv.org/abs/1910.13461#</a></p><p class="homeview paragraph-text" data-v-5f7f2eb6> Will add more machine learning style projects here in the future. </p>',3);function ae(e,t,n,o,r,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",null,(0,a.zw)(n.BartProjectTitle),1),(0,s._)("p",null,(0,a.zw)(n.BartProjectDescription),1),re],64)}var ie={name:"BartProject",components:R(),props:{BartProjectTitle:{type:String,required:!0},BartProjectDescription:{type:String,required:!0}},data(){return{imagePath:n(7415),imagePathTwo:n(3455)}}};const le=(0,J.Z)(ie,[["render",ae],["__scopeId","data-v-5f7f2eb6"]]);var ue=le,ce={components:{CowculatorDescription:K,CoffeeFunction:oe,BartProject:ue},props:{id:{type:Number,required:!0}},data(){return{componentValues:{1:K,2:oe,3:ue}}},computed:{selectedComponent(){return this.componentValues[this.id]}}};const he=(0,J.Z)(ce,[["render",r],["__scopeId","data-v-12f8b9fe"]]);var de=he},7415:function(e,t,n){"use strict";e.exports=n.p+"img/binary_tree.cf38922c.jpg"},3455:function(e,t,n){"use strict";e.exports=n.p+"img/binary_tree_two.4573e1a3.jpg"},5851:function(e,t,n){"use strict";e.exports=n.p+"img/cowculator_design_picture.299c56d6.jpg"}}]);
//# sourceMappingURL=681.21c1b88f.js.map