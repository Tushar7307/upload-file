const form = document.getElementById("form");
// const fileDownload = require("js-file-download");
// form.addEventListener("submit", submitForm);

function submitForm() {
  const name = document.getElementById("name");
  const files = document.getElementById("files");
  const id = document.getElementById("id");
  const formData = new FormData();
  formData.append("description", name.value);
  formData.append("id", id.value);
  console.log(files);
  for (let i = 0; i < files.files.length; i++) {
    formData.append("files", files.files[i]);
  }
  fetch("http://localhost:3000", {
    method: "post",
    body: formData,
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
}
function fun() {
  const name = document.getElementById("name1");
  axios({
    url: `http://localhost:3000/api/downloads/download?name=${name.value}`,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const temp = response.headers["content-disposition"]
      .trim()
      .replace("attachment", "")
      .replace("filename", "")
      .replace(";", "")
      .replace("=", "")
      .replace('"', "")
      .replace('"', "");
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", temp);
    document.body.appendChild(link);
    link.click();
  });
}
