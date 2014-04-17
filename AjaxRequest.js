// JavaScript Document

/*

 * Plugin Name: Select with Database
 * Plugin URI: http://www.sayfdev.com/
 * Description: A simple way to populate select fields using jquery and database
 * Author: Khadime Diakhate
 * Author URI: http://www.sayfdev.com
 * Version: 1.0
 *
 * Copyright: (c) 2014 Sayfdev, LLC. (contact@sayfdev.com)
 *
 * License: GNU General Public License v3.0
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @author    Xadim
 * @category  Custom
 * @copyright Copyright (c) 2014, SayfDEV, LLC.
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License v3.0
 
 */

function GetXmlHttpObject(handler)
{
   var objXMLHttp=null
   if (window.XMLHttpRequest)
   {
       objXMLHttp=new XMLHttpRequest()
   }
   else if (window.ActiveXObject)
   {
       objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
   }
   return objXMLHttp
}
function stateChanged()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtResult").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}
function stateChanged2()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtResult2").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}
function stateChanged3()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtRslt1").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}
function stateChanged4()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtRslt2").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}

function stateChanged5()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtRslt5").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}
function stateChanged6()
{
   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
   {
           document.getElementById("txtRslt6").innerHTML= xmlHttp.responseText;
   }
   else {
           //alert(xmlHttp.status);
   }
}

// Will populate data based on input
function htmlData(url, qStr)
{
   if (url.length==0)
   {
       document.getElementById("txtResult").innerHTML="";
       return;
   }
   xmlHttp=GetXmlHttpObject()
   if (xmlHttp==null)
   {
       alert ("Browser does not support HTTP Request");
       return;
   }
   url=url+"?"+qStr;
   url=url+"&sid="+Math.random();
   xmlHttp.onreadystatechange=stateChanged;
   xmlHttp.open("GET",url,true) ;
   xmlHttp.send(null);
}

function htmlData2(url, qStr)
{
   if (url.length==0)
   {
       document.getElementById("txtResult2").innerHTML="";
       return;
   }
   xmlHttp=GetXmlHttpObject()
   if (xmlHttp==null)
   {
       alert ("Browser does not support HTTP Request");
       return;
   }
   url=url+"?"+qStr;
   url=url+"&sid="+Math.random();
   xmlHttp.onreadystatechange=stateChanged2;
   xmlHttp.open("GET",url,true) ;
   xmlHttp.send(null);
}
function htmlData3(url, qStr)
{
   if (url.length==0)
   {
       document.getElementById("txtRslt1").innerHTML="";
       return;
   }
   xmlHttp=GetXmlHttpObject()
   if (xmlHttp==null)
   {
       alert ("Browser does not support HTTP Request");
       return;
   }
   url=url+"?"+qStr;
   url=url+"&sid="+Math.random();
   xmlHttp.onreadystatechange=stateChanged3;
   xmlHttp.open("GET",url,true) ;
   xmlHttp.send(null);
}
function htmlData4(url, qStr)
{
   if (url.length==0)
   {
       document.getElementById("txtRslt2").innerHTML="";
       return;
   }
   xmlHttp=GetXmlHttpObject()
   if (xmlHttp==null)
   {
       alert ("Browser does not support HTTP Request");
       return;
   }
   url=url+"?"+qStr;
   url=url+"&sid="+Math.random();
   xmlHttp.onreadystatechange=stateChanged4;
   xmlHttp.open("GET",url,true) ;
   xmlHttp.send(null);
}
