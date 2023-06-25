import{_ as s,o as a,c as n,O as e}from"./chunks/framework.52080d41.js";const D=JSON.parse('{"title":"LinkedList<T>.prepend","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"data-structures/LinkedList/methods/prepend.md","filePath":"data-structures/LinkedList/methods/prepend.md"}'),t={name:"data-structures/LinkedList/methods/prepend.md"},o=e(`<h1 id="linkedlist-t-prepend" tabindex="-1"><strong>LinkedList&lt;T&gt;.prepend</strong> <a class="header-anchor" href="#linkedlist-t-prepend" aria-label="Permalink to &quot;**LinkedList&amp;lt;T&amp;gt;.prepend**&quot;">​</a></h1><p>Appends new Node at the beginning of the <code>LinkedList&lt;T&gt;</code>.</p><h2 id="parameters" tabindex="-1"><strong><strong>Parameters</strong></strong> <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;****Parameters****&quot;">​</a></h2><p><strong>value<code>T</code></strong>: value of the new node</p><h2 id="example" tabindex="-1"><strong><strong>Example</strong></strong> <a class="header-anchor" href="#example" aria-label="Permalink to &quot;****Example****&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LinkedList</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#676E95;font-style:italic;">// =&gt; 4</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">prepend</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#676E95;font-style:italic;">// =&gt; 5</span></span>
<span class="line"><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first </span><span style="color:#676E95;font-style:italic;">// =&gt; LinkListNode(0)</span></span></code></pre></div><h2 id="remarks" tabindex="-1"><strong><strong>Remarks</strong></strong> <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;****Remarks****&quot;">​</a></h2><p>This method is an <strong>O(1)</strong> operation.</p>`,8),l=[o];function p(r,c,i,d,C,y){return a(),n("div",null,l)}const h=s(t,[["render",p]]);export{D as __pageData,h as default};
