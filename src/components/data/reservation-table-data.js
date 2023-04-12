let rawData;
let columnsObj;
const changeReservationTableData = () =>{
	if(window.location.pathname === "/dashboard"){
		rawData = [
			{
				id: "wqke",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "wqsf",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "dfdgg",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "fdfdg",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "wfdrg",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "lkhf",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "wdfgl",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "John Doe",
				phone: "0703473734",
				price: "₦2500"
			},
			{
				id: "wdfgl",
				date: "11-01-2023",
				code: "USPG287GB",
				item: "Paracetamol",
				amount: "4 packs",
				customer: "James Doe",
				phone: "0703473734",
				price: "₦2500"
			}
		]

		columnsObj = [
			{
				Header: "DATE",
				accessor: "date"
			},
			{
				Header: "CODE",
				accessor: "code"
			},
			{
				Header: "ITEM",
				accessor: "item"
			},
			{
				Header: "AMOUNT",
				accessor: "amount"
			},
			{
				Header: "CUSTOMER",
				accessor: "customer"
			},
			{
				Header: "PHONE",
				accessor: "phone"
			},
			{
				Header: "PRICE",
				accessor: "price"
			},
		]
		return {rawData, columnsObj};
	}
	else if(window.location.pathname === "/inventory"){
		rawData = [{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"}]
		columnsObj = [{Header: "DATE",accessor: "date"},{Header: "NAME",accessor: "name"},{Header: "CATEGORY",accessor: "category"},{Header: "PRICE",accessor: "price"}]

		return {rawData, columnsObj};
	}
	else if(window.location.pathname === "/inventory/oral-drugs"){
		rawData = [{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"},
					{date : "11-01-2023",name: "Paracetamol",category: "Oral Drug",price: "₦350"}]
		columnsObj = [{Header: "DATE ADDED",accessor: "date"},{Header: "NAME",accessor: "name"},{Header: "CATEGORY",accessor: "category"},{Header: "PRICE",accessor: "price"}]
		return {rawData, columnsObj};
	}
}

export default changeReservationTableData;