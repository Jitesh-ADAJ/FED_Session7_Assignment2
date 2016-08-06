function TabFun()
{
	var a1=document.getElementById("tab1");
	
	 for (i=0;i<5;i++)
	 {
	 	if(i%2==0)
		{
			a1.rows[i].style.display= 'none';
		}
	}
}
