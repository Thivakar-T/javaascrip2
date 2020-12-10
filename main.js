var editText;
var customerArray = [];
function validateForm() {
    var regex = new RegExp("^[a-zA-Z ]");
    var num = new RegExp("^[0-9]*$");
    var a = document.getElementById("name").value;
    var b = document.getElementById("Type").selectedIndex;
    var c = document.getElementById("GST").value;
    var d = document.getElementById("State").selectedIndex;
    var e = document.getElementById("City").selectedIndex;
    var f = document.getElementById("Country").selectedIndex;
    var g = document.getElementById("Number1").value;
    var h = document.getElementById("Number2").value;
    var i = document.getElementById("Contact").value;
    var j = document.getElementById("Prefix").value;
    var k = document.getElementById("Sefix").value;

    if (a == "") {
        document.getElementById('name_err').innerHTML = "required";
    }
    else {
        document.getElementById('name_err').innerHTML = "";
    }
    if (b == "") {
        document.getElementById('name_err1').innerHTML = "required";
    }
    else {
        document.getElementById('name_err1').innerHTML = "";
    }
    if (c == "") {
        document.getElementById('name_err2').innerHTML = "required";
    }
    else {
        document.getElementById('name_err2').innerHTML = "";
    }
    if (d == "") {
        document.getElementById('name_err3').innerHTML = "required";
    }
    else {
        document.getElementById('name_err3').innerHTML = "";
    }
    if (e == "") {
        document.getElementById('name_err4').innerHTML = "required";
    }
    else {
        document.getElementById('name_err4').innerHTML = "";
    }
    if (f == "") {
        document.getElementById('name_err5').innerHTML = "required";
    }
    else {
        document.getElementById('name_err5').innerHTML = "";
    }
    if (g == "") {
        document.getElementById('name_err6').innerHTML = "required";
    }
    else {
        document.getElementById('name_err6').innerHTML = "";
    }
    if (h == "") {
        document.getElementById('name_err7').innerHTML = "required";
    }
    else {
        document.getElementById('name_err7').innerHTML = "";
    }
    if (i == "") {
        document.getElementById('name_err8').innerHTML = "required";
    }
    else {
        document.getElementById('name_err8').innerHTML = "";
    }
    if (j == "") {
        document.getElementById('name_err9').innerHTML = "required";
    }
    else {
        document.getElementById('name_err9').innerHTML = "";
    }
    if (k == "") {
        document.getElementById('name_err10').innerHTML = "required";
        return false;
    }
    else {
        document.getElementById('name_err10').innerHTML = "";

    }
    console.log(editText)

    inserTable();

    document.getElementById("name").value = '';
    document.getElementById("name").value = '';
    document.getElementById("Type").selectedIndex = '';
    document.getElementById("GST").value = '';
    document.getElementById("State").selectedIndex = '';
    document.getElementById("City").selectedIndex = '';
    document.getElementById("Country").selectedIndex = '';
    document.getElementById("Number1").value = '';
    document.getElementById("Number2").value = '';
    document.getElementById("Contact").value = '';
    document.getElementById("Prefix").value = '';
    document.getElementById("Sefix").value = '';


}
function inserTable() {
    if (editText != undefined) {
        customerArray.splice(editText, 1);
    }
    var rate_value;
    var a = document.getElementById("name").value;
    var b = document.getElementById("Type").selectedIndex;
    var c = document.getElementById("GST").value;
    var d = document.getElementById("State").selectedIndex;
    var e = document.getElementById("City").selectedIndex;
    var f = document.getElementById("Country").selectedIndex;
    var g = document.getElementById("Number1").value;
    var h = document.getElementById("Number2").value;
    var i = document.getElementById("Contact").value;
    var j = document.getElementById("Prefix").value;
    var k = document.getElementById("Sefix").value;

    var customerObj = {
        name: a,
        Type: b,
        GST: c,
        State: d,
        City: e,
        Country: f,
        Number1: g,
        Number2: h,
        Contact: i,
        result: rate_value,
        Obj :{
            Prefix: j,
            Sefix: k
        }
    };
    customerArray.push(customerObj);
    console.log(customerArray);
    addTable();

}
function addTable() {
    var v = "";
    editText = undefined;
    for (i = 0; i < customerArray.length; i++) {
      v += "<tr>";
      v += "<td>" + customerArray[i].name + "</td>";
      v += "<td>" + customerArray[i].GST + "</td>";
      v += "<td>" + customerArray[i].Contact + "</td>";
      v += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' + i + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' + i + ')">Delete</button></td>';
    }
    document.getElementById("displayArea").innerHTML = v;
  }
  function Delete(item) {
    customerArray.splice(item, 1);
    addTable();
  };
  function Edit(item) {
    editText = item;
    console.log(item);
    console.log(customerArray);
    console.log(customerArray[item]);
    document.getElementById("name").value = customerArray[item].name;
    document.getElementById("Type").selectedIndex = customerArray[item].Type;
    document.getElementById("GST").value = customerArray[item].GST;
    document.getElementById("State").selectedIndex = customerArray[item].State;
    document.getElementById("City").selectedIndex = customerArray[item].City;
    document.getElementById("Country").selectedIndex = customerArray[item].Country;
    document.getElementById("Number1").value = customerArray[item].Number1;
    document.getElementById("Number2").value = customerArray[item].Number2;
    document.getElementById("Contact").value = customerArray[item].Contact;
    document.getElementById("Prefix").value = customerArray[item].Obj.Prefix;
    document.getElementById("Sefix").value = customerArray[item].Obj.Sefix;
  
  
  };
  
  
