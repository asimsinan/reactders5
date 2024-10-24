function Yazi({ yazi, onRemovePost }) {
  function handleRemovePost() {
    onRemovePost(yazi);
  }
  return (
    <li>
      <span>{yazi.baslik + ", " + yazi.yazar + ", " + yazi.puan}</span>&nbsp;
      <span>
        <button onClick={handleRemovePost}>Sil</button>
      </span>
    </li>
  );
}
export default Yazi;
