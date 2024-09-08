function Detail() {
   var date=new Date();
  //  var time=new Date()
   
   return (
     <div class="details">
        <div id="time">{date.toLocaleTimeString()}</div>
        <div id="date">{date.toDateString()}</div>
     </div>
   )

}

export default Detail;