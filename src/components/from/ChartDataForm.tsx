"use client";
import { useState } from "react";

export default function ChartDataForm({locations}:{locations: any}) {
	const [locationData,setLocationData] = useState(locations[0]);
	const [fromDate,setFromDate] = useState("2023-01-01");
	const [toDate,setToDate] = useState("2023-01-31");

	const options = locations.map((location:any)=>{
		return(
			<option key={location} value={location}>{location}</option>
		);
	});

	const changeLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLocationData(event.target.value);
	}

	const changeFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFromDate(event.target.value);
	};

	const changeToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setToDate(event.target.value);
	};

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(locationData);
		console.log(fromDate);
		console.log(toDate);
	}



	return (
		<form onSubmit={submit}>
			<select name="" id="" onChange={changeLocation}>
				{options}
			</select>
			<input type="date" name="from" id="" value={fromDate} onChange={changeFromDate} />
			<input type="date" name="to" id="" value={toDate} onChange={changeToDate} />
			<input type="submit" value="filter" />
		</form>
	);
};
