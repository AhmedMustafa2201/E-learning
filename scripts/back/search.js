document.getElementById("signin").onclick = ()=>{location.replace("login.html")};
document.getElementById("signup").onclick = ()=>{location.replace("register.html")};
  function getAllData(collection) {
    return collection.get();
  }


function test_me(e, orderBy) {
  debugger;

  if (e != ""||orderBy!=undefined) {
    var text = e.trim();
    // firebase doesn't support full text search
    lessonCollection.orderBy('createdAt', 'desc').get().then((s) => {
      s.docs.forEach((d) => {
        if (d.data().name.includes(text) ==true) {
          document.getElementsByClassName("trending-courses")[0].innerHTML+=
            `<div class="t-course">
            <div class="t-course-content">
                <img class="img" src="images/server_content/lessons/${d.data().img}">
                <h3>${d.data().name}</h3>
            </div>
            <div class="t-course-hover">
                <div></div>
                <h4 onclick="getSpecificLesson('${d.id}')">ابدأ الآن</h4>
            </div>
          </div>`;
        }
      });
      // document.getElementsByClassName("trending-courses")[0].innerHTML=`<h1>لا يوجد بيانات لعرضها</h1>`
      document.getElementById("search-result").innerHTML = document.getElementsByClassName("t-course").length;
    });
  } else {
    getAllData(lessonCollection)
    .then(res =>{
      // console.log(res.docs.length)
        res.docs.forEach((d) => {
            document.getElementsByClassName("trending-courses")[0].innerHTML+=
            `<div class="t-course">
            <div class="t-course-content">
                <img class="img" src="images/server_content/lessons/${d.data().img}">
                <h3>${d.data().name}</h3>
            </div>
            <div class="t-course-hover">
                <div></div>
                <h4 onclick="getSpecificLesson('${d.id}')">ابدأ الآن</h4>
            </div>
             </div>`;
          });
          document.getElementById("search-result").innerHTML = document.getElementsByClassName("t-course").length;
        })
  }
}
