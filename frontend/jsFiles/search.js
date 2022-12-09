const cases = async (data) => {
  try {
    const url = "http://localhost:8000/getcountry";
    const res = await axios({
      method: "POST",
      url,
      data,
    });
    if (res.status == "200")
      window.setTimeout(() => {
        location.assign("/country");
      });
  } catch (err) {
    console.log(err);
  }
};
document.querySelector(".searchcountry").addEventListener("submit", (el) => {
  el.preventDefault();
  const search = document.getElementById("search").value;
  cases({ search });
});
document.querySelector(".searchcountry2").addEventListener("submit", (el) => {
  el.preventDefault();
  const search = document.getElementById("search2").value;
  cases({ search });
});
