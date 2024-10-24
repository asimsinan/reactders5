import Yazi from "./Yazi";
function Liste({yazilar,onRemovePost}) {
  return (
    <>
      <ul>
        {yazilar.map(function (yazi) {
          return (
            
            <Yazi key={yazi.id} yazi={yazi} onRemovePost={onRemovePost}/>
          );
        })}
      </ul>
    </>
  );
}
export default Liste;
