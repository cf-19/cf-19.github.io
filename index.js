const conf = [
    // {
    //     title: "中医",
    //     date: "2021-4-27"
    // },
    // {
    //     title: "一次内存泄漏debug",
    //     date: "2021-4-26"
    // },
    {
        title: "博客搭建第一天",
        date: "2021-4-18"
    }
];

// idea
// 1. 中医

function init() {
    for (let i = 0; i < conf.length; i++) {
        const item = conf[i];
        const blogItem = document.createElement("div")
        i === 0 && (blogItem.style = "margin-top:3%;")

        blogItem.onclick = () => (window.location.href = window.origin + `/blogs/${item.date}.html`);
        blogItem.className = "title"

        const title = document.createElement("p")
        const date = document.createElement("p")
        title.innerText = item.title;
        date.innerText = item.date;

        blogItem.appendChild(title);
        blogItem.appendChild(date);

        document.body.appendChild(blogItem);
    }
}

init();