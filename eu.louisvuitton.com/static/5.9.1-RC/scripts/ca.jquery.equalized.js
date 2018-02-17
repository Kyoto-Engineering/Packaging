/* Copyright (c) 2014 Clever Age
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(f){var c="equalized";function e(i,j){var h=f.isArray(j)?j:[j];var g=false;f.each(h,function(){g=(i[0]===this);if(g){return false}});return g}function a(g){if(!g&&g!==undefined){return{height:false,width:false}}if(typeof g==="string"||g===+g){return{height:g}}if(typeof g!=="object"||f.isArray(g)){return{}}return g}function b(j,i,h){var g=0,k;if(i===+i){g=i>0?i:0}if(typeof i==="string"){if(i==="auto"){k=h}else{if(i.indexOf(">")===0){k=h.filter(i.substr(1))}else{k=f(i)}}k.each(function(){g=Math.max(g,f(this)[j]())})}return g}function d(m,i){var l,g,k,j={};if(i.width!==false){l=i.useOuter?"outerWidth":"width";g=b(l,i.width,m);j.width=g>0?g:""}if(i.height!==false){l=i.useOuter?"outerHeight":"height";k=b(l,i.height,m);j.height=k>0?k:""}m.css(j)}f.fn[c]=function(i){var h;var g=f.extend({},f.fn[c].defaults,a(i));if(!g.group&&!e(this,[document,window])){d(this,g)}else{if(g.group&&g.group!=="all"){h=g.attribute==="class"?f("."+g.group):f("["+g.attribute+'="'+g.group+'"]');d(h,g)}else{h=[];f("["+g.attribute+"]").each(function(){var j=f(this).attr(g.attribute);if(h.indexOf(j)===-1){h.push(j);d(f("["+g.attribute+'="'+j+'"]'),g)}})}}return this};f.fn[c].defaults={width:false,height:"auto",group:false,attribute:"data-equalized",useOuter:false}})(jQuery);