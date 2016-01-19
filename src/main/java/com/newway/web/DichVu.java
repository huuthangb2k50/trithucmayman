package com.newway.web;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newway.model.BundleStatus;
import com.newway.util.GetParamInfoSingleton;
import com.newway.util.SingletonConnection;

@RequestMapping("/dichvu/**")
@Controller
public class DichVu {

	private Logger log = Logger.getLogger(DichVu.class.getName());

    @RequestMapping(method = RequestMethod.POST, value = "{id}")
    public void post(@PathVariable Long id, ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {
    }

    @RequestMapping
    public String index(ModelMap modelMap, HttpSession session) {
    	List<BundleStatus> result = new ArrayList<BundleStatus>();
    	
    	
    	Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	
    	//User user = (User)authentication.getPrincipal();
    	//user.getUsername();
		//String name = user.getUsername();
		String name = authentication.getPrincipal().toString();
		log.debug("DichVu :" +name);
		if(name!=null && name.trim().length()>0 && !name.equalsIgnoreCase("anonymousUser")){
			log.debug(" ds bundle co msisdn");	
			String msisdn = authentication.getName();
			result = getDsBundleStatus(msisdn);
		}else{
			log.debug(" ds bundle full");
			result = getDsBundle();
		}
		
		
		
		//session.setAttribute("username", name);
		
		
    	modelMap.addAttribute("result", result);
        return "dichvu/index";
    }
    
    @ResponseBody
    @RequestMapping(value="/dichvu/ajax", method=RequestMethod.GET)
    public String ajaxGetUrl(@RequestParam(value="pkgname") String pkgname, @RequestParam(value="cmd") String cmd ){
    	String url ="";
    	
    	log.debug("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    	if(cmd.equalsIgnoreCase("REG")){
    		url=getRegUrl(pkgname);
    		
    		
    	}else if(cmd.equalsIgnoreCase("UNREG")){
    		url=getUnregUrl(pkgname);
    		
    	}
    	
    	return url;
    }
    
    private String getRegUrl(String pkgname){
    	String url="";
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
    	String requestDate = sdf.format(new Date());
    	String requestid = String.valueOf(System.currentTimeMillis());
    	GetParamInfoSingleton sys = GetParamInfoSingleton.getInstance();
    	
    	String returnUrlEndcode = encodeUrl(sys.getReturnUrl());
    	String backUrlEndcode = encodeUrl(sys.getBackUrl());
    	
    	//log.debug("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    	
    	url = "http://dk.vinaphone.com.vn/reg.jsp?requestid="+requestid+"&returnurl="+returnUrlEndcode+"&backurl="
    		  +backUrlEndcode+"&cp="+sys.getCp()+"&service="+sys.getService()+"&package="+pkgname+"&requestdatetime="+requestDate
    		  +"&channel=web"+"&securecode="+getSecureCode(requestid,sys.getReturnUrl(),sys.getBackUrl(),sys.getCp(),sys.getService(),pkgname,requestDate,"web",sys.getSecureCode());
    	//log.debug("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    	//log.debug(url);
    	//System.out.println(url);
    	return url;
    }
    
    private String getUnregUrl(String pkgname){
    	String url="";
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
    	String requestDate = sdf.format(new Date());
    	String requestid = String.valueOf(System.currentTimeMillis());
    	GetParamInfoSingleton sys = GetParamInfoSingleton.getInstance();
    	
      	String returnUrlEndcode = encodeUrl(sys.getReturnUrl());
    	String backUrlEndcode = encodeUrl(sys.getBackUrl());
    	
    	url = sys.getUnregUrl()+"?requestid="+requestid+"&returnurl="+returnUrlEndcode+"&backurl="
    		  +backUrlEndcode+"&cp="+sys.getCp()+"&service="+sys.getService()+"&package="+pkgname+"&requestdatetime="+requestDate
    		  +"&channel=web"+"&securecode="+getSecureCode(requestid,sys.getReturnUrl(),sys.getBackUrl(),sys.getCp(),sys.getService(),pkgname,requestDate,"web",sys.getSecureCode());
    	return url;
    }
    
    private String encodeUrl(String url){
    	String result = "";
    	
    	try {
			result = URLEncoder.encode(url, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	return result;
    	
    }
    
    private String getSecureCode(String requestid, String returnurl, String backurl, String cp, String service, String pkgname,
    		String requestdate, String channel, String securepass){
    	String messages = requestid+returnurl+backurl+cp+service+pkgname+requestdate+channel+securepass;
    	
    	//System.out.println("AAAA MESSAGE==++"+ messages);
		//log.debug("chuoi MD5:"+ messages);
		StringBuffer result = null;
		
		
		byte[] data = messages.getBytes();
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.reset();
			md.update(data);
			byte[] msgDigest = md.digest();
			result = new StringBuffer();
			for (int i = 0; i < msgDigest.length; i++) {
				String hex = Integer.toHexString(0xff & msgDigest[i]);
				if (hex.length() == 1)
					result.append('0');
				result.append(hex);
			}
		} catch (NoSuchAlgorithmException ex) {
			ex.printStackTrace();
		}
		
		//System.out.println("MD5=="+result.toString());
		//log.debug("MD5=="+ result.toString());
		return result.toString();

    	
    }
    
    private List<BundleStatus> getDsBundleStatus(String msisdn){
    	List<BundleStatus> result = new ArrayList<BundleStatus>();
    	Connection con = null;
    	Statement pstm = null;
		String sql = "select a.bundle_name as bundlename, " +
				     " a.price,tg_hieuluc||' '|| decode( lower(trim(donvi_tinh)),'ngay', 'Ngày','thang','Tháng'  ) as loaigoi, " + 
				     " nvl(e.active,0) active " +
				 "  from TTMM_CHARGE.CP_BUNDLES a LEFT OUTER JOIN (select * from TTMM_CHARGE.CP_SUBCRIBERS where msisdn ="+msisdn+") e " +
				 " ON a.id = e.bundle_id order by a.price; ";
    	try{
    		
    		System.out.println(sql);
    		//con = getConnection();
    		con = SingletonConnection.getInstance().getConnInst();
    		pstm = con.createStatement();
    		//pstm.setString(1, msisdn);
    		ResultSet rs = pstm.getResultSet();
    		BundleStatus bundle ; 
    		while(rs.next()){
    			bundle=new BundleStatus();
    			bundle.setBundleName(rs.getString("bundlename"));
    			bundle.setDonGia(rs.getLong("price"));
    			bundle.setLoaiGoi(rs.getString("loaigoi"));
    			bundle.setDkStatus(rs.getInt("active"));
    			result.add(bundle);
    			
    		}
    		rs.close();
    		pstm.close();
    		con.close();
    		
    	}catch(Exception e){
    		e.printStackTrace();
    	}finally{
    		if(con!=null){
    			try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
    		}
    	}
    	
    	return result;
    }
    
    private List<BundleStatus> getDsBundle(){
    	List<BundleStatus> result = new ArrayList<BundleStatus>();
    	Connection con = null;
    	PreparedStatement pstm = null;
		String sql = "select a.bundle_name as bundlename, "
				+ " a.price,tg_hieuluc||' '|| decode( lower(trim(donvi_tinh)),'ngay', 'Ngày','thang','Tháng'  ) as loaigoi "				 
				+ " from TTMM_CHARGE.CP_BUNDLES a  order by a.price " ;
				
    	try{
    		//con = getConnection();
    		con = SingletonConnection.getInstance().getConnInst();
    		pstm = con.prepareStatement(sql);
    		
    		ResultSet rs = pstm.executeQuery();
    		BundleStatus bundle ; 
    		while(rs.next()){
    			bundle=new BundleStatus();
    			bundle.setBundleName(rs.getString("bundlename"));
    			bundle.setDonGia(rs.getLong("price"));
    			bundle.setLoaiGoi(rs.getString("loaigoi"));    			
    			result.add(bundle);    			
    		}
    		rs.close();
    		pstm.close();
    		con.close();
    		
    	}catch(Exception e){
    		e.printStackTrace();
    	}finally{
    		if(con!=null){
    			try{
    				con.close();
    			}catch(Exception e){
    				
    			}
    		}
    	}
    	
    	return result;
    }
    
    
}
