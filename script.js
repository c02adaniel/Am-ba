var ertek="X";
var szin="kek"
var tabla_meret1="1.2em";
var tabla_meret2="2.2em";
var font_meret1="1em";
var font_meret2="1.9em";
var tabla_meret=tabla_meret2;
var font_meret=font_meret2;
var nyertes="";
var jatekos1="";
var jatekos2="";
var nyert=false;
//----------
function tabla()
	{
		
		meret1= document.getElementById("meret").value;
		if((isNaN(meret1)) || (meret1<5))
			{
				//nem szám
				var meret=20;
				document.getElementById("meret").value=meret;
			}
			else
			{
				//szám
				var meret=meret1;
			};
		var tabla=""
		for (i=1; i<=meret; i++)
			{
				tabla+='<tr>';
				for (j=1; j<=meret; j++)
					{
						tabla+='<td id="'+i+'_'+j+'" onclick="jelol(this.id)"></td>';
					};
				tabla+='</tr>';
			}
		document.getElementById("amoba").innerHTML=tabla;
	}
function meretez()
	{
		document.body.style.fontSize = font_meret;
		var tds = document.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++)
			{
				tds[i].style.width = tabla_meret;
				tds[i].style.height = tabla_meret;
			};
		if (tabla_meret==tabla_meret1)
			{
				tabla_meret=tabla_meret2;
				font_meret=font_meret2;
			}
			else
			{
				tabla_meret=tabla_meret1;
				font_meret=font_meret1;
			}
	}
function jelol(id)
	{
		if ((document.getElementById(id).innerHTML=="") && (!nyert))
			{
				document.getElementById(id).innerHTML=ertek;
				document.getElementById(id).className=szin;
				if (ertek=="O")
					{
						ertek="X";
						szin="kek";
					}
					else
					{
						ertek="O";
						szin="piros";
					}
			}
		ellenoriz();
	}
function ellenoriz()
	{
		var meret=document.getElementById("meret").value;
		for (var i=1; i<=meret; i++)
			{
				for (var j=1; j<=meret-4; j++)
					{
						var egy=j+1;
						var ketto=j+2;
						var harom=j+3;
						var negy=j+4;
						if ((document.getElementById(i+"_"+j).innerHTML==document.getElementById(i+"_"+egy).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(i+"_"+ketto).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(i+"_"+harom).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(i+"_"+negy).innerHTML) && ((document.getElementById(i+"_"+j).innerHTML=="X") || (document.getElementById(i+"_"+j).innerHTML=="O")))
							{
								nyertes=document.getElementById(i+"_"+j).innerHTML;
								nyert=true;
								document.getElementById(i+"_"+j).className+=" nyert";
								document.getElementById(i+"_"+egy).className+=" nyert";
								document.getElementById(i+"_"+ketto).className+=" nyert";
								document.getElementById(i+"_"+harom).className+=" nyert";
								document.getElementById(i+"_"+negy).className+=" nyert";
								break;
							}
					}
				if (nyert)
					{
						break;
					}
			}
		if (!nyert)
			{
				for (var i=1; i<=meret; i++)
					{
						for (var j=1; j<=meret-4; j++)
							{
								var egy=j+1;
								var ketto=j+2;
								var harom=j+3;
								var negy=j+4;
								if ((document.getElementById(j+"_"+i).innerHTML==document.getElementById(egy+"_"+i).innerHTML) && (document.getElementById(j+"_"+i).innerHTML==document.getElementById(ketto+"_"+i).innerHTML) && (document.getElementById(j+"_"+i).innerHTML==document.getElementById(harom+"_"+i).innerHTML) && (document.getElementById(j+"_"+i).innerHTML==document.getElementById(negy+"_"+i).innerHTML) && ((document.getElementById(j+"_"+i).innerHTML=="X") || (document.getElementById(j+"_"+i).innerHTML=="O")))
									{
										nyertes=document.getElementById(j+"_"+i).innerHTML;
										nyert=true;
										document.getElementById(j+"_"+i).className+=" nyert";
										document.getElementById(egy+"_"+i).className+=" nyert";
										document.getElementById(ketto+"_"+i).className+=" nyert";
										document.getElementById(harom+"_"+i).className+=" nyert";
										document.getElementById(negy+"_"+i).className+=" nyert";
										break;
									}
							}
						if (nyert)
							{
								break;
							}
					}
		
			}
		if (!nyert)
			{
				for (var i=1; i<=meret-4; i++)
					{
						for (var j=1; j<=meret-4; j++)
							{
								var egy=j+1;
								var ketto=j+2;
								var harom=j+3;
								var negy=j+4;
								var egy1=i+1;
								var ketto1=i+2;
								var harom1=i+3;
								var negy1=i+4;
								if ((document.getElementById(i+"_"+j).innerHTML==document.getElementById(egy1+"_"+egy).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(ketto1+"_"+ketto).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(harom1+"_"+harom).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(negy1+"_"+negy).innerHTML) && ((document.getElementById(i+"_"+j).innerHTML=="X") || (document.getElementById(i+"_"+j).innerHTML=="O")))
									{
										nyertes=document.getElementById(i+"_"+j).innerHTML;
										nyert=true;
										document.getElementById(i+"_"+j).className+=" nyert";
										document.getElementById(egy1+"_"+egy).className+=" nyert";
										document.getElementById(ketto1+"_"+ketto).className+=" nyert";
										document.getElementById(harom1+"_"+harom).className+=" nyert";
										document.getElementById(negy1+"_"+negy).className+=" nyert";
										break;
									}
							}
						if (nyert)
							{
								break;
							}
					}
			}
		if (!nyert)
			{
				for (var i=1; i<=meret-4; i++)
					{
						for (var j=5; j<=meret; j++)
							{
								var egy=j-1;
								var ketto=j-2;
								var harom=j-3;
								var negy=j-4;
								var egy1=i+1;
								var ketto1=i+2;
								var harom1=i+3;
								var negy1=i+4;
								if ((document.getElementById(i+"_"+j).innerHTML==document.getElementById(egy1+"_"+egy).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(ketto1+"_"+ketto).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(harom1+"_"+harom).innerHTML) && (document.getElementById(i+"_"+j).innerHTML==document.getElementById(negy1+"_"+negy).innerHTML) && ((document.getElementById(i+"_"+j).innerHTML=="X") || (document.getElementById(i+"_"+j).innerHTML=="O")))
									{
										nyertes=document.getElementById(i+"_"+j).innerHTML;
										nyert=true;
										document.getElementById(i+"_"+j).className+=" nyert";
										document.getElementById(egy1+"_"+egy).className+=" nyert";
										document.getElementById(ketto1+"_"+ketto).className+=" nyert";
										document.getElementById(harom1+"_"+harom).className+=" nyert";
										document.getElementById(negy1+"_"+negy).className+=" nyert";
										break;
									}
							}
						if (nyert)
							{
								break;
							}
					}
			}
		if (nyert)
			{
				if ((jatekos1!="") && (nyertes=="X"))
					{
						nyertes=jatekos1;
					}
				if ((jatekos2!="") && (nyertes=="O"))
					{
						nyertes=jatekos2;
					}
				alert("A nyertes: "+nyertes);
			}
	}
function new_game()
	{
		nyert=false;
		ertek="X";
		szin="kek"
		var nyertes="";
		var jatekos1="";
		var jatekos2="";
		tabla();
	}
function jatekosok()
	{
		jatekos1 = prompt("Kérlek add meg az első (X) játékos nevét:");
		jatekos2 = prompt("Kérlek add meg a második (O) játékos nevét:");
	}
	
