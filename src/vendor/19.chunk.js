(window.webpackJsonppanneau=window.webpackJsonppanneau||[]).push([[19],{504:function(e,s){ace.define("ace/ext/modelist",["require","exports","module"],function(e,s,a){"use strict";var t=[];var l=function(e,s,a){var t;this.name=e,this.caption=s,this.mode="ace/mode/"+e,this.extensions=a,t=/\^/.test(a)?a.replace(/\|(\^)?/g,function(e,s){return"$|"+(s?"^":"^.*\\.")})+"$":"^.*\\.("+a+")$",this.extRe=new RegExp(t,"gi")};l.prototype.supportsFile=function(e){return e.match(this.extRe)};var r={ABAP:["abap"],ABC:["abc"],ActionScript:["as"],ADA:["ada|adb"],Apache_Conf:["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],AsciiDoc:["asciidoc|adoc"],Assembly_x86:["asm|a"],AutoHotKey:["ahk"],BatchFile:["bat|cmd"],Bro:["bro"],C_Cpp:["cpp|c|cc|cxx|h|hh|hpp|ino"],C9Search:["c9search_results"],Cirru:["cirru|cr"],Clojure:["clj|cljs"],Cobol:["CBL|COB"],coffee:["coffee|cf|cson|^Cakefile"],ColdFusion:["cfm"],CSharp:["cs"],CSS:["css"],Curly:["curly"],D:["d|di"],Dart:["dart"],Diff:["diff|patch"],Dockerfile:["^Dockerfile"],Dot:["dot"],Drools:["drl"],Dummy:["dummy"],DummySyntax:["dummy"],Eiffel:["e|ge"],EJS:["ejs"],Elixir:["ex|exs"],Elm:["elm"],Erlang:["erl|hrl"],Forth:["frt|fs|ldr|fth|4th"],Fortran:["f|f90"],FTL:["ftl"],Gcode:["gcode"],Gherkin:["feature"],Gitignore:["^.gitignore"],Glsl:["glsl|frag|vert"],Gobstones:["gbs"],golang:["go"],Groovy:["groovy"],HAML:["haml"],Handlebars:["hbs|handlebars|tpl|mustache"],Haskell:["hs"],Haskell_Cabal:["cabal"],haXe:["hx"],Hjson:["hjson"],HTML:["html|htm|xhtml"],HTML_Elixir:["eex|html.eex"],HTML_Ruby:["erb|rhtml|html.erb"],INI:["ini|conf|cfg|prefs"],Io:["io"],Jack:["jack"],Jade:["jade|pug"],Java:["java"],JavaScript:["js|jsm|jsx"],JSON:["json"],JSONiq:["jq"],JSP:["jsp"],JSX:["jsx"],Julia:["jl"],Kotlin:["kt|kts"],LaTeX:["tex|latex|ltx|bib"],LESS:["less"],Liquid:["liquid"],Lisp:["lisp"],LiveScript:["ls"],LogiQL:["logic|lql"],LSL:["lsl"],Lua:["lua"],LuaPage:["lp"],Lucene:["lucene"],Makefile:["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],Markdown:["md|markdown"],Mask:["mask"],MATLAB:["matlab"],Maze:["mz"],MEL:["mel"],MUSHCode:["mc|mush"],MySQL:["mysql"],Nix:["nix"],NSIS:["nsi|nsh"],ObjectiveC:["m|mm"],OCaml:["ml|mli"],Pascal:["pas|p"],Perl:["pl|pm"],pgSQL:["pgsql"],PHP:["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],Powershell:["ps1"],Praat:["praat|praatscript|psc|proc"],Prolog:["plg|prolog"],Properties:["properties"],Protobuf:["proto"],Python:["py"],R:["r"],Razor:["cshtml|asp"],RDoc:["Rd"],RHTML:["Rhtml"],RST:["rst"],Ruby:["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],Rust:["rs"],SASS:["sass"],SCAD:["scad"],Scala:["scala"],Scheme:["scm|sm|rkt|oak|scheme"],SCSS:["scss"],SH:["sh|bash|^.bashrc"],SJS:["sjs"],Smarty:["smarty|tpl"],snippets:["snippets"],Soy_Template:["soy"],Space:["space"],SQL:["sql"],SQLServer:["sqlserver"],Stylus:["styl|stylus"],SVG:["svg"],Swift:["swift"],Tcl:["tcl"],Tex:["tex"],Text:["txt"],Textile:["textile"],Toml:["toml"],TSX:["tsx"],Twig:["twig|swig"],Typescript:["ts|typescript|str"],Vala:["vala"],VBScript:["vbs|vb"],Velocity:["vm"],Verilog:["v|vh|sv|svh"],VHDL:["vhd|vhdl"],Wollok:["wlk|wpgm|wtest"],XML:["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],XQuery:["xq"],YAML:["yaml|yml"],Django:["html"]},o={ObjectiveC:"Objective-C",CSharp:"C#",golang:"Go",C_Cpp:"C and C++",coffee:"CoffeeScript",HTML_Ruby:"HTML (Ruby)",HTML_Elixir:"HTML (Elixir)",FTL:"FreeMarker"},i={};for(var c in r){var p=r[c],m=(o[c]||c).replace(/_/g," "),h=c.toLowerCase(),n=new l(h,m,p[0]);i[h]=n,t.push(n)}a.exports={getModeForPath:function(e){for(var s=i.text,a=e.split(/[\/\\]/).pop(),l=0;l<t.length;l++)if(t[l].supportsFile(a)){s=t[l];break}return s},modes:t,modesByName:i}}),ace.acequire(["ace/ext/modelist"],function(){})}}]);