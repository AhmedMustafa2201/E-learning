
  function getAllData(collection) {
    return collection.get();
  }


function test_me(e, orderBy) {
  debugger;

  if (e != ""||orderBy!=undefined) {
    var text = e.trim();
    lessonCollection.orderBy('createdAt', 'desc').get().then((s) => {
      s.docs.forEach((d) => {
        if (d.data().name.search(text) != -1) {
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
      document.getElementById("search-result").innerHTML = s.docs.length
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
          document.getElementById("search-result").innerHTML = res.docs.length
    })
  }
    // courseCollection.add({
    //   name: "التوابع وأنواعها",
    //   img: "3.jpg",
    //   price: 40,
    //   rating: 5,
    //   description: "ekrhvnre tgrtbb tr grevgjio erhfirugbvr",
    //   feedback: ['"What a wonderful course!!" user 4', '"Well at go!!" user 6'],
    //   createdAt: serverTimestamp(),
    // });

//   lessonCollection.add({
//     name: "الجمع بأنواعه",
//     videoLink:"https://www.youtube.com/watch?v=TWuPHGvMRq0",
//     attachment:"file.pdf",
//     courseID:"Ike2zeX5rgefv3DxtlPS",
//     createdAt: serverTimestamp()
//   })
}
