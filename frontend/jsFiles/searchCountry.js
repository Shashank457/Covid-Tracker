const cases2 = async (data) => {
  try {
    const url = "http://localhost:8000/getcountries";
    const res = await axios({
      method: "POST",
      url,
      data,
    });
    if (res.status == "200")
      window.setTimeout(() => {
        location.assign("/country-data");
      });
  } catch (err) {
    console.log(err);
  }
};

document.querySelector(".search-table").addEventListener("submit", (el) => {
  el.preventDefault();
  const search = document.getElementById("search3").value;
  console.log(search);
  cases2({ search });
});
