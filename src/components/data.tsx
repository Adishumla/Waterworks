const url = "http://data.goteborg.se/RiverService/v1.1/Measurements&format=Json";

const getData = async () =>{
	const response = await fetch(url);
	const data = await response.json();
	return (data);
}

export default async function Data() {
	const data = await getData();
	return (
		<p>{data}</p>
	);
}
