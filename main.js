function calcProjs() {
	//Get Inputs for Projects
	var p1Input = document.getElementById("project1input");
	var p2Input = document.getElementById("project2input");
	var p3Input = document.getElementById("project3input");
	var p4Input = document.getElementById("project4input");
	var p5Input = document.getElementById("project5input");
	var p6Input = document.getElementById("project6input");
	
	//Get Totals for Projects
	var p1Total = document.getElementById("project1total");
	var p2Total = document.getElementById("project2total");
	var p3Total = document.getElementById("project3total");
	var p4Total = document.getElementById("project4total");
	var p5Total = document.getElementById("project5total");
	var p6Total = document.getElementById("project6total");
	
	var received = Number(p1Input.value) + Number(p2Input.value) + Number(p3Input.value) + Number(p4Input.value) + Number(p5Input.value) + Number(p6Input.value);
	var total = Number(p1Total.value) + Number(p2Total.value) + Number(p3Total.value) + Number(p4Total.value) + Number(p5Total.value) + Number(p6Total.value);
	
	document.getElementById("projectsinput").value = received;
	document.getElementById("projecttotal").value = total;
}

function calcExams() {
	var midIn = document.getElementById("midInput");
	var finIn = document.getElementById("finInput");
	
	var midTotal = document.getElementById("midTotal");
	var finTotal = document.getElementById("finTotal");

	var received = Number(midIn.value) + Number(finIn.value);
	var total = Number(midTotal.value) + Number(finTotal.value);
	
	document.getElementById("examInput").value = received;
	document.getElementById("examTotal").value = total;
}

function calcAttendance() {
	var hw1In = document.getElementById("classInput");
	var hw1Tot = document.getElementById("classTotal");;
	
	var hw2In = document.getElementById("labInput");;
	var hw2Tot = document.getElementById("labTotal");;
	
	var received = Number(hw1In.value) + Number(hw2In.value);
	var total = Number(hw1Tot.value) + Number(hw2Tot.value);
	
	document.getElementById("attInput").value = received;
	document.getElementById("attTotal").value = total;
	
}

function calcOverall() {
	var projRec = document.getElementById("projectsinput");
	var projTot = document.getElementById("projecttotal");
	
	var midIn = document.getElementById("midInput");
	var midTotal = document.getElementById("midTotal");
	
	var finIn = document.getElementById("finInput");
	var finTotal = document.getElementById("finTotal");
	
	var attRec = document.getElementById("attInput");
	var attTot = document.getElementById("attTotal");
	
	var projWeight = Number(Number(projRec.value) / Number(projTot.value)) * 100 * 0.4;
	var midWeight = Number(Number(midIn.value) / Number(midTotal.value)) * 100 * 0.3;
	var finWeight = Number(Number(finIn.value) / Number(finTotal.value)) * 100 * 0.2;
	var attWeight = Number(Number(attRec.value) / Number(attTot.value)) * 100 * 0.1;
	
	console.log("Proj Weight " + projWeight);
	console.log("Mid Weight " + midWeight);
	console.log("Fin Weight " + finWeight);
	console.log("Att Weight " + attWeight);
	
	document.getElementById("projOverall").value = Number(projWeight.toFixed(2));
	document.getElementById("midOverall").value = Number(midWeight.toFixed(2));
	document.getElementById("finOverall").value = Number(finWeight.toFixed(2));
	document.getElementById("attOverall").value = Number(attWeight.toFixed(2));
	
	var total = projWeight + midWeight + finWeight + attWeight;
	document.getElementById("overallTotal").value = total;
}

