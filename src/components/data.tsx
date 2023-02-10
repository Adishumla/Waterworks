
const url = "http://data.goteborg.se/RiverService/v1.1/Measurements&format=Json";

function getData = async () =>{
	const response = await fetch(url);
	const data = await response.json();
	return (data);
}
const data = getData();

export default function Data({}) {
	return (
		<p>{data}</p>
	);
}
