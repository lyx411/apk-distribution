// 流动代码APK分发平台的主要JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有工具提示
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // 初始化所有弹出框
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            html: true,
            trigger: 'focus'
        });
    });
    
    // 复制链接功能
    const copyButtons = document.querySelectorAll('.btn-copy-link');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            
            navigator.clipboard.writeText(link).then(() => {
                // 显示复制成功的提示
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check me-2"></i>已复制';
                this.classList.add('btn-success');
                this.classList.remove('btn-outline-secondary');
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('btn-success');
                    this.classList.add('btn-outline-secondary');
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        });
    });
    
    // 版本过滤功能
    const versionFilter = document.getElementById('versionFilter');
    if (versionFilter) {
        versionFilter.addEventListener('input', function() {
            const filterText = this.value.toLowerCase();
            const versionRows = document.querySelectorAll('tbody tr');
            
            versionRows.forEach(row => {
                const version = row.querySelector('.text-code').textContent.toLowerCase();
                const changelog = row.querySelector('.changelog').textContent.toLowerCase();
                const title = row.querySelector('.fw-bold').textContent.toLowerCase();
                
                if (version.includes(filterText) || changelog.includes(filterText) || title.includes(filterText)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
    
    // 添加下载计数器功能
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 显示下载计数提示
            const downloadCount = Math.floor(Math.random() * 5000) + 10000; // 模拟下载次数
            
            const toast = document.createElement('div');
            toast.className = 'position-fixed bottom-0 end-0 p-3';
            toast.style.zIndex = 11;
            
            toast.innerHTML = `
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <i class="fas fa-download me-2 text-flow-code"></i>
                        <strong class="me-auto">下载统计</strong>
                        <small>刚刚</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        <span class="text-flow-code">${downloadCount.toLocaleString()}</span> 名开发者已下载此版本
                    </div>
                </div>
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 5000);
        });
    });
});