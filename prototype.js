var teacher = function(){

}

teacher.get_teacher.name = "Default name";
teacher.get_teacher._subject = "Default subject";
teacher.get_teacher.department = "Default department";

teacher.get_teacher.get_all = function(){
	console.log("Teacher Name: "+this.name+"\n"+"Subject: "+this.subject+"Department: "+this.department+"\n");
}

var teacher1 = new teacher()
teacher1.name = "Sadia sultana";
teacher1._subject = "CSE";
teacher1.department = "computer science & engineering";

teacher1.get_all()