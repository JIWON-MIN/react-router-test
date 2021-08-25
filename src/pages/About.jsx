import queryString from 'query-string';

export default function About(props){
  const searchParams = props.location.search;
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParams);
  return(
    <div>
      <h3>-- About Page! --</h3>
      {/* {obj.get("name") && <p>Name is {obj.get("name")}</p>} */}
      {query.name && <p>Name is {query.name}</p>}
    </div>
  );
}