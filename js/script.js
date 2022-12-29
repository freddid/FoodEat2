$(() => {
   fetch('https://foodeat2.onrender.com/api/markers')
  .then((response) => response.json())
  .then((data) => {
   console.log(data)
   data.forEach(el => {
      $(".scene")[0].innerHTML += `
          <a-nft
          smooth="true"
          type="nft"
          data-mark=${el.restaurant_id[0]}
          url="http://185.211.170.2:5000/${el.marker}"
          emitevents="true"
        ></a-nft>
          `;
    });

    $("a-nft").on("markerFound", (event) => {
      alert('fred')
   })
});
});