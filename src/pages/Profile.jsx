export default function Profile(props){
  const id = props.match.params.id;
  console.log(id, typeof id);
  return(
    <div>
      <h3>-- Profile Page! --</h3>
      {id && <p>ID is {id}</p>}
    </div>
  );
}