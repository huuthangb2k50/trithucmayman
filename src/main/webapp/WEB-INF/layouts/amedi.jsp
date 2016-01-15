<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib tagdir="/WEB-INF/tags/util" prefix="util" %>
<%@page contentType="text/html; charset=UTF-8" %>
<%@page pageEncoding="UTF-8" %>
<%@page import="java.util.regex.Pattern" %>
<%@page import="java.util.regex.Matcher" %>
<%@page import="java.util.Collection" %>
<%@page import="org.springframework.security.core.GrantedAuthority" %>
<%@page import=" org.springframework.security.core.authority.AuthorityUtils" %>
<%@page import=" org.springframework.security.core.Authentication" %>
<%@page import="org.springframework.security.authentication.UsernamePasswordAuthenticationToken" %>
<%@page import="org.springframework.security.core.context.SecurityContextHolder" %>
<html>  
			
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=8" />	
		
		<meta name="title" content=""/>
		<meta name="keyword" content=""/>
		<meta name="description" content=""/>
		<!-- THêm 1 số thẻ hỗ trợ SEO -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		
		<spring:url value="/resources/amedi/bootstrap/css/bootstrap.min.css" var="bootstrap_min_css"/>	    	  
	    <link rel="stylesheet" type="text/css" href="${bootstrap_min_css}"/>
	    
	    <spring:url value="/resources/amedi/font-awesome/css/font-awesome.min.css" var="font_awesome_min_css"/> 
	    <link rel="stylesheet" type="text/css" href="${font_awesome_min_css}"/>
	    
	    <spring:url value="/resources/amedi/css/styles.css" var="style_css"/> 
	    <link rel="stylesheet" type="text/css" href="${style_css}"/>
	    
	    <spring:url value="/resources/amedi/css/slick.css" var="slick_css"/> 
		<link rel="stylesheet" type="text/css" href="${slick_css}"/>
		
		<spring:url value="/resources/amedi/css/reset.css" var="reset_css"/>
		<link rel="stylesheet" href="${reset_css}">
		
		<spring:url value="/resources/amedi/css/jquery.navgoco.css" var="navgoco_css"/>
		<link rel="stylesheet" href="${navgoco_css}">
		
		<spring:url value="/resources/amedi/css/responsive.css" var="responsive_css"/>
		<link rel="stylesheet" href="${responsive_css}">
		
		<spring:url value="/resources/amedi/css/css-menu.css" var="css_menu_css"/>
		<link rel="stylesheet" href="${css_menu_css}">
		
		<spring:url value="/resources/amedi/css/calendar.css" var="calendar_css"/>
		<link rel="stylesheet" href="${calendar_css}">
			
		<spring:url value="/resources/amedi/js/jquery.min.js" var="jquery_min_js"/>
 	
		<script type="text/javascript" src="${jquery_min_js}"></script>					 
		 
		 
		<spring:message code="application_name" var="app_name" htmlEscape="false"/>
		<title><spring:message code="welcome_h3" arguments="${app_name}" /></title>
	</head>
	
  	<body >  
  	<%
   		String f5ip ="(^(10)(\\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$)|(^(113\\.185\\.)([1-9]|1[0-9]|2[0-9]|3[0-1])(\\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])))";
   		String wapgwip = "(^172.16.30.1[1-2]$)|(113.185.0.16)";
   		Pattern F5IPPattern = Pattern.compile(f5ip);
   		Pattern WAPGWIPPattern = Pattern.compile(wapgwip); 

   		


   		String remoteip = request.getRemoteAddr();
   		String msisdn = request.getHeader("msisdn");
   		String xipaddress = request.getHeader("X-ipaddress");
   		String xforwarded = request.getHeader("X-Forwarded-For");
   		String xwapmsisdn = request.getHeader("X-Wap-MSISDN");
   		String userip = request.getHeader("User-IP");
   		String msisdn_ = "";

   		if (F5IPPattern.matcher(remoteip).matches()) { //đi qua F5
	   			if (msisdn!=null &&msisdn.startsWith("84")){
	   				msisdn_ = msisdn;
	   			} 
   		} else if (WAPGWIPPattern.matcher(remoteip).matches()){ //đi qua WAPGW
	   		if (xwapmsisdn!=null &&xwapmsisdn.startsWith("84")){
	   				msisdn_ = xwapmsisdn;
	   			} else {
	   				
	   			}
   		}

   		if (msisdn_.startsWith("84")){	//Hệthốngđãxácthựcsố MSISDN, lưuvào session
   			session.setAttribute("msisdn", msisdn_);
   		 Collection<? extends GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_USER");
         Authentication auth;
   		 auth = new UsernamePasswordAuthenticationToken(msisdn_, "admin@123", authorities);
         SecurityContextHolder.getContext().setAuthentication(auth);
   		
   		} else {
   			//Can notget MSISDN by MIM1STEP
   			//process next step: SSO, WAPID or OTP
   		}

   		
   		%>
   		 	
  				<tiles:insertAttribute name="header"/>	
  				
  				<tiles:insertAttribute name="horizonmenu" ignore="true"/>
  				<div class="main-content">
  					<div class="container col-md-9 " style="float: none;">
	    				<tiles:insertAttribute name="body"/>
	    				
	    			</div>
	    		</div> 
	    		<tiles:insertAttribute name="footer" ignore="true"/>		    				  
	</body>
</html>
