import{_ as s,c as n,o as a,a as p}from"./app.b3a19064.js";const C=JSON.parse('{"title":"Pinia\u72B6\u6001\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"Pinia \u4F18\u52BF","slug":"pinia-\u4F18\u52BF"},{"level":2,"title":"\u6838\u5FC3\u6982\u5FF5","slug":"\u6838\u5FC3\u6982\u5FF5"},{"level":2,"title":"Pinia\u4E0EVuex\u4EE3\u7801\u5206\u5272\u673A\u5236","slug":"pinia\u4E0Evuex\u4EE3\u7801\u5206\u5272\u673A\u5236"},{"level":3,"title":"Vuex\u7684\u4EE3\u7801\u5206\u5272","slug":"vuex\u7684\u4EE3\u7801\u5206\u5272"},{"level":3,"title":"pinia\u7684\u4EE3\u7801\u5206\u5272","slug":"pinia\u7684\u4EE3\u7801\u5206\u5272"},{"level":2,"title":"","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"page/pinia.md","lastUpdated":1660059886000}'),l={name:"page/pinia.md"},e=p(`<h1 id="pinia\u72B6\u6001\u7BA1\u7406" tabindex="-1">Pinia\u72B6\u6001\u7BA1\u7406 <a class="header-anchor" href="#pinia\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fb1464071e543e3a114d2fb41fe9d9e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>\u6587\u6863\u5730\u5740\uFF1A<a href="https://pinia.web3doc.top/" target="_blank" rel="noreferrer">https://pinia.web3doc.top/</a></p><p>Pinia /pi\u02D0nj\u028C/ \u4E2D\u6587\u540D\uFF1A\u76AE\u4F60\u554A</p><h2 id="pinia-\u4F18\u52BF" tabindex="-1">Pinia \u4F18\u52BF <a class="header-anchor" href="#pinia-\u4F18\u52BF" aria-hidden="true">#</a></h2><p><strong>1.Pinia\u662F\u4E00\u4E2A\u5168\u65B0\u7684Vue\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u662FVuex\u7684\u4EE3\u66FF\u8005\uFF0C\u5C24\u96E8\u6EAA\u5F3A\u52BF\u63A8\u8350</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u5B98\u65B9\u80CC\u4E66</p><p><strong>2.Vue2 \u548C Vue3 \u90FD\u80FD\u652F\u6301</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u65E2\u652F\u6301options api \u53C8\u652F\u6301compostions api\uFF0C\u7EF4\u62A4\u6210\u672C\u4F4E</p><p><strong>3.\u629B\u5F03\u4F20\u7EDF\u7684 Mutation \uFF0C\u53EA\u6709 state, getter \u548C action \uFF0C\u7B80\u5316\u72B6\u6001\u7BA1\u7406\u5E93</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u5C11\u5199\u4EE3\u7801,\u964D\u4F4E\u5FC3\u667A\u8D1F\u62C5\uFF0C\u518D\u4E5F\u4E0D\u7528\u5199 mutation</p><p><strong>4.\u4E0D\u9700\u8981\u5D4C\u5957\u6A21\u5757\uFF0C\u7B26\u5408 Vue3 \u7684 Composition api\uFF0C\u8BA9\u4EE3\u7801\u6241\u5E73\u5316</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u591A\u4E2Astate,\u4E0D\u9700\u8981\u518D\u4F7F\u7528module\uFF0C\u73B0\u5728\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2Astore\uFF0C\u76F8\u4E92\u4E4B\u95F4\u8C03\u7528</p><p><strong>5.TypeScript\u652F\u6301</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u6CA1\u6709\u4F7F\u7528ts\uFF0C\u4E0D\u597D\u89E3\u91CA</p><p><strong>6.\u4EE3\u7801\u7B80\u5355\uFF0C\u5F88\u597D\u7684\u4EE3\u7801\u81EA\u52A8\u5206\u5272</strong></p><p><strong>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt;</strong> \u53EF\u4EE5\u6784\u5EFA\u591A\u4E2Astore\uFF0C\u6253\u5305\u7BA1\u7406\u4F1A\u81EA\u52A8\u62C6\u5206\u6A21\u5757\u5316\u7684\u8BBE\u8BA1\uFF0C\u4FBF\u4E8E\u62C6\u5206\u72B6\u6001\uFF0C\u80FD\u5F88\u597D\u652F\u6301\u4EE3\u7801\u5206\u5272\uFF1B</p><p><strong>7.\u6781\u8F7B\uFF0C \u4EC5\u6709 1 KB</strong></p><p>\u7FFB\u8BD1\u7FFB\u8BD1 =&gt; \u4F53\u79EF\u5C0F\uFF0C\u4E0D\u4F1A\u6210\u4E3A\u9879\u76EE\u7684\u8D1F\u62C5</p><h2 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1">\u6838\u5FC3\u6982\u5FF5 <a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a></h2><ol><li><strong>State</strong>: \u7528\u4E8E\u5B58\u653E\u6570\u636E\uFF0C\u6709\u70B9\u513F\u7C7B\u4F3C data \u7684\u6982\u5FF5\uFF1B</li><li><strong>Getters</strong>: \u7528\u4E8E\u83B7\u53D6\u6570\u636E\uFF0C\u6709\u70B9\u513F\u7C7B\u4F3C computed \u7684\u6982\u5FF5\uFF1B</li><li><strong>Actions</strong>: \u7528\u4E8E\u4FEE\u6539\u6570\u636E\uFF0C\u6709\u70B9\u513F\u7C7B\u4F3C methods \u7684\u6982\u5FF5\uFF1B</li><li><strong>Plugins</strong>: Pinia \u63D2\u4EF6\u3002</li></ol><h2 id="pinia\u4E0Evuex\u4EE3\u7801\u5206\u5272\u673A\u5236" tabindex="-1">Pinia\u4E0EVuex\u4EE3\u7801\u5206\u5272\u673A\u5236 <a class="header-anchor" href="#pinia\u4E0Evuex\u4EE3\u7801\u5206\u5272\u673A\u5236" aria-hidden="true">#</a></h2><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u67D0\u9879\u76EE\u6709<strong>3\u4E2Astore\u300Cuser\u3001job\u3001pay\u300D</strong>\uFF0C\u53E6\u5916\u6709<strong>2\u4E2A\u8DEF\u7531\u9875\u9762\u300C\u9996\u9875\u3001\u4E2A\u4EBA\u4E2D\u5FC3\u9875\u300D</strong>\uFF0C<strong>\u9996\u9875\u7528\u5230job store\uFF0C\u4E2A\u4EBA\u4E2D\u5FC3\u9875\u7528\u5230\u4E86user store</strong>\uFF0C\u5206\u522B\u7528Pinia\u548CVuex\u5BF9\u5176\u72B6\u6001\u7BA1\u7406\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6c810e0fded4b729b506407d773859e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h3 id="vuex\u7684\u4EE3\u7801\u5206\u5272" tabindex="-1">Vuex\u7684\u4EE3\u7801\u5206\u5272 <a class="header-anchor" href="#vuex\u7684\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a></h3><p>\u6253\u5305\u65F6\uFF0Cvuex\u4F1A\u628A3\u4E2Astore\u5408\u5E76\u6253\u5305\uFF0C\u5F53\u9996\u9875\u7528\u5230Vuex\u65F6\uFF0C\u8FD9\u4E2A\u5305\u4F1A\u5F15\u5165\u5230\u9996\u9875\u4E00\u8D77\u6253\u5305\uFF0C\u6700\u540E\u8F93\u51FA1\u4E2Ajs chunk\u3002\u8FD9\u6837\u7684\u95EE\u9898\u662F\uFF0C\u5176\u5B9E\u9996\u9875\u53EA\u9700\u8981\u5176\u4E2D1\u4E2Astore\uFF0C\u4F46\u5176\u4ED62\u4E2A\u65E0\u5173\u7684store\u4E5F\u88AB\u6253\u5305\u8FDB\u6765\uFF0C\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\u3002</p><p><strong>\u89E3\u51B3\u65B9\u6848\uFF1A</strong></p><p>\u7ECF\u5E38\u5728\u9996\u9875\u4F18\u5316\u65F6\uFF0C\u4F1A\u8003\u8651\u5230\u8FD9\u4E2A\u573A\u666F\uFF0C\u4E00\u822C\u5904\u7406\u65B9\u6848\u662F\u53BB\u505Avuex\u7684\u6309\u9700\u52A0\u8F7D\uFF0CbeforeCreate \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u53BB\u5224\u65AD\u5F53\u524D\u9875\u9762\u9700\u8981\u52A0\u8F7D\u54EA\u4E9Bstore,\u5229\u7528\u8FD9\u4E2Aapi\u53EF\u4EE5\u5B9E\u73B0$store.registerModule</p><p>\u8BE6\u60C5\u53EF\u53C2\u8003\u6587\u7AE0</p><p><a href="https://segmentfault.com/a/1190000038440206" target="_blank" rel="noreferrer">vuex\u6309\u9700\u52A0\u8F7D\uFF0C\u907F\u514D\u9996\u9875\u521D\u59CB\u5316\u6240\u6709\u6570\u636E</a></p><h3 id="pinia\u7684\u4EE3\u7801\u5206\u5272" tabindex="-1">pinia\u7684\u4EE3\u7801\u5206\u5272 <a class="header-anchor" href="#pinia\u7684\u4EE3\u7801\u5206\u5272" aria-hidden="true">#</a></h3><p>\u6253\u5305\u65F6\uFF0CPinia\u4F1A\u68C0\u67E5\u5F15\u7528\u4F9D\u8D56\uFF0C\u5F53\u9996\u9875\u7528\u5230job store\uFF0C\u6253\u5305\u53EA\u4F1A\u628A\u7528\u5230\u7684store\u548C\u9875\u9762\u5408\u5E76\u8F93\u51FA1\u4E2Ajs chunk\uFF0C\u5176\u4ED62\u4E2Astore\u4E0D\u8026\u5408\u5728\u5176\u4E2D\u3002Pinia\u80FD\u505A\u5230\u8FD9\u70B9\uFF0C\u662F\u56E0\u4E3A\u5B83\u7684\u8BBE\u8BA1\u5C31\u662Fstore\u5206\u79BB\u7684\uFF0C\u89E3\u51B3\u4E86\u9879\u76EE\u7684\u8026\u5408\u95EE\u9898\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be30659d6bac455184e8c61318f1dd3a~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><span id="pinia-3">\u57FA\u672C\u4F7F\u7528</span> <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49state\uFF0Cgetters \u548Cvuex\u57FA\u672C\u4E00\u6837\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u4EE5\u53BB\u5B98\u7F51\u5B66</p><p>\u8FD9\u91CC\u4EC5\u4EC5\u5BF9\u6BD4\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u4E24\u8005\u7684\u533A\u522B</p><p>\u660E\u663Epinia \u7684\u4EE3\u7801\u91CF\u66F4\u5C11\uFF0C\u903B\u8F91\u66F4\u6E05\u6670\uFF0C\u5FC3\u667A\u8D1F\u62C5\u66F4\u5C0F</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// store.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pinia</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> main </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      configInfo</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> piniaStore </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../piniaStore</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$patch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">configInfo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> data</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// store.js</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">increment</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//index.vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> storeVuex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">storeVuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">increment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u603B\u5F97\u6765\u8BF4\uFF0CPinia \u5C31\u662F Vuex \u7684\u66FF\u4EE3\u7248\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u517C\u5BB9 Vue2\uFF0CVue3\u4EE5\u53CATypeScript\u3002\u5728Vuex\u7684\u57FA\u7840\u4E0A\u53BB\u6389\u4E86 Mutation\uFF0C\u53EA\u4FDD\u7559\u4E86 state, getter\u548Caction\u3002</p><p><strong>Pinia\u62E5\u6709\u66F4\u7B80\u6D01\u7684\u8BED\u6CD5\uFF0C \u6241\u5E73\u5316\u7684\u4EE3\u7801\u7F16\u6392\uFF0C\u7B26\u5408Vue3 \u7684 Composition api</strong></p><p><a href="/page/index.html">\u25B2 \u56DE\u76EE\u5F55</a></p>`,44),o=[e];function r(t,c,i,D,y,F){return a(),n("div",null,o)}const u=s(l,[["render",r]]);export{C as __pageData,u as default};
