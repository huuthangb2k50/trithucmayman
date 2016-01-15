 <%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
 <%@taglib uri="http://www.springframework.org/security/tags" prefix="security" %>

				<!-- Main content - START -->
                <div class="section box-shadows homebanner">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="section cttg box-shadows  " >
								<h2 class="text-center section-header">ĐĂNG KÝ DỊCH VỤ</h2>
								<div class="panel-group" >
									<div class="panel panel-default">
										<div class="table-responsive">
											<table class="table table-hover" style="font-size:12px" >
												<thead>
													<tr class="active">
														<th>Gói dịch vụ</th>
														<th>Loại gói</th>
														<th>Đơn giá</th>
														<th>Thao tác</th>
													</tr>
												</thead>
												<tbody>
													<c:if test="${not empty result}">
											<c:forEach var="listValue" items="${result}">
											<tr class="" >
											
											
												<td class="article-Cont">
													<h6><a href="#" class="bold">${listValue.bundleName }</a></h6>
												</td>
												<td class="article-Cont">
													<h6><a href="#" class="bold">${listValue.loaiGoi }</a></h6>
												</td>
												<td align="">
													<p class="text-success bold">${listValue.donGia }&nbsp; <span style="color: #000">VND</span></p>	
												</td>											
												<td>
													<c:choose>
														<c:when test="${listValue.dkStatus==0}">
															<c:choose>
																 <c:when test="${listValue.bundleName == 'MAYMAN'}">
																 	<a href="#" data-toggle="modal" data-target="#Registry" class="btn btn-sm btn-danger">Đăng ký</a>
																 	
																 		<div class="modal fade" id="Registry" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
																			<div class="modal-dialog">
																				<div class="modal-content">
																					<div class="modal-body">
																						<div id="" class="panel panel-primary">
																							<div class="panel-heading">
																								<h3 class="panel-title">Thông tin đăng ký gói dịch vụ TRITHUCMAYMAN</h3>
																							</div>
																							<div class="panel-body">
																							 
																								<form name="f" class="form-horizontal" id="login-form" role="form" method="post" action="" >
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Quý khách đã chọn đăng ký gói cước:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >Gói ${listValue.bundleName } ${listValue.loaiGoi }</label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Dịch vụ:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >TRITHUCMAYMAN</label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Giá gói:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >${listValue.donGia }&nbsp; <span style="color: #000">VND</span></label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group">
											                                                        	<div class=""  align="center">
																											<input type="submit" class="btn btn-success" value="Đăng ký"/>
																										</div>
											                                                        </div>
											                                                    </form>
											
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																 </c:when>
																 <c:otherwise>
																 	<a href="#"  onclick="ajax('${listValue.bundleName}','REG')" id="a_dk" class="btn btn-sm btn-danger">Đăng ký</a>
																 </c:otherwise>
															 </c:choose>
														</c:when>
														<c:when test="${listValue.dkStatus==1}">
															<c:choose>
																<c:when test="${listValue.bundleName == 'MAYMAN'}">
																 	<a href="#" data-toggle="modal" data-target="#Unregistry" class="btn btn-sm btn-danger">Hủy</a>
																 	
																 	<div class="modal fade" id="Registry" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
																			<div class="modal-dialog">
																				<div class="modal-content">
																					<div class="modal-body">
																						<div id="" class="panel panel-primary">
																							<div class="panel-heading">
																								<h3 class="panel-title">Thông tin hủy gói dịch vụ</h3>
																							</div>
																							<div class="panel-body">
																							 
																								<form name="f" class="form-horizontal" id="login-form" role="form" method="post" action="" >
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Quý khách đã chọn đăng ký gói cước:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >Gói ${listValue.bundleName } ${listValue.loaiGoi }</label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Dịch vụ:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >TRITHUCMAYMAN</label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group" style="margin-bottom: 0px;">
											                                                            <label for="inputEmail" class="col-sm-6 " >Giá gói:</label>
											                                                            <label for="inputEmail" class="col-sm-6 control-label" style="padding-top: 0px;" >${listValue.donGia }&nbsp; <span style="color: #000">VND</span></label>
											                                                        </div>
											                                                        <hr style="margin-top:5px;margin-bottom: 10px;">
											                                                        <div class="form-group">
											                                                        	<div class=""  align="center">
																											<input type="submit" class="btn btn-success" value="Hủy"/>
																										</div>
											                                                        </div>
											                                                    </form>
											
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		
																 </c:when>
																 <c:otherwise>
																 	<a href="#" onclick="ajax('${listValue.bundleName}','UNREG')" id="a_huydk" class="btn btn-sm btn-danger">Hủy</a>
																 </c:otherwise>
															 </c:choose>
														</c:when>
													</c:choose>							
													
													<div id="result_id"></div>																		
												</td>
											</tr>
											</c:forEach>
										</c:if>	
													
												<tr class="">
													<td colspan="100%"><div style="height:1px; font-size:1px"></div></td>
												</tr>
												</tbody>
											</table>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>  
				
			
			
				
				<div class="modal fade" id="Unregistry" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-body">
										<div id="thongbaoCash" class="panel panel-primary">
											<div class="panel-heading"><h3 class="panel-title">Thông tin hủy gói dịch vụ</h3></div>
												<div class="panel-body">
													<div id="thongbaoCash2" style="color:#F90; padding-bottom:20px; text-align:left">
														<p style="color:red">Dưới đây là toàn bộ thông tin chi tiết mô tả về gói dịch vụ</p>
													</div>
													<div class=""  align="center">
														<input type="submit" class="btn btn-success" value="Hủy"/>
													</div>
													
												</div>
										</div>
										<!--<div id="thongbaoCash" class="panel panel-primary" style="display:none"></div>-->
									</div>
								</div>
							</div>
				</div>
	 <script type="text/javascript">

  function popup(url,cmd) {
	  
      window.open(url, 'window', 'width=600,height=500');
  }
  
  function ajax(pkgname,cmd){
	 	//alert('pkgname='+pkgname +"&cmd="+cmd);
	  $.ajax({
          url : 'http://localhost:8080/trithucmayman/dichvu/ajax',
          data: 'pkgname='+pkgname +"&cmd="+cmd,
          success : function(data) {
        	//  alert(data);
              //$('#result_id').html(data);
              //popup(data);
             
              window.open(data, 'window', 'width=600,height=500,screenX=400,screenY=100');
          }
      });
	  
  }
  

</script>				
						