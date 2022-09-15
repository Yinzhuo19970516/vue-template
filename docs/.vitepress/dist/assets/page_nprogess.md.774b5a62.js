import{_ as s,c as n,o as a,a as p}from"./app.50b7fa8c.js";const C=JSON.parse('{"title":"\u63A5\u5165nprogess","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u65B9\u5F0F","slug":"\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"\u4F7F\u7528\u573A\u666F","slug":"\u4F7F\u7528\u573A\u666F"}],"relativePath":"page/nprogess.md","lastUpdated":null}'),l={name:"page/nprogess.md"},o=p(`<h1 id="\u63A5\u5165nprogess" tabindex="-1">\u63A5\u5165nprogess <a class="header-anchor" href="#\u63A5\u5165nprogess" aria-hidden="true">#</a></h1><p>NProgress\u662F\u9875\u9762\u8DF3\u8F6C\u662F\u51FA\u73B0\u5728\u6D4F\u89C8\u5668\u9876\u90E8\u7684\u8FDB\u5EA6\u6761 \u5B98\u7F51\uFF1A<a href="http://ricostacruz.com/nprogress/" target="_blank" rel="noreferrer">http://ricostacruz.com/nprogress/</a> github\uFF1A<a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noreferrer">https://github.com/rstacruz/nprogress</a></p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u5177\u4F53\u4EE3\u7801\u5728src/common/utils/nprogress.ts</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> NProgress </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nprogress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nprogress/nprogress.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5168\u5C40\u8FDB\u5EA6\u6761\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">configure</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">easing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ease</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u52A8\u753B\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">speed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9012\u589E\u8FDB\u5EA6\u6761\u7684\u901F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showSpinner</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u662F\u5426\u663E\u793A\u52A0\u8F7Dico</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trickleSpeed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u81EA\u52A8\u9012\u589E\u95F4\u9694</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minimum</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u66F4\u6539\u542F\u52A8\u65F6\u4F7F\u7528\u7684\u6700\u5C0F\u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6307\u5B9A\u8FDB\u5EA6\u6761\u7684\u7236\u5BB9\u5668</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5F00\u8FDB\u5EA6\u6761</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5173\u95ED\u8FDB\u5EA6\u6761</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> close </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><ul><li>\u8DEF\u7531\u5207\u6362 \u4F7F\u7528\u8DEF\u7531\u52A8\u753B\u592A\u591A\u4F1A\u5F15\u8D77\u5BA1\u7F8E\u75B2\u52B3\uFF0C\u800C\u4E14\u5BB9\u6613\u6709\u517C\u5BB9\u6027bug,\u5728\u4E3B\u8981\u6D41\u7A0B\u4F7F\u7528NProgress\u5C31\u975E\u5E38\u4E0D\u9519</li></ul><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beforeEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">afterEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u7F51\u7EDC\u8BF7\u6C42 \u5199\u5728axios\u7684\u8BF7\u6C42\u62E6\u622A\u5668\u548C\u54CD\u5E94\u62E6\u622A\u5668\u91CC\uFF0C\u6BCF\u6B21\u53EA\u8981\u89E6\u53D1axios\u8BF7\u6C42\u5C31\u52A0\u8F7D\u8FDB\u5EA6\u6761</li></ul><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// axios\u8BF7\u6C42\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#F07178;">() </span><span style="color:#676E95;">// \u8BBE\u7F6E\u52A0\u8F7D\u8FDB\u5EA6\u6761(\u5F00\u59CB..)</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">config</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// axios\u54CD\u5E94\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interceptors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">done</span><span style="color:#F07178;">() </span><span style="color:#676E95;">// \u8BBE\u7F6E\u52A0\u8F7D\u8FDB\u5EA6\u6761(\u7ED3\u675F..)</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>\u5165\u53E3\u6587\u4EF6\u52A0\u8F7D\u4E2D</li></ul><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  NProgress.start()</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7ED9\u9875\u9762\u8BBE\u7F6E\u8BF7\u6C42\u52A0\u8F7D\u8FDB\u5EA6\u6761\u6548\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">  window.onload = function() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    NProgress</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">done</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,12),e=[o];function r(c,t,D,y,F,A){return a(),n("div",null,e)}const b=s(l,[["render",r]]);export{C as __pageData,b as default};