fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        // 定义读取的函数
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            // 推送数据到流
            controller.enqueue(value);
            push();
          });
        }
        push();
      }
    });
  })
  .then(stream => {
    // 将流数据作为 text 输出
    return new Response(stream).text();
  })
  .then(data => console.log(data));
