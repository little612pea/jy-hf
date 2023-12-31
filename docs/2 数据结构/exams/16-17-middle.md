# 16-17年期中考试试卷
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>浙江大学2016-17秋冬《数据结构基础》期中模拟练习</title>
  <style>.paper {
  margin: 0;
  font-family: var(--font-sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: var(--text-normal, hsl(0, 0%, 25%));
}
.paper *,
.paper *::before,
.paper *::after {
  box-sizing: border-box;
}
.paper pre,
.paper code,
.paper kbd,
.paper samp {
  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
  font-size: 12px;
}
.paper pre {
  margin-top: 0;
  margin-bottom: 0;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}
.paper label {
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 0;
}
.paper hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--scroll-thumb, hsl(0, 0%, 85%));
  margin: 0;
}
.paper .result table {
  width: 100%;
}
.paper .result th,
.paper .result td {
  border: 1px solid var(--border-all, hsla(0, 0%, 0%, 0.06));
  text-align: center;
}
.paper .result .box {
  border: 1px solid var(--border-all, hsla(0, 0%, 0%, 0.06));
  padding: 8px;
  color: var(--text-normal, hsl(0, 0%, 25%));
}
.rendered-markdown {
  line-height: 1.5;
}
.rendered-markdown p {
  margin: 0.5em 0;
}
.rendered-markdown p:first-child {
  margin: 0;
}
.rendered-markdown h1, .rendered-markdown h2, .rendered-markdown h3, .rendered-markdown h4, .rendered-markdown h5, .rendered-markdown h6 {
  margin: 0.8em 0;
}
.rendered-markdown img {
  max-width: 100%;
}
.rendered-markdown textarea {
  border-radius: 0.125rem;
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  min-height: 6.25rem;
}
.rendered-markdown code {
  font-size: 0.75em;
  background: var(--bg-light);
  border-radius: 0.1875rem;
  border: 1px solid var(--border-all);
  color: #e74c3c;
  margin: 0 0.125em;
}
.rendered-markdown pre {
  padding: 0.375rem 0.75rem;
  background: var(--bg-light);
  border: 1px solid var(--border-all);
  border-radius: 0.1875rem;
  word-break: break-all;
}
.rendered-markdown pre code {
  background: none;
  border: none;
  color: var(--text-normal);
  margin: 0;
}
.rendered-markdown hr {
  border: none;
  border-top: 1px solid var(--border-all);
}
.rendered-markdown blockquote {
  margin: 0.5em 0;
  padding: 0.125rem 0.875rem;
  font-size: 0.75rem;
  background: var(--bg-light);
  border-left: 4px solid var(--border-all);
}
.rendered-markdown blockquote p {
  margin-bottom: 0;
}
.rendered-markdown table {
  margin: 0 auto;
}
.rendered-markdown table th, .rendered-markdown table td {
  border: 1px solid var(--border-all);
  padding: 0.3125rem;
  font-size: 0.75rem;
}
.katex-mathml {
  display: none;
}
</style>
  <link rel="stylesheet" href="https://static.pintia.cn/assets/katex.min.css" crossorigin="anonymous">
</head>
<body>

