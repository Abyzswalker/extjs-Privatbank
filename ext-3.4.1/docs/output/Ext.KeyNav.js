Ext.data.JsonP.Ext_KeyNav({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/KeyNav.html#Ext-KeyNav' target='_blank'>KeyNav.js</a></div></pre><div class='doc-contents'><p>Provides a convenient wrapper for normalized keyboard navigation.  KeyNav allows you to bind\nnavigation keys to function calls that will get called when the keys are pressed, providing an easy\nway to implement custom navigation schemes for any UI component.</p>\n\n\n<p>The following are all of the possible keys that can be implemented: enter, left, right, up, down, tab, esc,\npageUp, pageDown, del, home, end.  Usage:</p>\n\n\n\n\n<pre><code>var nav = new <a href=\"#!/api/Ext.KeyNav\" rel=\"Ext.KeyNav\" class=\"docClass\">Ext.KeyNav</a>(\"my-element\", {\n    \"left\" : function(e){\n        this.moveLeft(e.ctrlKey);\n    },\n    \"right\" : function(e){\n        this.moveRight(e.ctrlKey);\n    },\n    \"enter\" : function(e){\n        this.save();\n    },\n    scope : this\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultEventAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-cfg-defaultEventAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-cfg-defaultEventAction' class='name expandable'>defaultEventAction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The method to call on the Ext.EventObject after this KeyNav intercepts a key. ...</div><div class='long'><p>The method to call on the <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> after this KeyNav intercepts a key.  Valid values are\n<a href=\"#!/api/Ext.EventObject-method-stopEvent\" rel=\"Ext.EventObject-method-stopEvent\" class=\"docClass\">Ext.EventObject.stopEvent</a>, <a href=\"#!/api/Ext.EventObject-method-preventDefault\" rel=\"Ext.EventObject-method-preventDefault\" class=\"docClass\">Ext.EventObject.preventDefault</a> and\n<a href=\"#!/api/Ext.EventObject-method-stopPropagation\" rel=\"Ext.EventObject-method-stopPropagation\" class=\"docClass\">Ext.EventObject.stopPropagation</a> (defaults to 'stopEvent')</p>\n<p>Defaults to: <code>&quot;stopEvent&quot;</code></p></div></div></div><div id='cfg-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-cfg-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-cfg-disabled' class='name expandable'>disabled</a><span> : Boolean</span></div><div class='description'><div class='short'>True to disable this KeyNav instance (defaults to false) ...</div><div class='long'><p>True to disable this KeyNav instance (defaults to false)</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-forceKeyDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-cfg-forceKeyDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-cfg-forceKeyDown' class='name expandable'>forceKeyDown</a><span> : Boolean</span></div><div class='description'><div class='short'>Handle the keydown event instead of keypress (defaults to false). ...</div><div class='long'><p>Handle the keydown event instead of keypress (defaults to false).  KeyNav automatically does this for IE since\nIE does not propagate special keys on keypress, but setting this to true will force other browsers to also\nhandle keydown instead of keypress.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.KeyNav-method-constructor' class='name expandable'>Ext.KeyNav</a>( <span class='pre'>el, config</span> ) : <a href=\"#!/api/Ext.KeyNav\" rel=\"Ext.KeyNav\" class=\"docClass\">Ext.KeyNav</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The element to bind to</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.KeyNav\" rel=\"Ext.KeyNav\" class=\"docClass\">Ext.KeyNav</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Destroy this KeyNav (this is the same as calling disable). ...</div><div class='long'><p>Destroy this KeyNav (this is the same as calling disable).</p>\n</div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable this KeyNav ...</div><div class='long'><p>Disable this KeyNav</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable this KeyNav ...</div><div class='long'><p>Enable this KeyNav</p>\n</div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyNav'>Ext.KeyNav</span><br/><a href='source/KeyNav.html#Ext-KeyNav-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyNav-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )</div><div class='description'><div class='short'>Convenience function for setting disabled/enabled by boolean. ...</div><div class='long'><p>Convenience function for setting disabled/enabled by boolean.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"KeyNav.html#Ext-KeyNav","filename":"KeyNav.js"}],"linenr":1,"members":{"property":[],"cfg":[{"tagname":"cfg","owner":"Ext.KeyNav","meta":{},"name":"defaultEventAction","id":"cfg-defaultEventAction"},{"tagname":"cfg","owner":"Ext.KeyNav","meta":{},"name":"disabled","id":"cfg-disabled"},{"tagname":"cfg","owner":"Ext.KeyNav","meta":{},"name":"forceKeyDown","id":"cfg-forceKeyDown"}],"css_var":[],"method":[{"tagname":"method","owner":"Ext.KeyNav","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.KeyNav","meta":{},"name":"destroy","id":"method-destroy"},{"tagname":"method","owner":"Ext.KeyNav","meta":{},"name":"disable","id":"method-disable"},{"tagname":"method","owner":"Ext.KeyNav","meta":{},"name":"enable","id":"method-enable"},{"tagname":"method","owner":"Ext.KeyNav","meta":{},"name":"setDisabled","id":"method-setDisabled"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.KeyNav","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.KeyNav","mixins":[],"mixedInto":[]});