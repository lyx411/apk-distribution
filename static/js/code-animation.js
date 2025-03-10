// 流动代码背景动画
document.addEventListener('DOMContentLoaded', function() {
    // 代码片段示例 - 更多样化的代码片段
    const codeSnippets = [
        // JavaScript/TypeScript
        "function optimize() { return performance.now(); }",
        "class FlowCode extends Optimizer { }",
        "const result = await api.fetch('/data');",
        "import { useState, useEffect } from 'react';",
        "let algorithm = new FastAlgorithm();",
        "if (performance.isOptimized()) { }",
        "for (let i = 0; i < data.length; i++) { }",
        "export default class CodeFlow { }",
        "const [state, setState] = useState(null);",
        "var config = { optimize: true };",
        "return new Promise((resolve) => { });",
        "<FlowCode theme=\"dark\" />",
        "let performance = { score: 98.5 };",
        "try { optimize(); } catch (e) { }",
        "const flowChart = new FlowChart();",
        
        // Java
        "public static void main(String[] args) { }",
        "@Override public void onOptimize() { }",
        "private void processData(byte[] data) { }",
        "public List<String> getOptimizedCode() { }",
        "for(int i=0; i<arr.length; i++) { }",
        "class FlowingCode implements Optimizer { }",
        
        // Python
        "def process_data(input): return output",
        "class FlowCode(Optimizer):",
        "import numpy as np",
        "for i in range(len(data)):",
        "def __init__(self, optimizer=True):",
        "try: optimize() except Exception as e:",
        
        // C++
        "int main(int argc, char** argv) { }",
        "template<typename T> class Optimizer { };",
        "for(auto& item : collection) { }",
        "std::vector<int> data = optimize();",
        "void processFlow(const std::string& code) {"
    ];
    
    // 创建一个全局的流动代码背景
    createGlobalCodeBackground();
    
    // 创建全局代码背景
    function createGlobalCodeBackground() {
        // 创建全局背景容器
        const globalCodeBg = document.createElement('div');
        globalCodeBg.className = 'global-code-bg';
        globalCodeBg.style.position = 'fixed';
        globalCodeBg.style.top = '0';
        globalCodeBg.style.left = '0';
        globalCodeBg.style.width = '100%';
        globalCodeBg.style.height = '100%';
        globalCodeBg.style.pointerEvents = 'none';  // 使背景不阻碍交互
        globalCodeBg.style.zIndex = '0';  // 置于最底层
        document.body.appendChild(globalCodeBg);
        
        // 创建 CodeRain 容器
        const codeRain = document.createElement('div');
        codeRain.className = 'code-rain';
        codeRain.style.position = 'absolute';
        codeRain.style.top = '0';
        codeRain.style.left = '0';
        codeRain.style.width = '100%';
        codeRain.style.height = '100%';
        codeRain.style.overflow = 'hidden';
        globalCodeBg.appendChild(codeRain);
        
        // 减少代码线的数量，从40-60降至20-30
        const linesCount = Math.floor(Math.random() * 10) + 20;
        
        for (let i = 0; i < linesCount; i++) {
            createCodeLine(codeRain, codeSnippets, true);
        }
        
        // 然后为特定区域添加额外的强调
        const codeWrappers = document.querySelectorAll('.code-wrapper');
        codeWrappers.forEach(wrapper => {
            // 获取包装器的位置，以便创建更集中的代码雨
            const rect = wrapper.getBoundingClientRect();
            const wrapperWidth = rect.width;
            const codeRain = document.createElement('div');
            codeRain.className = 'code-rain';
            wrapper.appendChild(codeRain);
            
            // 在特定区域创建8-15条更稀疏的代码线
            const linesCount = Math.floor(Math.random() * 7) + 8;
            
            for (let i = 0; i < linesCount; i++) {
                createCodeLine(codeRain, codeSnippets, false, wrapperWidth);
            }
        });
    }
    
    // 创建单条代码线
    function createCodeLine(parent, snippets, isGlobal = false, parentWidth = null) {
        const line = document.createElement('div');
        line.className = 'code-line';
        
        // 随机选择一个代码片段
        const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
        line.textContent = randomSnippet;
        
        // 随机位置和动画持续时间
        const leftPos = Math.random() * 100;
        // 根据是否是全局动画设置不同的动画时间
        const duration = isGlobal ? 
                        (Math.random() * 15) + 20 : // 全局使用慢速：20-35秒
                        (Math.random() * 8) + 12;   // 区域使用快速：12-20秒
                        
        const delay = Math.random() * 15; // 0-15秒延迟，更分散
        const startPos = Math.random() * -100; // 起始位置在视口上方
        
        line.style.left = `${leftPos}%`;
        line.style.top = `${startPos}%`;
        line.style.opacity = isGlobal ? '0.15' : '0.25'; // 大幅降低透明度
        line.style.animationDuration = `${duration}s`;
        line.style.animationDelay = `${delay}s`;
        
        // 添加自然随机
        if (Math.random() > 0.5) {
            line.style.filter = 'blur(0.7px)';
        }
        
        // 随机倾斜角度 -3度到3度（减少倾斜幅度）
        const rotation = (Math.random() * 6) - 3;
        line.style.transform = `rotate(${rotation}deg)`;
        
        // 随机字体大小 (全局背景更小)
        const fontSize = isGlobal ? 
                        9 + Math.floor(Math.random() * 2) :  // 9-10px
                        10 + Math.floor(Math.random() * 2);  // 10-11px
        line.style.fontSize = `${fontSize}px`;
        
        // 添加到父元素
        parent.appendChild(line);
        
        // 动画结束后创建新的代码行
        setTimeout(() => {
            line.remove();
            createCodeLine(parent, snippets, isGlobal, parentWidth);
        }, (duration + delay) * 1000);
    }
});