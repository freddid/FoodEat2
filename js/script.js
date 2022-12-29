$(() => {
//    fetch('https://foodeat2.onrender.com/api/markers')
//   .then((response) => response.json())
//   .then((data) => {
//    console.log(data)
   // [{marker:'kfc', restaurant_id:'3'},{marker:'mac', restaurant_id:'12'}].forEach(el => {
   //    $(".scene")[0].innerHTML += `
   //        <a-nft
   //        smooth="true"
   //        type="nft"
   //        url="./output/${el.marker}"
   //        emitevents="true"
   //      ></a-nft>
   //        `;
   //  });

    $("a-nft").on("markerFound", (event) => {
      alert('fred')
   })
// });
});