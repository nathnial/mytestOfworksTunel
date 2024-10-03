fetch('https://cors-anywhere.herokuapp.com/https://www.baidu.com', {
    // mode: 'no-cors'
})
    .then(sponse => {
        if (!sponse.ok) {
            throw new Error('Network response ws not ok');
        }
        // console.log(sponse.text())
        // return sponse.text()
        return sponse.text();
        // return sponse.json();
    })
    // .then(data => console.log(data))
    .then(data => {
        const iframe = document.getElementById('iframe');
        iframe.srcdoc = data; // 设置 iframe 的 srcdoc 属性为 HTML 数据
        // document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Fetch error:', error))