import{_ as s,c as a,o as n,a as l}from"./app.6a00e12a.js";const d=JSON.parse('{"title":"less sass\u7684\u4F18\u5316\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u80CC\u666F","slug":"\u80CC\u666F"},{"level":2,"title":"\u5B98\u65B9\u65B9\u6848","slug":"\u5B98\u65B9\u65B9\u6848"},{"level":2,"title":"\u5355\u72EC\u5904\u7406less","slug":"\u5355\u72EC\u5904\u7406less"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"page/less.md","lastUpdated":1660059886000}'),p={name:"page/less.md"},e=l(`<h1 id="less-sass\u7684\u4F18\u5316\u5904\u7406" tabindex="-1">less sass\u7684\u4F18\u5316\u5904\u7406 <a class="header-anchor" href="#less-sass\u7684\u4F18\u5316\u5904\u7406" aria-hidden="true">#</a></h1><h2 id="\u80CC\u666F" tabindex="-1">\u80CC\u666F <a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4F7F\u7528less sass \u4E3B\u8981\u662F\u4E3A\u4E86\u4F7F\u7528\u4ED6\u4EEC\u63D0\u4F9B\u7684<strong>\u53D8\u91CF\uFF0C\u51FD\u6570\u7B49\u7279\u6027</strong>\u3002 \u5982\u679C\u4E0D\u8FDB\u884C\u914D\u7F6E\uFF0C\u53EA\u5728\u5165\u53E3\u6587\u4EF6\u5F15\u5165\uFF0C\u5728\u5404\u4E2A\u5B50\u9875\u9762\u91CC\u662F\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\uFF0C\u5982\u679C\u4F7F\u7528\uFF0C\u8FD8\u9700\u8981\u518D\u6B21\u5F15\u7528 \u8FD9\u4E2A\u5BF9\u4F7F\u7528\u8005\u975E\u5E38\u4E0D\u53CB\u597D\u3002</p><h2 id="\u5B98\u65B9\u65B9\u6848" tabindex="-1">\u5B98\u65B9\u65B9\u6848 <a class="header-anchor" href="#\u5B98\u65B9\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u5BF9sass \u6587\u4EF6 \u53EF\u4EE5\u5728<strong>loaderOptions \u589E\u52A0 additionalData</strong>\u9009\u9879</p><p>\u4F46\u662F\u5BF9\u4E8Eless \u6587\u4EF6\u7684\u5904\u7406\u975E\u5E38\u4E0D\u53CB\u597D\uFF0C\u9700\u8981\u4E00\u4E2A\u4E2A\u53BB\u5B9A\u4E49\u53D8\u91CF\uFF0C\u56E0\u6B64\u6211\u4E86\u820D\u5F03\u5B98\u65B9\u7684less\u5904\u7406\u65B9\u6848</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loaderOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u7ED9 sass-loader \u4F20\u9012\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">sass</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// @/ \u662F src/ \u7684\u522B\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6240\u4EE5\u8FD9\u91CC\u5047\u8BBE\u4F60\u6709 \`src/variables.sass\` \u8FD9\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6CE8\u610F\uFF1A\u5728 sass-loader v8 \u4E2D\uFF0C\u8FD9\u4E2A\u9009\u9879\u540D\u662F &quot;prependData&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">@import &quot;~@/variables.sass&quot;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B \`sass\` \u9009\u9879\u4F1A\u540C\u65F6\u5BF9 \`sass\` \u548C \`scss\` \u8BED\u6CD5\u540C\u65F6\u751F\u6548</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u56E0\u4E3A \`scss\` \u8BED\u6CD5\u5728\u5185\u90E8\u4E5F\u662F\u7531 sass-loader \u5904\u7406\u7684</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u4F46\u662F\u5728\u914D\u7F6E \`prependData\` \u9009\u9879\u7684\u65F6\u5019</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \`scss\` \u8BED\u6CD5\u4F1A\u8981\u6C42\u8BED\u53E5\u7ED3\u5C3E\u5FC5\u987B\u6709\u5206\u53F7\uFF0C\`sass\` \u5219\u8981\u6C42\u5FC5\u987B\u6CA1\u6709\u5206\u53F7</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 \`scss\` \u9009\u9879\uFF0C\u5BF9 \`scss\` \u8BED\u6CD5\u8FDB\u884C\u5355\u72EC\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">scss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">@import &quot;~@/variables.scss&quot;;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u7ED9 less-loader \u4F20\u9012 Less.js \u76F8\u5173\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">less</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// http://lesscss.org/usage/#less-options-strict-units \`Global Variables\`</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \`primary\` is global variables fields name</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">globalVars</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">primary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u5355\u72EC\u5904\u7406less" tabindex="-1">\u5355\u72EC\u5904\u7406less <a class="header-anchor" href="#\u5355\u72EC\u5904\u7406less" aria-hidden="true">#</a></h2><p>\u5B89\u88C5<code>style-resources-loader</code></p><p>\u5728<code>vue.config.js</code> \u65B0\u589E\u914D\u7F6E</p><p>\u5BF9\u5982\u679C\u4F7F\u7528\u4E86less\uFF0C\u9884\u5148\u5F15\u5165\u6211\u4EEC\u57FA\u7840less\u6587\u4EF6</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">pluginOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-resources-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    preProcessor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      patterns</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/common/style/base.less</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4E09\u4E2A\u9884\u5904\u7406\u5668\u7684\u5168\u5C40\u5F15\u5165\u65B9\u6848\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A\u6587\u7AE0</p><p><a href="https://blog.csdn.net/rudy_zhou/article/details/103683140" target="_blank" rel="noreferrer">CSS \u9884\u7F16\u8BD1\u8BED\u8A00 \u53D8\u91CF\u5168\u5C40\u5F15\u7528\u65B9\u5F0F vue-cli@3.0 stylus/sass/less \u4F7F\u7528\u65B9\u6CD5</a></p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528\u4E00\u4E2Acss \u9884\u5904\u7406\u5668\uFF0Cless \u6216\u8005sass\uFF0C\u56E0\u4E3A\u6211\u6781\u5176\u4E0D\u9002\u5E94 stylus\u7684\u65E0\u62EC\u53F7\u7F29\u8FDB\u6A21\u5F0F\uFF0C\u6240\u4EE5\u5C31\u91CC\u6CA1\u6709\u8BF4stylus</p><p>\u53EA\u8981\u5728webpack \u5F15\u5165\u4E86\u5C31\u4E0D\u7528\u518D\u5168\u5C40\u518D\u6B21\u5F15\u5165\u4E86\uFF0C\u4F46\u662F\u6211\u59CB\u7EC8\u89C9\u5F97\u8FD9\u79CD\u4E1A\u52A1\u4EE3\u7801\u4E0D\u5E94\u8BE5\u51FA\u73B0\u5728webpack\u4E2D\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5927\u5927\u589E\u52A0\u4E86\u5F00\u53D1\u8005\u7684\u5FC3\u667A\u8D1F\u62C5\uFF0C\u4E5F\u662F\u73B0\u5728\u811A\u624B\u67B6\u8BBE\u8BA1\u4E0D\u5408\u7406\u7684\u5730\u65B9\uFF0C\u5E0C\u671B\u672A\u6765\u80FD\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6848\uFF01</p><p>\u81F3\u4E8E\u4E3A\u4EC0\u4E48\uFF0C\u5728\u5165\u53E3\u6587\u4EF6\u5F15\u5165\u4E86\uFF0C\u4E0D\u914D\u7F6E\u7684\u8BDD\uFF0C\u8FD8\u4E0D\u80FD\u4F7F\u7528less\uFF0C\u6216\u8005sass\u7684\u3002 <strong>\u8FD9\u4E2A\u6DF1\u5C42\u539F\u56E0\uFF0C\u6211\u731C\u6D4B\u548Cvue\u7684\u6846\u67B6\u8BBE\u8BA1\u6709\u5173\uFF0C\u6709\u5174\u8DA3\u53EF\u4EE5\u6DF1\u5165\u7814\u7A76</strong></p><p><a href="/page/index.html">\u25B2 \u56DE\u76EE\u5F55</a></p>`,19),o=[e];function r(c,t,D,i,F,y){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{d as __pageData,u as default};