<div><div class="paper" style="max-width:940px;margin:auto"><div style="padding:16px;text-align:center;font-size:24px;font-weight:bold">浙江大学2016-17秋冬《数据结构基础》期中模拟练习</div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">开始时间</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="01/01/2016 8:00:00 AM">01/01/2016 8:00:00 AM</span></div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">结束时间</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="01/18/2038 8:00:00 AM">01/18/2038 8:00:00 AM</span></div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">答题时长</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="45分钟">45分钟</span></div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">考生</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="undefined"></span></div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">得分</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="17">17</span></div><div style="width:calc(100% / 3);display:inline-flex;padding:4px"><span style="font-weight:bold;min-width:56px">总分</span><span style="margin-left:8px;overflow:hidden;text-overflow:ellipsis" title="100">100</span></div><hr/><div style="display:flex;font-size:16px;margin-top:16px"><span style="flex-grow:1;font-weight:bold">判断题</span><span>得分：12</span><span style="margin-left:20px">总分：15</span></div><div style="font-size:12px;display:block"><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R1-1</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div class="markdownBlock" lang="en"><div class="rendered-markdown"><p>In a binary search tree, the keys on the same level from left to right must be in sorted (non-decreasing) order.</p>
</div></div><div style="color:gray;word-break:keep-all">(3分)</div></div><div style="display:flex;width:100px;justify-content:space-between"><div><input type="radio" id="TRUE" name="1091342684732575744" disabled="" checked="" value="TRUE"/><label style="margin-left:4px" for="TRUE">T</label></div><div><input type="radio" id="FALSE" name="1091342684732575744" disabled="" value="FALSE"/><label style="margin-left:4px" for="FALSE">F</label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#ff3b30">答案正确<!-- -->(3 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R1-2</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div class="markdownBlock" lang="en"><div class="rendered-markdown"><p>For a sequentially stored linear list of length <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.68333em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>, the time complexities for query and insertion are <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(N)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span>, respectively.</p>
</div></div><div style="color:gray;word-break:keep-all">(3分)</div></div><div style="display:flex;width:100px;justify-content:space-between"><div><input type="radio" id="TRUE" name="1091342684732575749" disabled="" checked="" value="TRUE"/><label style="margin-left:4px" for="TRUE">T</label></div><div><input type="radio" id="FALSE" name="1091342684732575749" disabled="" value="FALSE"/><label style="margin-left:4px" for="FALSE">F</label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#ff3b30">答案正确<!-- -->(3 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R1-3</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div class="markdownBlock" lang="en"><div class="rendered-markdown"><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>N</mi></msup></mrow><annotation encoding="application/x-tex">2^N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8413309999999999em;vertical-align:0em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413309999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span></span></span></span></span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>N</mi><mi>N</mi></msup></mrow><annotation encoding="application/x-tex">N^N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8413309999999999em;vertical-align:0em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413309999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span></span></span></span></span></span></span></span> have the same speed of growth.</p>
</div></div><div style="color:gray;word-break:keep-all">(3分)</div></div><div style="display:flex;width:100px;justify-content:space-between"><div><input type="radio" id="TRUE" name="1091342684732575748" disabled="" checked="" value="TRUE"/><label style="margin-left:4px" for="TRUE">T</label></div><div><input type="radio" id="FALSE" name="1091342684732575748" disabled="" value="FALSE"/><label style="margin-left:4px" for="FALSE">F</label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R1-4</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div class="markdownBlock" lang="en"><div class="rendered-markdown"><p>In a directed graph, the sum of the in-degrees must be equal to the sum of the out-degrees of all the vertices.</p>
</div></div><div style="color:gray;word-break:keep-all">(3分)</div></div><div style="display:flex;width:100px;justify-content:space-between"><div><input type="radio" id="TRUE" name="1091342684732575753" disabled="" checked="" value="TRUE"/><label style="margin-left:4px" for="TRUE">T</label></div><div><input type="radio" id="FALSE" name="1091342684732575753" disabled="" value="FALSE"/><label style="margin-left:4px" for="FALSE">F</label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#ff3b30">答案正确<!-- -->(3 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R1-5</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div class="markdownBlock" lang="en"><div class="rendered-markdown"><p>If keys are pushed onto a stack in the order {1, 2, 3, 4, 5}, then it is impossible to obtain the output sequence {3, 4, 1, 2, 5}.</p>
</div></div><div style="color:gray;word-break:keep-all">(3分)</div></div><div style="display:flex;width:100px;justify-content:space-between"><div><input type="radio" id="TRUE" name="1091342684732575745" disabled="" checked="" value="TRUE"/><label style="margin-left:4px" for="TRUE">T</label></div><div><input type="radio" id="FALSE" name="1091342684732575745" disabled="" value="FALSE"/><label style="margin-left:4px" for="FALSE">F</label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#ff3b30">答案正确<!-- -->(3 分)</span></div></div></div><div style="display:flex;font-size:16px;margin-top:16px"><span style="flex-grow:1;font-weight:bold">单选题</span><span>得分：0</span><span style="margin-left:20px">总分：65</span></div><div style="font-size:12px;display:block"><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-1</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>Suppose that an array of size <code>m</code> is used to store a circular queue.  If the front position is <code>front</code> and the current size is <code>size</code>, then the rear element must be at:</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575763" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>front+size-1</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575763" disabled="" checked="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>front+size</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575763" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>(front+size-1)%m</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575763" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>(front+size)%m</code></p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-2</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>The result of performing three DeleteMin operations in the min-heap {1,3,2,6,7,5,4,15,14,12,9,10,11,13,8} is:</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684745158660" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4,5,6,12,7,10,8,15,14,13,9,11</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684745158660" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4,5,6,7,8,9,10,11,12,13,14,15</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684745158660" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4,6,5,13,7,10,8,15,14,12,9,11</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684745158660" disabled="" checked="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4,6,5,12,7,10,8,15,14,9,13,11</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-3</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>In a complete binary tree with 1102 nodes, there must be __ leaf nodes.</p>
</div></div><div style="color:gray;word-break:keep-all">(6分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575754" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>1063</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575754" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>551</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575754" disabled="" checked="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>79</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575754" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>cannot be determined</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-4</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>Use Dijkstra algorithm to find the shortest paths from 1 to every other vertices.  In which order that the destinations must be obtained?</p>
<p><img src="https://images.ptausercontent.com/127" alt=""></p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575757" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>5, 2, 3, 4, 6</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575757" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>5, 2, 3, 6, 4</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575757" disabled="" checked="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>5, 2, 6, 3, 4</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575757" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>5, 2, 4, 3, 6</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-5</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>Given a directed graph G=(V, E) where <code>V = {v1, v2, v3, v4, v5, v6}</code> and <code>E = {&lt;v1,v2&gt;, &lt;v1,v4&gt;, &lt;v2,v6&gt;, &lt;v3,v1&gt;, &lt;v3,v4&gt;, &lt;v4,v5&gt;, &lt;v5,v2&gt;, &lt;v5,v6&gt;}</code>.  Then the topological order of G is:</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575758" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>v3, v4, v1, v5, v2, v6</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575758" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>v3, v1, v4, v5, v2, v6</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575758" disabled="" checked="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>v1, v3, v4, v5, v2, v6</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575758" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>v1, v4, v3, v5, v2, v6</code></p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-6</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>In a weighted graph, if the length of the shortest path from <code>b</code> to <code>a</code> is 10, and there exists an edge of weight 3 between <code>c</code> and <code>b</code>, then how many of the following statements is/are TRUE?</p>
<ol>
<li>The length of the shortest path from <code>c</code> to <code>a</code> must be 13.</li>
<li>The length of the shortest path from <code>c</code> to <code>a</code> must be 7.</li>
<li>The length of the shortest path from <code>c</code> to <code>a</code> must be no greater than 13.</li>
<li>The length of the shortest path from <code>c</code> to <code>a</code> must be no less than 7.</li>
</ol>
</div></div><div style="color:gray;word-break:keep-all">(6分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575756" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575756" disabled="" checked="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>3</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575756" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>2</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575756" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>1</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-7</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>The array representation of a disjoint set is given by { 4, 6, 5, 2, -3, -4, 3 }.  If the elements are numbered from 1 to 7, the resulting array after invoking <code>Union(Find(7),Find(1))</code> with union-by-size and path-compression is:</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575755" disabled="" checked="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>{ 4, 6, 5, 2, 6, -7, 3 }</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575755" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>{ 6, 6, 5, 6, 6, -7, 5 }</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575755" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>{ 4, 6, 5, 2, -7, 5, 3 }</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575755" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>{ 6, 6, 5, 6, -7, 5, 5 }</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-8</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>Given a quadtree(四叉树) with 3 nodes of degree 2, 2 nodes of degree 3, 4 nodes of degree 4.  The number of leaf nodes in this tree is __.</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684740964352" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>21</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684740964352" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>10</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684740964352" disabled="" checked="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>12</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684740964352" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>20</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-9</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>What is a critical path in an AOE network?</p>
</div></div><div style="color:gray;word-break:keep-all">(5分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575759" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>the shortest path from the first to the last event</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575759" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>the longest path from the first to the last event</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575759" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>the shortest circuit</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575759" disabled="" checked="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>the longest circuit</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-10</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>Insert { 6, 9, 12, 3, 4, 8 } one by one into an initially empty binary search tree.  The post-order traversal sequence of the resulting tree is:</p>
</div></div><div style="color:gray;word-break:keep-all">(6分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684745158659" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>3, 4, 6, 8, 12, 9</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684745158659" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4, 3, 6, 8, 12, 9</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684745158659" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>4, 3, 8, 12, 9, 6</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684745158659" disabled="" checked="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>3, 4, 9, 8, 12, 6</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-11</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>To insert <code>s</code> after <code>p</code> in a doubly linked circular list, we must do:</p>
</div></div><div style="color:gray;word-break:keep-all">(6分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684732575760" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>s-&gt;prior=p; s-&gt;next=p-&gt;next; p-&gt;next=s; p-&gt;next-&gt;prior=s;</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684732575760" disabled="" checked="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>p-&gt;next=s; s-&gt;prior=p; p-&gt;next-&gt;prior=s ; s-&gt;next=p-&gt;next;</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684732575760" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>p-&gt;next-&gt;prior=s; p-&gt;next=s; s-&gt;prior=p; s-&gt;next=p-&gt;next;</code></p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684732575760" disabled="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p><code>s-&gt;prior=p; s-&gt;next=p-&gt;next; p-&gt;next-&gt;prior=s; p-&gt;next=s;</code></p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R2-12</div><div style="overflow:auto;flex-grow:1"><div style="display:flex"><div style="flex-grow:1"><div class="rendered-markdown"><p>If an undirected graph G = (V, E) contains 7 vertices.  Then to guarantee that G is connected in any cases, there has to be at least ____ edges.</p>
</div></div><div style="color:gray;word-break:keep-all">(6分)</div></div><div style="flex-wrap:wrap;display:flex"><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="A" name="1091342684745158662" disabled="" value="A"/><label style="margin-left:4px" for="A"><div style="display:flex"><div>A.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>6</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="B" name="1091342684745158662" disabled="" value="B"/><label style="margin-left:4px" for="B"><div style="display:flex"><div>B.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>16</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="C" name="1091342684745158662" disabled="" value="C"/><label style="margin-left:4px" for="C"><div style="display:flex"><div>C.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>21</p>
</div></div></div></label></div><div style="flex-basis:97.5%;flex-grow:1"><input type="radio" id="D" name="1091342684745158662" disabled="" checked="" value="D"/><label style="margin-left:4px" for="D"><div style="display:flex"><div>D.</div><div style="margin-left:4px"><div class="rendered-markdown"><p>15</p>
</div></div></div></label></div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">答案错误<!-- -->(0 分)</span></div></div></div><div style="display:flex;font-size:16px;margin-top:16px"><span style="flex-grow:1;font-weight:bold">程序填空题</span><span>得分：5</span><span style="margin-left:20px">总分：20</span></div><div style="font-size:12px;display:block"><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R5-1</div><div style="overflow:auto;flex-grow:1"><div><div class="rendered-markdown"><p>The function is to lower the value of the integer key at position <code>P</code> by a positive amount <code>D</code> in a min-heap <code>H</code>.</p>
<pre><code class="language-c++">void DecreaseKey( int P, int D, PriorityQueue H )
{
   int i, key;
   key = H-&gt;Elements[P] - D;
   for ( i = <span><input style="max-width:none;width:19.2ch;max-height:500px" type="text" disabled="" value=""/><span style="margin-left:4px;color:gray">(5分)</span></span>; H-&gt;Elements[i/2] &gt; key; i/=2 )
      <span><input style="max-width:none;width:19.2ch;max-height:500px" type="text" disabled="" value=""/><span style="margin-left:4px;color:gray">(5分)</span></span>;
   H-&gt;Elements[i] = key;
}<br /></code></pre>
</div></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span>未作答<!-- -->(0 分)</span></div></div><div style="margin-top:12px"><div style="display:flex"><div style="margin-right:8px;white-space:nowrap;font-weight:bold">R5-2</div><div style="overflow:auto;flex-grow:1"><div><div class="rendered-markdown"><p>Please fill in the blanks in the program which performs <code>Find</code> as a Union/Find operation with path compression.</p>
<pre><code class="language-c++">SetType Find ( ElementType X, DisjSet S )
{   
   ElementType root, trail, lead;

   for ( root = X; S[root] &gt; 0; <span><input style="max-width:none;width:19.2ch;max-height:500px" type="text" disabled="" value="root = S[root]"/><span style="margin-left:4px;color:gray">(5分)</span></span> ) ;  
   for ( trail = X; trail != root; trail = lead ) {
      lead = S[trail] ;   
      <span><input style="max-width:none;width:19.2ch;max-height:500px" type="text" disabled="" value=""/><span style="margin-left:4px;color:gray">(5分)</span></span>;   
   } 
   return root;
}<br /></code></pre>
</div></div><div class="result" style="display:flex;margin-top:8px"><table><thead><tr><th>序号</th><th>结果</th><th>测试点得分</th></tr></thead><tbody><tr><td>0</td><td>答案正确</td><td>5</td></tr><tr><td>1</td><td>未作答</td><td>0</td></tr></tbody></table></div></div></div><div style="margin-top:8px;padding:4px;border:1px solid"><span style="margin-right:12px">评测结果</span><span style="color:#0a0">部分正确<!-- -->(5 分)</span></div></div></div></div></div>

</body>