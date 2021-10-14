/**
 * 1. REQUEST thành công thì trả về 6 đối tượng
 *      + config: cấu hình
 *      + data: dữ liệu
 *      + headers: tiêu đề
 *      + request: yêu cầu phản hồi
 *      + status: chỉ số (200,...)
 *      + statusText: trạng thái văn bản
 *
 * 2. GET REQUEST: trả về dữ liệu mà ta mong muốn. Có thể filter dữ liệu trả về
 *                 VD: limit, timeout, ...
 *
 * 3. POST REQUEST: thêm một hoặc nhiều dữ liệu
 *
 * 4. PUT REQUEST: update các đối tượng đã chỉnh sửa còn lại đối tượng
 *                 không chỉnh sửa trong cùng một object sẽ bị xóa
 *
 * 5. PATCH REQUEST: update các đối tượng đã chỉnh sửa và các đối tượng
 *                   còn lại trong cùng một object sẽ giữ nguyên
 *
 * 6. DELETE REQUEST: xóa một hoặc nhiều dữ liệu. Nhưng phải truyền vào
 *                    đối tượng như id, name, ... tùy vào API
 *
 * 7. ALL REQUEST: trả về nhiều dữ liệu qua nhiều đường dẫn khác nhau
 *
 * 8. SPREAD REQUEST: thường dùng khi sử dụng ALL REQUEST. Mục đích để
 *                    trả về dữ liệu
 *
 * 9. INTERCEPTING REQUESTS & RESPONSES: theo dõi các REQUESTS and RESPONSES
 *                                       hay gọi là đánh chặn để lấy thông tin
 *
 * 10.
 */

// AXIOS GLOBAL
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getPosts() {
  // --C1
  // axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/posts',
  //     params: {
  //         _limit: 5
  //     }
  // })
  //     .then(res => showOutput(res))
  //     .catch(err => console.error(err))

  // --C2
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=5", {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addPost() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "New Post",
      body: "Learn Axios",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updatePost() {
  // axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  //     title: 'Update New Post: sunt aut facere',
  //     body: 'Learn Axios'
  // })
  //     .then(res => showOutput(res))
  //     .catch(err => console.error(err))

  axios
    .patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "Update New Post: sunt aut facere",
      body: "Learn Axios",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removePost() {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    ])
    .then(
      axios.spread((posts, todos) => {
        showOutput(posts);
      })
    )
    .catch((err) => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authention: "sometoken",
    },
  };

  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "New Post",
        body: "Learn Axios",
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };
  axios(options).then((res) => showOutput(res));
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/postss", {
      validateStatus: function(status) {
        return status < 500;
      }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/posts', {
    cancelToken: source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    }
  });

  if(true) {
    source.cancel('Request canceled!');
  }
}

// AXIOS INSTANCE
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// axiosInstance.get('/comments?_limit=5').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

document.getElementById("get").addEventListener("click", getPosts);
document.getElementById("post").addEventListener("click", addPost);
document.getElementById("update").addEventListener("click", updatePost);
document.getElementById("delete").addEventListener("click", removePost);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document.getElementById("transform").addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);

