function lovetime() {
    const startDate = new Date(Date.UTC(2022, 5, 3)); 
    setInterval(() => {
        const diff = new Date() - startDate;
        const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const diffDays = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
        const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const diffMinutes = Math.floor((diff / (1000 * 60)) % 60);
        const diffSeconds = Math.floor((diff / 1000) % 60);
        const loveTimeHtml = `我们相<img class='heartgit' style='width: 20px; vertical-align: middle;' src='https://pic.zhaotu.me/2023/08/15/5b228fae-e2cf-4800-b18c-fd0ea33bad807106fba581761f87.gif'>了：</br>
                            ${diffYears}年 ${diffDays}天 ${diffHours}时 ${diffMinutes}分 ${diffSeconds}秒啦`;
        const lovepyqSitetimeElement = document.getElementById("lovepyqSitetime");
        if (lovepyqSitetimeElement) {
            lovepyqSitetimeElement.innerHTML = loveTimeHtml;
        }
    }, 1000);
}
lovetime();
