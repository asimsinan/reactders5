function Yazi({yazi,onRemovePost}){
  function handleRemovePost(){
    onRemovePost(yazi);
  }
    return(
        <li>
        {yazi.baslik + "," + yazi.yazar + "," +yazi.puan}
        <span><button onClick={handleRemovePost}>Sil</button></span>
      </li>

  
    )
}
export default Yazi;