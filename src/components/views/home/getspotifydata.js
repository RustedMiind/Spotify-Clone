let elements = document.getElementsByClassName(
  "h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4"
);
let data = [];

//   let a7a = {
//     id: song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 eRYMpa VrRwdIZO0sRX1lsWxJBe")[0].innerText,
//     img:song.getElementsByClassName("mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj")[0].src,
//     title:song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line")[0].innerText,
//     by:song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 dvSMET rq2VQ5mb9SDAFWbBIUIn standalone-ellipsis-one-line").map((item)=>{
//       return item.getElementsByTagName("a")
//     }),
//     albums:song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 hGXzYa").map((item)=>{
//       return item.getElementsByClassName("standalone-ellipsis-one-line")
//     }),
//     date:song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 dvSMET")[0].innerText,
//     duration:song.getElementsByClassName("Type__TypeElement-sc-goli3j-0 dvSMET Btg2qHSuepFGBG6X0yEN")[0].innerText,

// }
for (let i = 0; i < 20; i++) {
  data.push({
    id: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName(
        "Type__TypeElement-sc-goli3j-0 eRYMpa VrRwdIZO0sRX1lsWxJBe"
      )[0].innerText,
    img: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName(
        "mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj"
      )[0].src,
    title: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName(
        "Type__TypeElement-sc-goli3j-0 kHHFyx t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"
      )[0].innerText,
    by: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName(
        "Type__TypeElement-sc-goli3j-0 dvSMET rq2VQ5mb9SDAFWbBIUIn standalone-ellipsis-one-line"
      )[0].innerText,
    albums: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName("Type__TypeElement-sc-goli3j-0 hGXzYa")[0]
      .innerText,
    date: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName("Type__TypeElement-sc-goli3j-0 dvSMET")[0]
      .innerText,
    duration: document
      .getElementsByClassName("h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4")
      [i].getElementsByClassName(
        "Type__TypeElement-sc-goli3j-0 dvSMET Btg2qHSuepFGBG6X0yEN"
      )[0].innerText,
  });
}
console.log(JSON.stringify(data));
