 <%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
 
  <c:if test="${not empty param.login_error}">
      <div class="errors">
        <p>
          <spring:message code="security_login_unsuccessful" />
          <c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}" />
          .
        </p>
      </div>
    </c:if>
   <%--  <c:if test="${empty param.login_error}">
      <p>
        <spring:message code="security_login_message" />
      </p>
    </c:if> --%>
 
 <!-- Main content - START -->
 <div class="section box-shadows homebanner">
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="section cttg box-shadows  " >
 				<div class="" id="DangNhap" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       				<div class="modal-dialog">
          				<div id="" class="panel panel-primary">
           					<div class="panel-heading"><h3 class="panel-title">ĐĂNG NHẬP HỆ THỐNG</h3></div>
            				<div class="panel-body">
            					<spring:url value="/resources/j_spring_security_check" var="form_url" />
             					<form name="f" class="form-horizontal" id="login-form" role="form" method="post" action="${fn:escapeXml(form_url)}" >
                                     <div class="form-group">
                                        <label for="inputEmail" class="col-sm-3 control-label" style="font-size: 13px;">Số điện thoại</label>
                                     	<div class="col-sm-9">
                                         	<input class="form-control" id="j_username" name="j_username" placeholder="Số điện thoại" required value="" type="text">
                                        </div>
                                     </div>
                                     <div class="form-group">
                                        <label for="inputPassword" class="col-sm-3 control-label" style="font-size: 13px;">Password</label>
                                        <div class="col-sm-9">
                                            <input class="form-control" id="j_password" name="j_password" placeholder="Password" required value="" type="password">
                                        </div>
                                     </div>
                                     <div class="form-group">
                                        <label for="forgotPass" class="col-sm-3 control-label"></label>
                                        <div class="col-sm-9">
                                            <spring:url value="https://vinaphone.com.vn/auth/login?service=http%3A%2F%2Fphongthuy247.vn%2Fauth%2Fsso" var="amedisso"></spring:url>
                                            <a href="${amedisso}">VinaID</a>&nbsp;|&nbsp;
                							<a href="#">Lấy mã OTP</a>
                                        </div>
                                     </div>
                                     <div class="form-group">
                                        <div class="col-sm-offset-3 col-sm-9">
                                            <input type="submit" class="btn btn-danger btn-sm" id="login-form-submit" style="padding:10px;border-radius:5px;"  value="Đăng nhập" />
                                        </div>
                                     </div>
                                 </form>
            				</div>
          				</div>
       				</div>
      			</div>
      		</div>
		</div>
	</div>
</div> 